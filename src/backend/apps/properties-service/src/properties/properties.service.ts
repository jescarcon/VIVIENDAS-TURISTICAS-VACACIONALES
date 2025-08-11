import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/properties-service/prisma/prisma.service';

@Injectable()
export class PropertiesService {

    constructor(private prisma: PrismaService) { }

    async findAll() {
        return await this.prisma.property.findMany();
    }
}

