import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInputDto {
  @Field({ nullable: true })
  lastName: string;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;
  @Field({ nullable: true })
  avatar: string;
  @Field({ nullable: true })
  backgroundImage: string;
}
