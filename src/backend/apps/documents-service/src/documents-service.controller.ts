import { Controller, Get } from '@nestjs/common';
import { DocumentsServiceService } from './documents-service.service';

@Controller()
export class DocumentsServiceController {
  constructor(private readonly documentsServiceService: DocumentsServiceService) {}

  @Get()
  getHello(): string {
    return this.documentsServiceService.getHello();
  }
}
