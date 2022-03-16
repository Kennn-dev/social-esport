import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field(() => ID)
  _id: string;
  @Field()
  lastName: string;

  @Field()
  firstName: string;

  @Field()
  email: string;

  @Field()
  password: string;
  @Field({ nullable: true })
  avatar: string;
  @Field({ nullable: true })
  backgroundImage: string;
}

@InputType()
export class InputCreateUserDto {
  @Field({ nullable: false })
  lastName: string;

  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;
}
