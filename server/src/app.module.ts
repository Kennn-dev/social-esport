import { UserModule } from './user/users.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { FacebookStrategy } from './auth/facebook.strategy';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy],
})
export class AppModule {}
