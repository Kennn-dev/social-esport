import { UserService } from './users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/users.schema';
import { InputCreateUserDto, ResponseUserDto, UserDto } from './dto/user.dto';
import {
  HttpStatus,
  Req,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { UpdateUserInputDto } from './dto/update-user.dto';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { JWTPayload } from '../auth/jwt.strategy';
@Resolver(User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => String)
  async hello() {
    return 'Hello from user';
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [UserDto])
  async getAllUser() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => ResponseUserDto, { name: 'getUser' })
  async getUser(@Args('id') id: string) {
    return this.userService.findOne({ _id: id });
  }

  @Mutation(() => StatusResponseDto, { name: 'createUser' })
  async createNewUser(@Args('inputCreate') inputCreate: InputCreateUserDto) {
    const user = await this.userService.create(inputCreate);
    if (user) {
      return {
        status: HttpStatus.OK,
        message: 'Created succesfully !',
      };
    }
  }

  // update
  @Mutation(() => StatusResponseDto)
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Args('id') id: string,
    @Args('inputUpdate') inputUpdate: UpdateUserInputDto,
    @CurrentUser() user: JWTPayload,
  ) {
    return this.userService.update(id, inputUpdate, user);
  }
}
