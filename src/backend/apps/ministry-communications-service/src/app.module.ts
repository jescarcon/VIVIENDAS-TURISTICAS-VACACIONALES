import { Module } from '@nestjs/common';
import { MinistryController } from './ministry/ministry.controller';
import { MinistryService } from './ministry/ministry.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [MinistryController],
  providers: [MinistryService,PrismaService],
  exports: [MinistryService]
  
})
export class AppModule {}
