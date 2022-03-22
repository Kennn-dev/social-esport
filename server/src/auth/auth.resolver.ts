import { GqlAuthGuard } from './../guards/gql-auth.guard';
import { AuthService } from './auth.service';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { InputLoginDto, ResponseLoginDto } from 'src/user/dto/user.dto';
import { UseGuards } from '@nestjs/common';
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => ResponseLoginDto || null)
  @UseGuards(GqlAuthGuard)
  async login(@Args('input') input: InputLoginDto, @Context() context) {
    return this.authService.login(context.user);
  }
}
