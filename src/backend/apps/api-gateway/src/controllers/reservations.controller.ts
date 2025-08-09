import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('reservations')
export class ReservationsController {
  private readonly reservationsServiceUrl =
    process.env.RESERVATIONS_SERVICE_URL || 'http://localhost:3002/reservations';

  @Get()
  async getReservations() {
    try {
      const response = await axios.get(this.reservationsServiceUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching reservations:', error.message);
      throw new HttpException(
        'Error al obtener las reservas',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
