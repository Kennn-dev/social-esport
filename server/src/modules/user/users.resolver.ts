import { UserService } from './users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/users.schema';
import { InputCreateUserDto, UserDto } from './dto/user.dto';
import { HttpStatus, Req, Request, UseGuards } from '@nestjs/common';
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
  @Mutation(() => StatusResponseDto)
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
    // console.log('user', user);
    return this.userService.update(id, inputUpdate, user);
  }
}
