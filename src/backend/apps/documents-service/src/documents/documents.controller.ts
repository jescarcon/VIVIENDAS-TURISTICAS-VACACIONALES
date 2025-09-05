// documents.controller.ts
import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  Header,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}
  
  @Get()
  async getDocuments() {
    return this.documentsService.findAll();
  }
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('No se envió ningún archivo', HttpStatus.BAD_REQUEST);
    }
    return this.documentsService.extractTextFromBuffer(file.buffer);
  }

  @Post('export-xml')
  @Header('Content-Type', 'application/xml')
  @Header('Content-Disposition', 'attachment; filename="document.xml"')
  exportXml(@Body() body: any): string {
    if (!body) {
      throw new HttpException('No se ha enviado contenido para exportar', HttpStatus.BAD_REQUEST);
    }
    return this.documentsService.generateXml(body);
  }
}
