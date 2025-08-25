import { Controller, Get } from '@nestjs/common';
import { MinistryService } from './ministry.service';

@Controller('ministry')
export class MinistryController {
  constructor(private readonly ministryService: MinistryService) {}

  @Get()
  async getAllMinistry() {
    return await this.ministryService.findAll();
  }
}
