import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/users.module';
import { Post, PostSchema } from './entities/post.schema';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    // forwardRef(() => FollowModule),
    UserModule,
  ],
  providers: [PostService, PostResolver],
  exports: [PostModule, PostService, MongooseModule],
})
export class PostModule {}
