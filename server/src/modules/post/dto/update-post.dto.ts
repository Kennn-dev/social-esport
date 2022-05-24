import { InputType } from '@nestjs/graphql';
import { CreatePostInputDto } from './create-post.dto';

@InputType()
export class UpdatePostInputDto extends CreatePostInputDto {}
