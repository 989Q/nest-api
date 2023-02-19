import { Query, Resolver } from '@nestjs/graphql';
import { BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';

@Resolver(() => Blog)
export class BlogsResolver {
    constructor(private blogsService: BlogsService) {}

    @Query(() => [Blog])
    blogs(): Promise<Blog[]> {
        return this.blogsService.findAll();
    }
}
