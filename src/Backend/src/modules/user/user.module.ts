import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    controllers: [UserController], //Controladores
    providers: [UserService,PrismaService],   // Servicios 
    exports: [UserService]      // Servicios exportables
})

export class UserModule{}