import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field({ nullable: false })
  title: string;

  @Field({ nullable: true })
  thumbnail: string;
}
