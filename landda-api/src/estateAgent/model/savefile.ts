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

  // // __________________ Estate Agent Status

  // @Prop({ required: true, unique: true })
  // estateAgent_id: string;

  // @Prop({ required: true, unique: true })
  // estateAgent_status: string;

  // @Prop({ required: true, unique: false })
  // estateAgent_membership: string;

  // // __________________ Estate Agent Details

  // @Prop({
  //   required: true,
  //   type: Map,
  //   of: String,
  // })
  // estateAgent_info: {
  //   profileImage: string;
  //   name: string;
  //   company: string;
  //   description: string;
  //   phone: string;
  //   email: string;
  // };

  // @Prop({
  //   required: false,
  //   type: Map,
  //   of: String,
  // })
  // contactMore: {
  //   contactLink1: string;
  //   contactLink2: string;
  //   contactLink3: string;
  // };

  // @Prop({ required: true })
  // createdAccount: Date;

  // // __________________ Estate Agent License

  // @Prop({ required: true, unique: false })
  // license_verified: string;

  // @Prop({
  //   required: false,
  //   type: Map,
  //   of: String,
  // })
  // license_card: {
  //   status: string;
  //   card_image: string;
  //   card_issuer:string; 
  //   card_number: string;
  //   front_4_digit_ID:string;
  //   last_4_digit_ID:string;
  //   person_name: string;
  //   license_type: string;
  //   expiration_date: string;
  //   approval_person: string;
  // };

  // // __________________ Estate Agent Properties

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Estate" }] })
  // active_listings: Estate[];

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Estate" }] })
  // past_sales: Estate[];
}

export const EstateAgentSchema = SchemaFactory.createForClass(EstateAgent);
