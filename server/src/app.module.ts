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
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    UserModule,
    AuthModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    FacebookStrategy,
    GoogleStrategy,
    AuthService,

    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
