import { Injectable } from '@nestjs/common';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {
    async findAll(): Promise<Blog[]> {
        const blog = new Blog();
        blog.id = 1;
        blog.name = "Membo";

        return [blog];
    }
}
