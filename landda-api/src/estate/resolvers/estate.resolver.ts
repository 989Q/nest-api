import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { NotFoundException } from "@nestjs/common";

import { Estate } from "../models/estate.model";
import { EstateService } from "../providers";

import { CreateEstateInput, FindEstateInput } from "../dto";

@Resolver(() => Estate)
export class EstateResolver {
  constructor(private estateService: EstateService) {}

  // ____________________________________ Mutation ____________________________________

  @Mutation(() => Estate)
  async createEstate(
    @Args("createEstateInput") createEstateInput: CreateEstateInput
  ): Promise<Estate> {
    return await this.estateService.create(createEstateInput);
  }

  // ____________________________________ Query ____________________________________

  @Query(() => [Estate])
  async estates() {
    return this.estateService.findAll();
  }

  @Query(() => Estate)
  async estate(@Args("input") { _id }: FindEstateInput) {
    return this.estateService.findById(_id)
  }
}
