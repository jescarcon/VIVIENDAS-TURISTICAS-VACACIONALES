import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';

@Module({
    controllers: [ContractController], //Controladores
    providers: [ContractService,PrismaService],   // Servicios 
    exports: [ContractService]      // Servicios exportables
})

export class ContractModule{}