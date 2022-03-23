import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  _id: string;

  @Field({ nullable: false })
  title: string;

  @Field({ nullable: true })
  thumbnail: string;

  @Field(() => [String])
  followers: [string];
}
