import { UserService } from './users.service';
import { User, UserSchema } from './models/users.schema';
import { UserResolver } from './users.resolver';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [UserResolver, UserService],
})
export class UserModule {}
