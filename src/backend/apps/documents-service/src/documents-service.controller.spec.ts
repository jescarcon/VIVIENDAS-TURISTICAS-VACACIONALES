import { Test, TestingModule } from '@nestjs/testing';
import { DocumentsServiceController } from './documents-service.controller';
import { DocumentsServiceService } from './documents-service.service';

describe('DocumentsServiceController', () => {
  let documentsServiceController: DocumentsServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DocumentsServiceController],
      providers: [DocumentsServiceService],
    }).compile();

    documentsServiceController = app.get<DocumentsServiceController>(DocumentsServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(documentsServiceController.getHello()).toBe('Hello World!');
    });
  });
});
