import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; //JWT
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './auth/prisma/prisma.service';


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

export class AppModule {}
