import { JwtAuthGuard } from './../../guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { ResponseDto } from './../user/dto/user.dto';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FollowService } from './follow.service';
import { Follow } from './entities/follow.entity';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { TCurrentUser } from 'src/types/user';

@Resolver(() => Follow)
export class FollowResolver {
  constructor(private readonly followService: FollowService) {}

  @Mutation(() => ResponseDto, { name: 'sendRequestFollow' })
  @UseGuards(JwtAuthGuard)
  create(
    @Args('followerId') followerId: string,
    @CurrentUser() user: TCurrentUser,
  ) {
    console.log('current user', user);
    return this.followService.sendRequest(user.userId, followerId);
  }

  @Query(() => [Follow], { name: 'follow' })
  findAll() {
    return this.followService.findAll();
  }

  @Query(() => Follow, { name: 'follow' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.followService.findOne(id);
  }

  @Mutation(() => Follow)
  removeFollow(@Args('id', { type: () => Int }) id: number) {
    return this.followService.remove(id);
  }
}
