import { UserService } from './users.service';
import { User, UserSchema } from './models/users.schema';
import { UserResolver } from './users.resolver';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/category/models/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
