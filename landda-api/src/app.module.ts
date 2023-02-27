import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from 'dotenv';
import { EstateModule } from './estate/estate.module';
config(); // Load .env file

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI_DEV),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/generate/schema.gql',
    }),
    BlogsModule,
    EstateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
