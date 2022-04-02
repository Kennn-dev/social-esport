import { AuthService } from './auth.service';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { InputLoginDto, ResponseLoginDto } from '../user/dto/user.dto';
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => ResponseLoginDto || null)
  @UseGuards(GqlAuthGuard)
  async login(@Args('input') input: InputLoginDto, @Context() context) {
    return this.authService.login(context.user);
  }
}
