import { Injectable } from '@nestjs/common';

@Injectable()
export class MinistryCommunicationsServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
