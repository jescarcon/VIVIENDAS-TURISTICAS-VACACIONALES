import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDtoType } from './dto/auth.dto';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    async register(data: RegisterDtoType) {
        const saltRounds = parseInt(process.env.BCRYPT_SALT || '10', 10);
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const user = await this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: hashedPassword,
                role: data.role,
                company_id: data.company_id,
            },
        });

        const token = this.jwt.sign({ id: user.id });

        return { token, user };
    }


    async login(data: { email: string; password: string }) {
        const user = await this.prisma.user.findUnique({
            where: { email: data.email },
        });

        if (!user || !(await bcrypt.compare(data.password, user.password))) {
            throw new UnauthorizedException('Credenciales incorrectas');
        }

        const token = this.jwt.sign({ sub: user.id, role: user.role });

        return { accessToken: token };
    }
}

