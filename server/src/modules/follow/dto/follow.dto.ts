import { Field, Int, ObjectType } from '@nestjs/graphql';
import { FOLLOW_STATUS } from 'src/constants/follow';
import { ResponseUserDto } from 'src/modules/user/dto/user.dto';
@ObjectType()
export class FollowObjDto {
  @Field()
  _id: string;
  @Field(() => Int)
  status: FOLLOW_STATUS;
  @Field()
  followerId: string;

  @Field()
  userId: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}
@ObjectType()
export class FollowDto {
  @Field(() => Int)
  total: number;

  @Field(() => [ResponseUserDto])
  listUsers: ResponseUserDto[];
}

@ObjectType()
export class FollowDataDto {
  @Field(() => [FollowDataDto])
  follower: FollowDto;

  @Field(() => [FollowDataDto])
  following: FollowDto;
}
