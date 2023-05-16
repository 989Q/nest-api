import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from "mongoose";
import { EstateAgent } from 'src/estateAgent/model/testUser.model';

export type EstateDocument = Estate & Document;

@Schema()
export class Estate {
  @Prop({ required: true, unique: true })
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
    province: string
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

  // __________________ Property highlights 

  @Prop({ required: true })
  facilities: string[];

  @Prop({ required: true })
  comforts: string[];

  @Prop({ required: true })
  securityAndPrivacy: string[];

  // __________________ Property System 

  @Prop({ required: true })
  googleMapsLink: string[];

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "EstateAgent" }] })
  estateAgent: EstateAgent[];
}

export const EstateSchema = SchemaFactory.createForClass(Estate);