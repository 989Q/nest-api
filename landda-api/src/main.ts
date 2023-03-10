import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cors from "cors";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use CORS middleware
  app.use(cors());
  // or use this to only allow requests from a specific origin
  // app.use(cors({ origin: 'http://localhost:3000' }));
  
  await app.listen(5000);
}
bootstrap();
