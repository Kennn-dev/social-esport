import { JwtAuthGuard } from './../../guards/jwt-auth.guard';
import { ResponseDto } from './../user/dto/user.dto';
import { Role } from './../../constaints/role';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Request, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/role/role.decorator';
import { RolesGuard } from 'src/guards/role.guard';
import { DeleteCategoryResponseDto } from './dto/delete-category.input';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { TCurrentUser } from 'src/types/user';
import { CategoryDto } from './dto/category.dto';

// @UseGuards(JwtAuthGuard)
@Resolver('category')
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  // @Roles(Role.Admin)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Mutation(() => CategoryDto, { name: 'createCategory' })
  async createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [CategoryDto], { name: 'getAllCategory' })
  async getAllCategory() {
    return this.categoryService.findAll();
  }

  @Query(() => CategoryDto, { name: 'getDetailCategory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => ResponseDto, { name: 'followCategory' })
  @UseGuards(JwtAuthGuard)
  follow(@Args('categoryId') catId: string, @CurrentUser() user: TCurrentUser) {
    return this.categoryService.follow(user.userId, catId);
  }

  @Mutation(() => ResponseDto, { name: 'unfollowCategory' })
  @UseGuards(JwtAuthGuard)
  unfollow(
    @Args('categoryId') catId: string,
    @CurrentUser() user: TCurrentUser,
  ) {
    return this.categoryService.unfollow(user.userId, catId);
  }

  @Mutation(() => StatusResponseDto, { name: 'updateCategory' })
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => DeleteCategoryResponseDto, { name: 'deleteCategory' })
  removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.remove(id);
  }
}
