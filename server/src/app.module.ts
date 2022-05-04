import { FollowService } from './modules/follow/follow.service';
import { CloudinaryService } from './modules/cloudinary/cloudinary.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from './guards/role.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthModule } from './modules/auth/auth.module';
import { FacebookStrategy } from './modules/auth/facebook.strategy';
import { GoogleStrategy } from './modules/auth/google.strategy';
import { AuthService } from './modules/auth/auth.service';
import { UserModule } from './modules/user/users.module';
import { CategoryModule } from './modules/category/category.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { FollowModule } from './modules/follow/follow.module';
import { UserService } from './modules/user/users.service';
import { CategoryService } from './modules/category/category.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: false,
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => ({ req, res }),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10h' },
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    CloudinaryModule,
    FollowModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    FacebookStrategy,
    GoogleStrategy,
    AuthService,
    UserService,
    CloudinaryService,
    FollowService,
    CategoryService,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
