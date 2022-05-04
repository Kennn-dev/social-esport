import { JwtAuthGuard } from './../../guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { ResponseDto } from './../user/dto/user.dto';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FollowService } from './follow.service';
import { Follow } from './entities/follow.entity';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { TCurrentUser } from 'src/types/user';
import {} from './dto/follow.dto';

@Resolver(() => Follow)
export class FollowResolver {
  constructor(private readonly followService: FollowService) {}

  @Mutation(() => ResponseDto, { name: 'sendRequestFollow' })
  @UseGuards(JwtAuthGuard)
  create(
    @Args('followerId') followerId: string,
    @CurrentUser() user: TCurrentUser,
  ) {
    return this.followService.sendRequest(user.userId, followerId);
  }

  @Mutation(() => ResponseDto, { name: 'unfollow' })
  @UseGuards(JwtAuthGuard)
  unfollow(@Args('followId') id: string) {
    return this.followService.unfollow(id);
  }

  @Query(() => [Follow], { name: 'follow' })
  findAll() {
    return this.followService.findAll();
  }

  // @Query(() => GetFollowDataResponseDto, { name: 'getFollowData' })
  // getUserFollowData(@CurrentUser() user: TCurrentUser) {
  //   return this.followService.getUserFollowData(user.userId);
  // }

  @Mutation(() => Follow)
  removeFollow(@Args('id', { type: () => Int }) id: number) {
    return this.followService.remove(id);
  }
}
