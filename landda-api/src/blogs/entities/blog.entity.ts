import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

import * as mongoose from 'mongoose';

export type BlogDocument = Blog & mongoose.Document;

@Schema()
@ObjectType()
export class Blog {
  @Field(() => ID)
  _id:number;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  content: string;

  // @Prop({ default: Date.now })
  @Prop({ required: true })
  @Field()
  createdAt: Date;

  // @Prop({ default: Date.now })
  @Prop({ required: true })
  @Field()
  updatedAt: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
