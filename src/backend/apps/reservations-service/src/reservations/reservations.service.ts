import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/reservations-service/prisma/prisma.service';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.reservation.findMany();
  }
}
