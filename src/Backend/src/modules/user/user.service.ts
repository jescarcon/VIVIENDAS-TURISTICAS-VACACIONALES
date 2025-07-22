import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getAllUsers() {
    return this.prisma.user.findMany();
  }

  getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  createUser(data: { email: string; name: string; role: string; company_id?: number }) {
    return this.prisma.user.create({ data });
  }

  updateUser(id: number, data: Partial<{ email: string; name: string; role: string; company_id?: number }>) {
    return this.prisma.user.update({ where: { id }, data });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
