import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('ministry')
export class MinistryController {
  private readonly ministryServiceUrl =
    process.env.MINISTRY_SERVICE_URL || 'http://localhost:3005/ministry';

  @Get()
  async getMinistry() {
    try {
      const response = await axios.get(this.ministryServiceUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching ministry data:', error.message);
      throw new HttpException(
        'Error al obtener los datos del ministerio.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
