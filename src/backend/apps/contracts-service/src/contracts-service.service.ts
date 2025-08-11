import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractsServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
