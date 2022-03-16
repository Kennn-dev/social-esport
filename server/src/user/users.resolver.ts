import { UserService } from './users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/users.schema';
import { UserDto, InputCreateUserDto } from './dto/user.dto';
@Resolver(User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => String)
  async hello() {
    return 'Hello from user';
  }

  @Query(() => [UserDto])
  async getAllUser() {
    return this.userService.findAll();
  }

  @Mutation(() => UserDto)
  async createNewUser(@Args('input') input: InputCreateUserDto) {
    return this.userService.create(input);
  }
}
