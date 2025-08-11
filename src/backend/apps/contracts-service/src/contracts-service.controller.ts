import { Controller, Get } from '@nestjs/common';
import { ContractsServiceService } from './contracts-service.service';

@Controller()
export class ContractsServiceController {
  constructor(private readonly contractsServiceService: ContractsServiceService) {}

  @Get()
  getHello(): string {
    return this.contractsServiceService.getHello();
  }
}
