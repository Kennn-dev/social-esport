import { Role } from './../../constaints/role';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CategoryDto } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { Roles } from '../auth/role/role.decorator';
import { RolesGuard } from 'src/guards/role.guard';

@Resolver('category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => CategoryDto, { name: 'createCategory' })
  async createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
    @Request() req,
  ) {
    // console.log(req);
    // return req.user;
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [CategoryDto], { name: 'getAllCategory' })
  async getAllCategory() {
    return this.categoryService.findAll();
  }

  // @Query(() => CategoryDto, { name: 'category' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.categoryService.findOne(id);
  // }

  @Mutation(() => CategoryDto)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => CategoryDto)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.remove(id);
  }
}
