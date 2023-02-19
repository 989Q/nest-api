import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';

import { CreateBlogInput } from './dto/create-blog.dto';

@Resolver(() => Blog)
export class BlogResolver {
    constructor(
        private blogService: BlogService
    ) {}

    // @Mutation(() => Blog)
    // async createBlog(@Args('input') blog: CreateBlogInput) {
    //   return this.blogService.createBlog(blog);
    // }

    @Mutation(() => Blog)
    async createBlog(
      @Args('createBlogInput') createBlogInput: CreateBlogInput,
    ): Promise<Blog> {
      const { title, content } = createBlogInput;
      const blog = new Blog();
      blog.title = title;
      blog.content = content;
      blog.createdAt = new Date();
      blog.updatedAt = new Date();
      return this.blogService.create(blog);
    }

    @Query(() => [Blog])
    async blogs () {
        return this.blogService.findAll();
    }

}
