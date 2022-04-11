import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SendFollowReqDto {
  @Field({ nullable: false })
  followerId: string;
}
