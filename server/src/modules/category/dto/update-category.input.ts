import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => String, { nullable: false })
  id: string;
}
