import { NestFactory } from '@nestjs/core';
import { MinistryCommunicationsServiceModule } from './ministry-communications-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MinistryCommunicationsServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
