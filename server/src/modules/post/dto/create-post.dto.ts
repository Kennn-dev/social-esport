import { Field, ObjectType } from '@nestjs/graphql';

export class CreatePostDto {}

@ObjectType()
export class CreatePostInputDto {
  @Field()
  content: string;

  @Field()
  listImage: string[];

  @Field({ nullable: true })
  typeView: string;

  @Field({ defaultValue: true })
  canComment: boolean;
}
