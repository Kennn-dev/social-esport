import { ObjectType, Field } from '@nestjs/graphql';
import mongoose from 'mongoose';
import { ResponseUserDto } from 'src/modules/user/dto/user.dto';

@ObjectType()
export class CategoryDto {
  @Field({ nullable: true })
  _id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  thumbnail: string;

  @Field(() => [ResponseUserDto], { nullable: true })
  followers: ResponseUserDto;
}
