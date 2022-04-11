import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFollowInput {
  @Field(() => Int)
  id: number;
}
// export class UpdateFollowInput extends PartialType() {
//   @Field(() => Int)
//   id: number;
// }
