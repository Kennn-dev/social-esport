import { ResponseDto } from './../user/dto/user.dto';
import { Model } from 'mongoose';
import { FOLLOW_STATUS } from './../../constaints/follow';
import {
  HttpException,
  Injectable,
  HttpStatus,
  forwardRef,
} from '@nestjs/common';
import { UserService } from '../user/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Follow, FollowDocument } from './entities/follow.schema';
import { handleError } from 'src/utils/errors';
import mongoose from 'mongoose';
import { Inject } from '@nestjs/common';
import { FollowDataDto, FollowObjDto } from './dto/follow.dto';
import { aggregateUser } from './utils';

@Injectable()
export class FollowService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    @InjectModel(Follow.name) private followModel: Model<FollowDocument>,
  ) {}

  async sendRequest(
    senderId: string,
    followerId: string,
  ): Promise<ResponseDto> {
    try {
      const sender = await this.userService.findOne({ id: senderId });
      const follower = await this.userService.findOne({ id: followerId });
      if (!sender || !follower) throw new Error("User doesn't exits bruhh");
      const isRequested = await this.followModel.findOne({
        followerId,
        userId: senderId,
      });
      if (isRequested)
        throw new Error('You have already submitted this request');
      const data = {
        followerId,
        userId: senderId,
        status: FOLLOW_STATUS.HOLD,
      };
      const result = new this.followModel(data);
      await result.save();
      return {
        message: 'Success',
        status: HttpStatus.OK,
      };
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  }

  async unfollow(followId: string): Promise<ResponseDto> {
    try {
      const isCompleted = await this.followModel.findByIdAndDelete(followId);
      if (isCompleted) {
        return {
          message: 'Unfollowed',
          status: HttpStatus.OK,
        };
      }
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  }

  /**
   *
   * @param senderId : Who is FollowerId in database
   * @param status
   */
  async replyRequest(
    senderId: string,
    status: FOLLOW_STATUS,
  ): Promise<ResponseDto> {
    try {
      const follower = await this.followModel.findOne({
        followerId: senderId,
      });
      if (!follower) throw new HttpException('Cannot find User', 503);
      follower.status = status;
      follower.save();
      return {
        status: HttpStatus.OK,
        message: 'Success',
      };
    } catch (error) {
      handleError(error);
    }
  }

  async findOne(params: any): Promise<Follow> {
    return this.followModel.findOne(params);
  }

  async findAll(): Promise<Follow[]> {
    return this.followModel.find();
  }

  /**
   *
   * @param id : requester
   */
  async getUserFollowData(userId: string): Promise<FollowDataDto> {
    // Who are follow "user" => this user is userId
    const aggregateQueryFollower = aggregateUser(
      {
        userId: new mongoose.Types.ObjectId(userId),
      },
      {
        localField: 'followerId',
        as: 'follower',
      },
    );
    const followerDt = await this.followModel
      .aggregate(aggregateQueryFollower)
      .exec();
    const countFollower = await this.followModel
      .find({
        userId: new mongoose.Types.ObjectId(userId),
      })
      .count();
    // console.log({ countFollower });
    const listUserFollower = followerDt.map((fl) => ({
      ...fl.follower[0],
      _id: fl.follower[0].id.toString(),
    }));
    // Who this "user" following => this user is followerId
    const aggregateQueryFollowing = aggregateUser(
      {
        followerId: new mongoose.Types.ObjectId(userId),
      },
      {
        localField: 'userId',
        as: 'following',
      },
    );
    const followingDt = await this.followModel
      .aggregate(aggregateQueryFollowing)
      .exec();

    const countFollowing = await this.followModel
      .find({
        followerId: new mongoose.Types.ObjectId(userId),
      })
      .count();

    const listUserFollowing = followingDt.map((fl) => ({
      ...fl.following[0],
      _id: fl.following[0].id.toString(),
    }));
    return {
      follower: { listUsers: listUserFollower, total: countFollower },
      following: { listUsers: listUserFollowing, total: countFollowing },
    };
  }

  update(id: number) {
    return `This action updates a #${id} follow`;
  }

  remove(id: number) {
    return `This action removes a #${id} follow`;
  }
}
