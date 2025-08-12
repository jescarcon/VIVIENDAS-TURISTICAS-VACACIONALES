import { Module } from '@nestjs/common';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ClientsController],
  providers: [ClientsService,PrismaService],
  exports: [ClientsService]
  
})
export class AppModule {}
