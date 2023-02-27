import { Injectable } from "@nestjs/common";
import { Estate, EstateDocument } from "../models/estate.model";
// mongodb
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEstateInput } from "../dto/create-estate.input";

@Injectable()
export class EstateService {
  estates: Partial<Estate>[];
  constructor(
    @InjectModel(Estate.name) private estateModel: Model<EstateDocument>
  ) {}

  // ____________________________________ Mutation ____________________________________

  async create(createEstateInput: CreateEstateInput): Promise<Estate> {
    const createdAt = new Date();
    const updatedAt = new Date();

    const createdEstate = new this.estateModel({
      ...createEstateInput,
      createdAt,
      updatedAt,
    });

    return createdEstate.save();
  }

  // ____________________________________ Query ____________________________________

  async findAll() {
    return this.estateModel.find().lean();
  }

  async findById(id) {
    return this.estateModel.findById(id).lean();
  }
}
