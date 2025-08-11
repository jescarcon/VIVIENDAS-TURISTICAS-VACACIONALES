import { Test, TestingModule } from '@nestjs/testing';
import { ContractsServiceController } from './contracts-service.controller';
import { ContractsServiceService } from './contracts-service.service';

describe('ContractsServiceController', () => {
  let contractsServiceController: ContractsServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ContractsServiceController],
      providers: [ContractsServiceService],
    }).compile();

    contractsServiceController = app.get<ContractsServiceController>(ContractsServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(contractsServiceController.getHello()).toBe('Hello World!');
    });
  });
});
