import { Injectable } from "@nestjs/common";
import { Blog, BlogDocument } from "./entities/blog.entity";
// mongodb
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class BlogService {

    blogs: Partial<Blog>[];
    constructor(
        @InjectModel(Blog.name) private blogModel: Model<BlogDocument>
    ) {}

    async create(blog: Blog): Promise<Blog> {
        const createdBlog = new this.blogModel(blog);
        return createdBlog.save();
    }

    async findAll() {
        return this.blogModel.find().lean();
    }

}
