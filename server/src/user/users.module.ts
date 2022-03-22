import { UserService } from './users.service';
import { User, UserSchema } from './models/users.schema';
import { UserResolver } from './users.resolver';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
