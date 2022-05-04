import { FollowDto } from './../follow/dto/follow.dto';
import { FollowService } from './../follow/follow.service';
import {
  InputCreateUserDto,
  ResponseUserDto,
  ResponseUserDetailDto,
} from './dto/user.dto';
import { Model } from 'mongoose';
import {
  HttpException,
  Injectable,
  NotFoundException,
  HttpStatus,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { InjectModel, Schema } from '@nestjs/mongoose';
import { User, UserDocument } from './models/users.schema';

import { handleError } from 'src/utils/errors';
import { UpdateUserInputDto } from './dto/update-user.dto';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { JWTPayload } from '../auth/jwt.strategy';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @Inject(forwardRef(() => FollowService))
    private followService: FollowService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async createUserWithSocialAccount(data: any): Promise<User> {
    try {
      const { email, facebookId, googleId } = data;

      const userCheck = await this.userModel.findOne({ email });
      if (userCheck)
        throw new HttpException('Sorry, This e-mail is already taken ', 400);
      if (facebookId) {
        console.log(data);
        const user = new this.userModel(data);
        return await user.save();
      }

      if (googleId) {
        const user = new this.userModel(data);
        return await user.save();
      }
    } catch (error) {
      handleError(error);
    }
  }
  async create(createUserDto: InputCreateUserDto): Promise<User> {
    try {
      const { password, passwordConfirm, email } = createUserDto;
      const userCheck = await this.userModel.findOne({ email });
      if (userCheck)
        throw new HttpException('Sorry, This e-mail is already taken ', 400);
      if (password !== passwordConfirm)
        throw new HttpException(
          'Password and Password confirm are not match',
          400,
        );
      const user = new this.userModel(createUserDto);
      return await user.save();
    } catch (error) {
      console.log(error);

      handleError(error);
    }
  }
  async getUserById(id: string): Promise<ResponseUserDetailDto> {
    try {
      const user = await this.userModel.findById(id);

      const follow = await this.followService.getUserFollowData(
        user._id.toString(),
      );

      const { _id, avatar, backgroundImage, email, firstName, lastName, role } =
        user;
      // console.log(_id.toString());
      const res: ResponseUserDetailDto = {
        _id: _id.toString(),
        avatar,
        backgroundImage,
        email,
        role,
        firstName,
        lastName,
        follower: follow.follower,
        following: follow.following,
      };
      console.log(res.follower.listUsers);
      return res;
    } catch (error) {
      handleError(error);
    }
  }
  async findOne(params): Promise<User> {
    const user = await this.userModel.findOne(params);
    return user;
  }

  async update(
    id: string,
    data: UpdateUserInputDto,
    userReq: JWTPayload,
  ): Promise<StatusResponseDto> {
    try {
      const user = await this.userModel.findByIdAndUpdate(id, data);
      console.log(
        user._id.toString(),
        userReq.userId,
        user._id.toString() == userReq.userId,
      );
      if (user && user._id.toString() == userReq.userId) {
        return {
          status: HttpStatus.OK,
          message: 'Update Success',
        };
      }
      return {
        status: HttpStatus.UNAUTHORIZED,
        message: 'Invalid Request',
      };
    } catch (error) {
      handleError(error);
    }
  }
}
