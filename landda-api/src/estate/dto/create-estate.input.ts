import { Field, InputType } from "@nestjs/graphql";
import { LocationInput } from "./location.input";

@InputType()
export class CreateEstateInput {
  @Field()
  property_type: string;

  @Field()
  property_status: string;

  @Field()
  post_status: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => LocationInput)
  location: LocationInput;

  @Field()
  price: number;

  @Field()
  bedrooms: number;

  @Field()
  bathrooms: number;

  @Field()
  parking: number;

  @Field()
  size: number;

  @Field(() => [String])
  images: string[];
}