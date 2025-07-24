import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';

@Module({
    controllers: [ReservationController], //Controladores
    providers: [ReservationService,PrismaService],   // Servicios 
    exports: [ReservationService]      // Servicios exportables
})

export class ReservationModule{}