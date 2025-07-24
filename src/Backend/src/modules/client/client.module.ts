import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
    controllers: [ClientController], //Controladores
    providers: [ClientService,PrismaService],   // Servicios 
    exports: [ClientService]      // Servicios exportables
})

export class ClientModule{}