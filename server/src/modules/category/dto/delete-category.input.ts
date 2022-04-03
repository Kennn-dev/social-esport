import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DeleteCategoryResponseDto {
  @Field(() => Int)
  status: number;

  @Field(() => String)
  message: string;
}
