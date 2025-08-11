import { NestFactory } from '@nestjs/core';
import { DocumentsServiceModule } from './documents-service.module';

async function bootstrap() {
  const app = await NestFactory.create(DocumentsServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
