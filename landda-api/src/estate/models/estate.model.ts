import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose";

import * as mongoose from 'mongoose';

@ObjectType()
export class Location {
  @Prop()
  @Field()
  address: string;

  @Prop()
  @Field()
  subdistrict: string;

  @Prop()
  @Field()
  district: string;

  @Prop()
  @Field()
  province: string;

  @Prop()
  @Field()
  postcode: string;

  @Prop()
  @Field()
  country: string;
}

export type EstateDocument = Estate & mongoose.Document;

@Schema()
@ObjectType()
export class Estate {
  @Field(() => ID)
  _id:number;

  @Prop()
  @Field()
  property_type: string;

  @Prop()
  @Field()
  property_status: string;

  @Prop()
  @Field()
  post_status: string;

  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field()
  description: string;

  @Prop()
  @Field(() => Location)
  location: Location;

  @Prop()
  @Field()
  price: number;

  @Prop()
  @Field()
  bedrooms: number;

  @Prop()
  @Field()
  bathrooms: number;

  @Prop()
  @Field()
  parking: number;

  @Prop()
  @Field()
  size: number;

  @Prop()
  @Field(() => [String])
  images: string[];

  // @Prop({ default: Date.now })
  @Prop()
  @Field()
  createdAt: Date;

  // @Prop({ default: Date.now })
  @Prop()
  @Field()
  updatedAt: Date;
}

export const EstateSchema = SchemaFactory.createForClass(Estate);