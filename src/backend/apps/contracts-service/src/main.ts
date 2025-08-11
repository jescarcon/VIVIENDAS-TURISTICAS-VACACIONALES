import { NestFactory } from '@nestjs/core';
import { ContractsServiceModule } from './contracts-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ContractsServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
