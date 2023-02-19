import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Blog {
    @Field()
    id: number;

    @Field()
    name: string;

    @Field({nullable: true})
    type?: string;
}