import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EstateService } from '../provider';
import { CreateEstateDto } from '../dto';
import { Estate } from '../model/estate.model';

@Controller('estate')
export class EstateController {
  constructor(private readonly estateService: EstateService) {}

  @Post()
  async create(@Body() createEstateDto: CreateEstateDto): Promise<Estate> {
    return this.estateService.create(createEstateDto);
  }

  // ____________________________________ Get ____________________________________

  @Get()
  async findAll(): Promise<Estate[]> {
    return this.estateService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Estate> {
    return this.estateService.findById(id);
  }

}