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

  // @Get(":id")
  // async findById(@Param("id") id: string): Promise<Estate> {
  //   return this.estateService.findById(id);
  // }

  // @Get(":title")
  // async findOneByTitle(@Param("title") title: string): Promise<Estate> {
  //   return this.estateService.findOneByTitle(title);
  // }

  @Get("estate_id/:estate_id")
  async findOneByEstate_id(@Param("estate_id") estate_id: string): Promise<Estate> {
    return this.estateService.findOneByEstate_id(estate_id);
  }

  // @Get(':id')
  // async findOneById(@Param('id') id: string) {
  //   return this.estateService.findOneById(id);
  // }
}
