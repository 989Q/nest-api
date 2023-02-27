import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FindEstateInput {
  @Field()
  _id: string;
}