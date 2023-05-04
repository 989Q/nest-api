import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// mongodb
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';

// part
import { EstateModule } from './estate/Estate.module';
import { EstateAgnetModule } from './estateAgent/estateAgnet.module';

@Module({
  imports: [
    MongooseModule.forRoot(configuration.mongoUri), 
    EstateModule,
    EstateAgnetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
