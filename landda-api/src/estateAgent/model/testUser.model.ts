import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Estate } from "../../estate/model/estate.model";  

export type EstateAgentDocument = EstateAgent & Document;

@Schema()
export class EstateAgent {
  @Prop({ required: true, unique: true })
  estateAgent_id: string;

  @Prop({ required: true, unique: true })
  estateAgent_status: string;

  @Prop({ required: true, unique: false })
  estateAgent_verified: string;

  @Prop({ required: true, unique: false })
  estateAgent_membership: string;

  @Prop({
    required: true,
    type: Map,
    of: String,
  })
  estateAgent_info: {
    profile: string;
    name: string;
    company: string;
    description: string;
    phone: string;
    email: string;
  };

  @Prop({
    required: false,
    type: Map,
    of: String,
  })
  contact: {
    contactLink1: string;
    contactLink2: string;
    contactLink3: string;
  };

  @Prop({
    required: false,
    type: Map,
    of: String,
  })
  license: {
    image: string;
    holder: string;
    number: string;
    name: string;
    fourFrontDigits: string;
    type: string;
    company: string;
    expiration_date: Date;
    licensee: string;
  };

  @Prop({ required: true })
  createdAccount: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Estate' }] })
  estates: Estate[];
}

export const EstateAgentSchema = SchemaFactory.createForClass(EstateAgent);
