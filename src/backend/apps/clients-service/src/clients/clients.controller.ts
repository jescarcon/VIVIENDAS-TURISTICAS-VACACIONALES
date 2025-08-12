import { Controller, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async getAllReservations() {
    return await this.clientsService.findAll();
  }
}
