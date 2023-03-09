import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// mongodb
import { MongooseModule } from '@nestjs/mongoose';
import { EstateModule } from './estate/Estate.module';
import configuration from './config/configuration';

@Module({
  imports: [
    MongooseModule.forRoot(configuration.mongoUri), 
    EstateModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
