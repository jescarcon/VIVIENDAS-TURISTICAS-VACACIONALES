import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('clients')
export class ClientsController {
  private readonly clientsServiceUrl =
    process.env.CLIENTS_SERVICE_URL || 'http://localhost:3004/clients';

  @Get()
  async getClients() {
    try {
      const response = await axios.get(this.clientsServiceUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching clients:', error.message);
      throw new HttpException(
        'Error al obtener los clientes',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
