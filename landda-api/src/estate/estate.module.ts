import { Module } from '@nestjs/common';
import { EstateService } from './providers';
import { EstateResolver } from './resolvers';
import { MongooseModule } from '@nestjs/mongoose';
import { Estate, EstateSchema } from './models/estate.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Estate.name, schema: EstateSchema}
    ])
  ],
  providers: [EstateService, EstateResolver]
})
export class EstateModule {}
