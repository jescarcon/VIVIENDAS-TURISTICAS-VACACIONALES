import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/documents-service/prisma/prisma.service';
import * as Tesseract from 'tesseract.js';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.document.findMany();
  }

  async extractTextFromBuffer(fileBuffer: Buffer): Promise<string> {
    const result = await Tesseract.recognize(fileBuffer, 'spa+eng'); // OCR desde buffer
    return result.data.text;
  }
}
