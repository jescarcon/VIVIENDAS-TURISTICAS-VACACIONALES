import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/clients-service/prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.client.findMany();
  }
}
