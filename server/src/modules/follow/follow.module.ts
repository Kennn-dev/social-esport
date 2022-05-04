import { Follow, FollowSchema } from './entities/follow.schema';
import { forwardRef, Module } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowResolver } from './follow.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/users.module';
import { UserService } from '../user/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Follow.name, schema: FollowSchema }]),
    forwardRef(() => UserModule),
  ],
  providers: [FollowResolver, FollowService],
  exports: [FollowModule, FollowService, MongooseModule],
})
export class FollowModule {}
