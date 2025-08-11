import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentsServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
