import { ObjectType, Field, ID, InputType, Int } from '@nestjs/graphql';

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
export class InputLoginDto {
  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;
}

@ObjectType()
export class ResponseUserDto {
  @Field()
  lastName: string;

  @Field()
  firstName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  avatar: string;
  @Field({ nullable: true })
  backgroundImage: string;
}

@ObjectType()
export class ResponseLoginDto {
  @Field((type) => ResponseUserDto)
  user: ResponseUserDto;

  @Field()
  accessToken: string;

  @Field({ nullable: true })
  tokenType: string;
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

  @Field({ nullable: false })
  passwordConfirm: string;
}

@ObjectType()
export class ResponseDto {
  @Field(() => Int)
  status: number;
  @Field()
  message: string;
}
