import { Module } from '@nestjs/common';
import { ContractsServiceController } from './contracts-service.controller';
import { ContractsServiceService } from './contracts-service.service';

@Module({
  imports: [],
  controllers: [ContractsServiceController],
  providers: [ContractsServiceService],
})
export class ContractsServiceModule {}
