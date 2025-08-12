import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('properties')
export class PropertiesController {
  private readonly propertiesServiceUrl =
    process.env.PROPERTIES_SERVICE_URL || 'http://localhost:3003/properties';

  @Get()
  async getReservations() {
    try {
      const response = await axios.get(this.propertiesServiceUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching properties:', error.message);
      throw new HttpException(
        'Error al obtener las propiedades',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


}
