import { Injectable } from "@nestjs/common";
import { Blog, BlogDocument } from "./entities/blog.entity";
// mongodb
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BlogService {
  blogs: Partial<Blog>[];
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  // ____________________________________ Mutation ____________________________________

  async create(blog: Blog): Promise<Blog> {
    const createdBlog = new this.blogModel(blog);
    return createdBlog.save();
  }

  async findOne(id: string): Promise<Blog> {
    return this.blogModel.findById(id).exec();
  }
  
  async update(blog: Blog): Promise<Blog> {
    return this.blogModel.findByIdAndUpdate(blog._id, blog, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.blogModel.findByIdAndDelete(id).exec();
  }

  // ____________________________________ Query ____________________________________   

  async findAll() {
    return this.blogModel.find().lean();
  }

  async findById(id) {
    return this.blogModel.findById(id).lean();
  }

}
