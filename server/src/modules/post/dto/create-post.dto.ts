import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
@InputType()
export class CreatePostInputDto {
  @Field({ nullable: true, description: 'Max length 2000 characters' })
  @MaxLength(2000)
  content: string;

  @Field((type) => [String], { nullable: true })
  listImage?: string[];

  @Field({ nullable: true })
  typeView: string;

  @Field({ defaultValue: true })
  canComment: boolean;
}
