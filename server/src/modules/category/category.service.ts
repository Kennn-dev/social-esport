import { UserService } from './../user/users.service';
import { Model, Types } from 'mongoose';
import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './models/category.schema';
import { handleError } from 'src/utils/errors';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { queryGetAllCategory } from './utils';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
    private readonly userService: UserService,
  ) {}
  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const category = new this.categoryModel(createCategoryInput);
    await category.save();
    return category;
  }

  async findAll(): Promise<Category[]> {
    const query = queryGetAllCategory();
    return this.categoryModel.aggregate(query);
  }

  findOne(id: number) {
    return this.categoryModel.findById(id);
  }

  async follow(userId: string, categoryId: string): Promise<StatusResponseDto> {
    try {
      const user = await this.userService.findOne({
        _id: new Types.ObjectId(userId),
      });
      const category = await this.categoryModel.findById(categoryId);
      category.followers.push(user._id);
      await category.save();
      return {
        message: 'OK',
        status: HttpStatus.OK,
      };
    } catch (error) {
      handleError(error);
    }
  }

  async unfollow(
    userId: string,
    categoryId: string,
  ): Promise<StatusResponseDto> {
    try {
      const user = await this.userService.findOne({
        _id: new Types.ObjectId(userId),
      });
      if (!user) throw new Error('User id not found');
      const category = await this.categoryModel.findById(categoryId);
      const followers = category.followers.filter(
        (v) => v.toString() !== userId,
      );
      category.followers = followers;
      await category.save();
      return {
        message: 'OK',
        status: HttpStatus.OK,
      };
    } catch (error) {
      handleError(error);
    }
  }
  async update(
    id: string,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<StatusResponseDto> {
    try {
      const { thumbnail, title } = updateCategoryInput;
      const category = await this.categoryModel.findByIdAndUpdate(id, {
        thumbnail,
        title,
      });
      const res = await category.save();
      if (res) {
        return {
          status: HttpStatus.OK,
          message: 'Update Success',
        };
      }
    } catch (error) {
      handleError(error);
    }
  }

  async remove(id: string): Promise<StatusResponseDto> {
    const res = await this.categoryModel.findByIdAndRemove(id);
    try {
      if (!res) throw new NotFoundException('Cannot find category :( ');
      if (res) {
        return {
          status: HttpStatus.OK,
          message: 'Delete success ',
        };
      }
    } catch (error) {
      handleError(error);
    }
  }
}
