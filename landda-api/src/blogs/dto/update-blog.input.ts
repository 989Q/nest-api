import { CreateBlogInput } from './create-blog.dto';
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
@InputType()
export class UpdateBlogInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;
}
