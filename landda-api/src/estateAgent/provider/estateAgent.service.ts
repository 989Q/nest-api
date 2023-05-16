import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EstateAgent, EstateAgentDocument } from "../model/testUser.model";
// import { CreateEstateDto } from '../dto';

import { generateUniqueId } from "../../function/id-generator";

@Injectable()
export class EstateAgentService {
  constructor(
    @InjectModel(EstateAgent.name)
    private estateAgnetModel: Model<EstateAgentDocument>
  ) {}

  // ____________________________________ Create ____________________________________

  async login({
    email,
    name,
    image,
  }: {
    email: string;
    name: string;
    image: string;
  }): Promise<any> {
    const userExists = await this.estateAgnetModel.findOne({
      email: email,
    });
    if (!userExists) {
      const createUser = new this.estateAgnetModel({
        email,
        name,
        image,
      });
      await createUser.save();
      return createUser;
    } else {
      return userExists;
    }
  }

  // ____________________________________ Get ____________________________________
}
