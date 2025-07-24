import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';

@Module({
    controllers: [DocumentController], //Controladores
    providers: [DocumentService,PrismaService],   // Servicios 
    exports: [DocumentService]      // Servicios exportables
})

export class DocumentModule{}