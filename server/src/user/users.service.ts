import { InputCreateUserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './models/users.schema';
import { hash } from 'bcrypt';
import { HASH } from 'src/constaints/hash';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async create(createUserDto: InputCreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }
}
