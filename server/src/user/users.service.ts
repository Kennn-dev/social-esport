import { InputCreateUserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './models/users.schema';
import { hash } from 'bcrypt';
import { HASH } from 'src/constaints/hash';
import { LoginPayload } from 'src/common/socialLogin';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
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
      if (typeof error === 'string') throw new HttpException(error, 500);

      if (error instanceof Error) throw new HttpException(error.message, 500);
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
      if (typeof error === 'string') throw new HttpException(error, 500);

      if (error instanceof Error) throw new HttpException(error.message, 500);
    }
  }
  async findOne(params, cb?: (err, u: any) => void): Promise<User> {
    const user = await this.userModel.findOne(params, cb);
    if (!user) return null;
    return user;
  }
}
