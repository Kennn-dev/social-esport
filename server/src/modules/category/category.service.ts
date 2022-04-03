import { Model } from 'mongoose';
import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './models/category.schema';
import { DeleteCategoryResponseDto } from './dto/delete-category.input';
import { handleError } from 'src/utils/errors';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}
  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const category = new this.categoryModel(createCategoryInput);
    await category.save();
    return category;
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find();
  }

  findOne(id: number) {
    return this.categoryModel.findById(id);
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
