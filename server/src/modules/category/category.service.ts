import { Model } from 'mongoose';
import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './models/category.schema';

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
    return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryInput: UpdateCategoryInput) {
    const { thumbnail, title } = updateCategoryInput;
    const category = await this.categoryModel.findByIdAndUpdate(id, {
      thumbnail,
      title,
    });
    await category.save();
    return category;
  }

  async remove(id: number) {
    return this.categoryModel.findByIdAndRemove(id).then(() => {
      return {
        status: HttpStatus.OK,
        message: `This action removes a #${id} category`,
      };
    });
  }
}
