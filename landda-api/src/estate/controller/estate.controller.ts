import { Controller, Get, Post, Body, Param, Put, Query } from "@nestjs/common";
import { EstateService } from "../provider";
import { CreateEstateDto } from "../dto";
import { Estate } from "../model/estate.model";

@Controller("estate")
export class EstateController {
  constructor(private readonly estateService: EstateService) {}

  @Post()
  async create(@Body() createEstateDto: CreateEstateDto): Promise<Estate> {
    return this.estateService.create(createEstateDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateEstateDto: CreateEstateDto
  ): Promise<Estate> {
    return this.estateService.update(id, updateEstateDto);
  }

  // ____________________________________ Get ____________________________________

  //   @Get()
  //   async findAll(): Promise<Estate[]> {
  //     return this.estateService.findAll();
  //   }

  @Get()
  findAll(@Query() queryParams): Promise<Estate[]> {
    return this.estateService.findAll(queryParams);
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Estate> {
    return this.estateService.findById(id);
  }
}
