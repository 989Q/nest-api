import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BlogService } from "./blog.service";
import { Blog } from "./entities/blog.entity";

import { CreateBlogInput } from "./dto/create-blog.dto";
import { FindBlogInput } from "./dto/find-blog.input";
import { UpdateBlogInput } from "./dto/update-blog.input";

import { NotFoundException } from "@nestjs/common";

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private blogService: BlogService) {}

  // ____________________________________ Mutation ____________________________________

  @Mutation(() => Blog)
  async createBlog(
    @Args("createBlogInput") createBlogInput: CreateBlogInput
  ): Promise<Blog> {
    const { title, content } = createBlogInput;
    const blog = new Blog();
    blog.title = title;
    blog.content = content;
    blog.createdAt = new Date();
    blog.updatedAt = new Date();
    return this.blogService.create(blog);
  }

  @Mutation(() => Blog)
  async updateBlog(
    @Args('updateBlogInput') updateBlogInput: UpdateBlogInput,
  ): Promise<Blog> {
    const { id, title, content } = updateBlogInput;
    const blog = await this.blogService.findOne(id);
    if (!blog) {
      throw new NotFoundException(`Blog with ID ${id} not found`);
    }
    if (title) {
      blog.title = title;
    }
    if (content) {
      blog.content = content;
    }
    blog.updatedAt = new Date();
    return this.blogService.update(blog);
  }

  @Mutation(() => Boolean)
  async deleteBlog(@Args('id') id: string): Promise<boolean> {
    await this.blogService.delete(id);
    return true;
  }

  // ____________________________________ Query ____________________________________

  @Query(() => [Blog])
  async blogs() {
    return this.blogService.findAll();
  }

  @Query(() => Blog)
  async blog(@Args("input") { _id }: FindBlogInput) {
    return this.blogService.findById(_id);
  }

}
