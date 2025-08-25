import { Module } from '@nestjs/common';
import { DocumentsController } from './documents/documents.controller';
import { DocumentsService } from './documents/documents.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({
    controllers: [DocumentsController],
    providers: [DocumentsService,PrismaService],
    exports: [DocumentsService]
})

export class AppModule {}
