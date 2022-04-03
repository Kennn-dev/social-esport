import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class StatusResponseDto {
  @Field(() => Int)
  status: number;

  @Field()
  message: string;
}
