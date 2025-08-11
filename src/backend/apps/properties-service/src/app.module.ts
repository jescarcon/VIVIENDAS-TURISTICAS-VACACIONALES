import { Module } from '@nestjs/common';
import { PropertiesController } from './properties/properties.controller';
import { PropertiesService } from './properties/properties.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    controllers: [PropertiesController],
    providers: [PropertiesService,PrismaService],
    exports: [PropertiesService]
})

export class AppModule {}
