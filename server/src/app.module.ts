import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { FacebookStrategy } from './auth/facebook.strategy';
import { GoogleStrategy } from './auth/google.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthResolver } from './auth/auth.resolver';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
    AuthModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy, GoogleStrategy, AuthService],
})
export class AppModule {}
