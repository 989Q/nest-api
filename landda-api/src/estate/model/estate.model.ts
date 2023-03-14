import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EstateDocument = Estate & Document;

@Schema()
export class Estate {
  @Prop({ required: true, unique: true })
  // estate_id: number;
  estate_id: string;
  
  @Prop({ required: true })
  property_type: string;

  @Prop({ required: true })
  property_status: string;

  @Prop({ required: true })
  post_status: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({
    required: true,
    type: Map,
    of: String,
  })
  location: {
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
    country: string;
  };

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  bedrooms: number;

  @Prop({ required: true })
  bathrooms: number;

  @Prop({ required: true })
  parking: number;

  @Prop({ required: true })
  size: number;

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;
}

export const EstateSchema = SchemaFactory.createForClass(Estate);
