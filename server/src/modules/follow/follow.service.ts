import { ResponseDto } from './../user/dto/user.dto';
import { Model } from 'mongoose';
import { FOLLOW_STATUS } from './../../constaints/follow';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/users.service';
import { InjectModel } from '@nestjs/mongoose';
import { Follow, FollowDocument } from './entities/follow.schema';
import { handleError } from 'src/utils/errors';
type FollowInfo = {
  following: string[];
  follower: string[];
};
@Injectable()
export class FollowService {
  constructor(
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
  async getUserFollowData(id: string): Promise<FollowInfo> {
    const follower = await this.followModel
      .find({ followerId: id })
      .populate('followerId');
    const following = await this.followModel
      .find({ userId: id })
      .populate('userId');
    console.log(follower, following);
    return {
      follower: [],
      following: [],
    };
  }

  update(id: number) {
    return `This action updates a #${id} follow`;
  }

  remove(id: number) {
    return `This action removes a #${id} follow`;
  }
}
