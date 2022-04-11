import { FollowSchema } from './entities/follow.schema';
import { Follow } from './entities/follow.entity';
import { Module } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowResolver } from './follow.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from '../user/users.service';
import { User, UserSchema } from '../user/models/users.schema';
import { UserResolver } from '../user/users.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Follow.name, schema: FollowSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [FollowResolver, FollowService, UserService, UserResolver],
  exports: [FollowService],
})
export class FollowModule {}
