import { Controller, Get } from '@nestjs/common';
import { MinistryCommunicationsServiceService } from './ministry-communications-service.service';

@Controller()
export class MinistryCommunicationsServiceController {
  constructor(private readonly ministryCommunicationsServiceService: MinistryCommunicationsServiceService) {}

  @Get()
  getHello(): string {
    return this.ministryCommunicationsServiceService.getHello();
  }
}
