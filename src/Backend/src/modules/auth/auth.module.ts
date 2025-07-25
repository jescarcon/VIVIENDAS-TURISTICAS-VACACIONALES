import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt'; //JWT


@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'SECRET_KEY',
            signOptions: {
                expiresIn: process.env.JWT_EXPIRATION || '7d',
            },
        }),
    ],  //JWT 

    controllers: [AuthController],
    providers: [AuthService, PrismaService],
    exports: [AuthService]
})

export class AuthModule { }

