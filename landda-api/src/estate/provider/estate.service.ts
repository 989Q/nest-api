import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Estate, EstateDocument } from '../model/estate.model';
import { CreateEstateDto } from '../dto';

@Injectable()
export class EstateService {
  constructor(@InjectModel(Estate.name) private estateModel: Model<EstateDocument>) {}

  async create(createEstateDto: CreateEstateDto): Promise<Estate> {
    const createdAt = new Date()
    const updatedAt = new Date();

    const createdEstate = new this.estateModel({
      ...createEstateDto,
      createdAt,
      updatedAt,
    });
    return createdEstate.save();
  }

  // async update(id: string, updateEstateDto: CreateEstateDto): Promise<Estate> {
  //   const updatedEstate = await this.estateModel
  //     .findByIdAndUpdate(id, updateEstateDto, { new: true })
  //     .exec();
  //   if (!updatedEstate) {
  //     throw new NotFoundException(`Estate with id ${id} not found`);
  //   }
  //   return updatedEstate;
  // }

  async update(id: string, updateEstateDto: CreateEstateDto): Promise<Estate> {
    const estate = await this.estateModel
      .findByIdAndUpdate(id, updateEstateDto, { new: true })
      .exec();
  
    if (!estate) {
      throw new NotFoundException(`Estate with id ${id} not found`);
    }
  
    estate.updatedAt = new Date(); // Set updatedAt to current date and time
    return estate.save();
  }

  // ____________________________________ Get ____________________________________

  async findAll(): Promise<Estate[]> {
    return this.estateModel.find().exec();
  }

  async findById(id: string): Promise<Estate> {
    const estate = await this.estateModel.findById(id).exec();
    if (!estate) {
      throw new NotFoundException('not found');
    }
    return estate;
  }

}
