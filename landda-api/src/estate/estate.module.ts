import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Estate, EstateSchema } from './model/estate.model';
import { EstateService } from './provider';
import { EstateController } from './controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Estate.name, schema: EstateSchema }])],
  providers: [EstateService],
  controllers: [EstateController]
})
export class EstateModule {}
