import { Controller, Get, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { DocumentsService } from './documents.service';

@Controller('documents') 
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Get()
  async getDocuments() {
    return this.documentsService.findAll();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {storage: multer.memoryStorage()} ))
  async uploadDocument(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('No se ha subido ningún archivo', HttpStatus.BAD_REQUEST);
    }

    try {
      const extractedText = await this.documentsService.extractTextFromBuffer(file.buffer);
      return { extractedText };
    } catch (error) {
      console.error('Error en OCR:', error);
      throw new HttpException('Error procesando OCR', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
