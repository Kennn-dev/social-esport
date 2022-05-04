import { FollowModule } from './../follow/follow.module';
import { UserService } from './users.service';
import { User, UserSchema } from './models/users.schema';
import { UserResolver } from './users.resolver';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from '../category/models/category.schema';
import { FollowService } from '../follow/follow.service';
import { forwardRef } from '@nestjs/common';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => FollowModule),
    CategoryModule,
  ],
  controllers: [],
  providers: [UserResolver, UserService],
  exports: [UserModule, UserService, MongooseModule],
})
export class UserModule {}
