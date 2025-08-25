import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/ministry-communications-service/prisma/prisma.service';

@Injectable()
export class MinistryService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.ministry.findMany();
  }
}
