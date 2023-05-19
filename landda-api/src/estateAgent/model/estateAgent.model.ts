import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
// import { Estate } from "../../estate/model/estate.model";

export type EstateAgentDocument = EstateAgent & Document;

@Schema()
export class EstateAgent {
  @Prop({ required: true, unique: true })
  user_id: string;
  
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  image: string;
}

export const EstateAgentSchema = SchemaFactory.createForClass(EstateAgent);
