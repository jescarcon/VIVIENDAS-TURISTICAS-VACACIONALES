import { Module } from '@nestjs/common';
import { MinistryCommunicationsServiceController } from './ministry-communications-service.controller';
import { MinistryCommunicationsServiceService } from './ministry-communications-service.service';

@Module({
  imports: [],
  controllers: [MinistryCommunicationsServiceController],
  providers: [MinistryCommunicationsServiceService],
})
export class MinistryCommunicationsServiceModule {}
