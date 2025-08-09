import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations/reservations.controller';
import { ReservationsService } from './reservations/reservations.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ReservationsController],
  providers: [ReservationsService,PrismaService],
  exports: [ReservationsService]
  
})
export class AppModule {}
