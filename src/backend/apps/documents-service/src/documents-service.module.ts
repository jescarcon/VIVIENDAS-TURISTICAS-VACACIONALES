import { Module } from '@nestjs/common';
import { DocumentsServiceController } from './documents-service.controller';
import { DocumentsServiceService } from './documents-service.service';

@Module({
  imports: [],
  controllers: [DocumentsServiceController],
  providers: [DocumentsServiceService],
})
export class DocumentsServiceModule {}
