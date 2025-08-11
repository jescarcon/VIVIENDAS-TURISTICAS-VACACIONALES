import { Test, TestingModule } from '@nestjs/testing';
import { MinistryCommunicationsServiceController } from './ministry-communications-service.controller';
import { MinistryCommunicationsServiceService } from './ministry-communications-service.service';

describe('MinistryCommunicationsServiceController', () => {
  let ministryCommunicationsServiceController: MinistryCommunicationsServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MinistryCommunicationsServiceController],
      providers: [MinistryCommunicationsServiceService],
    }).compile();

    ministryCommunicationsServiceController = app.get<MinistryCommunicationsServiceController>(MinistryCommunicationsServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ministryCommunicationsServiceController.getHello()).toBe('Hello World!');
    });
  });
});
