import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EstateAgent, EstateAgentDocument } from '../model/testUser.model';
// import { CreateEstateDto } from '../dto';

import { generateUniqueId } from '../../function/id-generator';

@Injectable()
export class EstateAgentService {
  constructor(@InjectModel(EstateAgent.name) private estateModel: Model<EstateAgentDocument>) {}

//   async create(createEstateDto: CreateEstateDto): Promise<EstateAgent> {
//     const estate_id = generateUniqueId();
//     const createdAt = new Date()
//     const updatedAt = new Date();

//     // Check if the generated ID already exists in the database
//     const existingEstate = await this.estateModel.findOne({ estate_id }).exec();
//     if (existingEstate) {
//       // If the ID already exists, generate a new one recursively
//       return this.create(createEstateDto);
//     }

//     const createdEstate = new this.estateModel({
//       ...createEstateDto,
//       estate_id,
//       createdAt,
//       updatedAt,
//     });
//     return createdEstate.save();
//   }

//   async update(id: string, updateEstateDto: CreateEstateDto): Promise<EstateAgent> {
//     const estate = await this.estateModel
//       .findByIdAndUpdate(id, updateEstateDto, { new: true })
//       .exec();
  
//     if (!estate) {
//       throw new NotFoundException(`Estate with id ${id} not found`);
//     }
  
//     estate.updatedAt = new Date(); // Set updatedAt to current date and time
//     return estate.save();
//   }

  // ____________________________________ Get ____________________________________

  // async findAll(): Promise<Estate[]> {
  //   return this.estateModel.find().exec();
  // }

  async findAll(queryParams): Promise<EstateAgent[]> {
    const filter = {};
    if (queryParams.title) {
      filter['title'] = { $regex: queryParams.title, $options: 'i' };
    }
    if (queryParams.type) {
      filter['property_type'] = queryParams.type;
    }
    return this.estateModel.find(filter).exec();
  }

  // async findById(id: string): Promise<Estate> {
  //   const estate = await this.estateModel.findById(id).exec();
  //   if (!estate) {
  //     throw new NotFoundException('not found');
  //   }
  //   return estate;
  // }

  // async findOneByTitle(title: string): Promise<Estate> {
  //   const estate = await this.estateModel.findOne({ title }).exec();
  //   if (!estate) {
  //     throw new NotFoundException(`Estate with title ${title} not found`);
  //   }
  //   return estate;
  // }

  async findOneByEstate_id(estate_id: string): Promise<EstateAgent> {
    const estate = await this.estateModel.findOne({ estate_id }).exec();
    if (!estate) {
      throw new NotFoundException(`Estate with estate_id ${estate_id} not found`);
    }
    return estate;
  }

  // async findOneById(id: string): Promise<Estate> {
  //   return this.estateModel.findOne({ estate_id: id }).exec();
  // }
}
