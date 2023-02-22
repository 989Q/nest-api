import { Module } from '@nestjs/common';
import { BlogService } from './providers';
import { BlogResolver } from './resolvers';
import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from './models/blog.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Blog.name, schema: BlogSchema}
    ])
  ],
  providers: [BlogService, BlogResolver]
})
export class BlogsModule {}
