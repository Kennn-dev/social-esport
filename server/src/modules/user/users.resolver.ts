import { UserService } from './users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/users.schema';
import { InputCreateUserDto, ResponseDto, UserDto } from './dto/user.dto';
import { HttpStatus, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
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
  @Mutation(() => ResponseDto)
  async createNewUser(@Args('inputCreate') inputCreate: InputCreateUserDto) {
    const user = await this.userService.create(inputCreate);
    if (user) {
      return {
        status: HttpStatus.OK,
        message: 'Created succesfully !',
      };
    }
  }
}
