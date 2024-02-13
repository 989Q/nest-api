import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EstateAgent, EstateAgentDocument } from "../model/estateAgent.model";
// import { CreateEstateDto } from '../dto';

import { generateUniqueUserId } from "../../function/id-generator";

import { sign } from 'jsonwebtoken';

@Injectable()
export class EstateAgentService {
  constructor(
    @InjectModel(EstateAgent.name)
    private estateAgnetModel: Model<EstateAgentDocument>
  ) {}

  // ____________________________________ Create 

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
      const user_id = generateUniqueUserId();
      const createUser = new this.estateAgnetModel({
        user_id,
        email,
        name,
        image,
      });
      await createUser.save();

      const token = this.generateToken(user_id, email, name, image) 

      return { createUser, token};
    } else {
      const token = this.generateToken(userExists.user_id, email, name, image); 

      return { user: userExists, token }; // Return user and token
    }
  }

  // ____________________________________ JWT 

  private generateToken(user_id: string, email: string, name: string, image: string): string {
    const payload = { user_id, email, name, image };
    const secretKey = 'your_secret_key'; // Replace with your secret key
    const options = { expiresIn: '24h' }; // Set token expiration time (e.g., 24 hour)

    return sign(payload, secretKey, options);
  }
}
