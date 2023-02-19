import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';


@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://mooncreater:1uX9WMLj1VhWqEV6@cluster0.wydy7.mongodb.net/nestjs-graphql?retryWrites=true&w=majority'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
