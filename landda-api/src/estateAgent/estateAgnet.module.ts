import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EstateAgent, EstateAgentSchema } from "./model/testUser.model";
import { EstateAgentService } from "./provider";
import { EstateAgentController } from "./controller";

@Module({
    imports: [MongooseModule.forFeature([{ name: EstateAgent.name, schema: EstateAgentSchema }])],
    providers: [EstateAgentService],
    controllers: [EstateAgentController]
})
export class EstateAgnetModule {}