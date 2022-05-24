import {
  Injectable,
  HttpStatus,
  HttpException,
  ForbiddenException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from '../user/users.service';
import { CreatePostInputDto } from './dto/create-post.dto';
import { Post, PostDocument } from './entities/post.schema';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { TCurrentUser } from 'src/types/user';
import mongoose from 'mongoose';
import { UpdatePostInputDto } from './dto/update-post.dto';
@Injectable()
export class PostService {
  constructor(
    // private userService: UserService,
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}
  async create(
    createPostDto: CreatePostInputDto,
    author: TCurrentUser,
  ): Promise<StatusResponseDto> {
    if (!author) throw new HttpException('Cannot find author', 400);
    const post = new this.postModel(createPostDto);
    post.author = new mongoose.Types.ObjectId(author.userId);
    await post.save();
    return {
      message: 'Create post successful !',
      status: HttpStatus.OK,
    };
  }
  async update(
    id: string,
    updatePostDto: UpdatePostInputDto,
    author: TCurrentUser,
  ): Promise<StatusResponseDto> {
    if (!author) throw new HttpException('Cannot find author', 400);
    const post = await this.postModel.findById(id);
    if (author.userId !== post.author.toString())
      throw new ForbiddenException("You don't have permission to edit");
    await post.update(updatePostDto);
    await post.save();
    return {
      message: 'Update post successful !',
      status: HttpStatus.OK,
    };
  }
  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  async remove(id: string, author: TCurrentUser): Promise<StatusResponseDto> {
    if (!author) throw new HttpException('Cannot find author', 400);
    const post = await this.postModel.findById(id);
    if (author.userId !== post.author.toString())
      throw new ForbiddenException("You don't have permission to delete");
    await post.deleteOne({
      _id: post._id,
    });
    return {
      message: 'Delete post successful !',
      status: HttpStatus.OK,
    };
  }
}
