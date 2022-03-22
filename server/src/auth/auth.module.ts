import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/users.module';
import { UserService } from 'src/user/users.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { FacebookStrategy } from './facebook.strategy';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
  ],
  providers: [
    FacebookStrategy,
    GoogleStrategy,
    JwtStrategy,
    AuthResolver,
    AuthService,
    LocalStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthModule],
})
export class AuthModule {}
