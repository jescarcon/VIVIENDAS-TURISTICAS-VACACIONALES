import { Controller, Get, HttpException, HttpStatus, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import axios from 'axios';
import * as multer from 'multer';
import FormData from 'form-data'; // form-data de Node

@Controller('documents')
export class DocumentsController {
  private readonly documentsServiceUrl =
    process.env.DOCUMENTS_SERVICE_URL || 'http://localhost:3006/documents';

  @Get()
  async getDocuments() {
    try {
      const response = await axios.get(this.documentsServiceUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching documents:', error.message);
      throw new HttpException(
        'Error al obtener los documentos',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage: multer.memoryStorage() }))
  async uploadDocument(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('No se ha subido ningún archivo', HttpStatus.BAD_REQUEST);
    }

    try {
      const formData = new FormData();
      formData.append('file', file.buffer, { filename: file.originalname });

      const response = await axios.post(`${this.documentsServiceUrl}/upload`, formData, {
        headers: formData.getHeaders(),
      });

      return response.data; 

    } catch (error) {
      console.error('Error en OCR:', error.message);
      throw new HttpException('Error procesando OCR', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @Post('export-xml')
  async exportXml(@Body() body: any) {
    if (!body) {
      throw new HttpException(
        'No se han enviado datos para exportar',
        HttpStatus.BAD_REQUEST
      );
    }

    try {
      // Se envía todo el objeto JSON al backend
      const response = await axios.post(
        `${this.documentsServiceUrl}/export-xml`,
        body, // 👈 ahora es el JSON estructurado
        { responseType: 'text' } // XML se recibe como texto
      );

      return response.data;
    } catch (error: any) {
      console.error('Error exportando XML:', error.message);
      throw new HttpException(
        'Error exportando XML',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }  
}
