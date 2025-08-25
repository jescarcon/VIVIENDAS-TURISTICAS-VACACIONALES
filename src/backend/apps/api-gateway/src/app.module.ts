import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { ReservationsController } from './controllers/reservations.controller';
import { PropertiesController } from './controllers/properties.controller';
import { ClientsController } from './controllers/client.controller';
import { MinistryController } from './controllers/ministry.controller';
import { DocumentsController } from './controllers/documents.controller';


@Module({
  imports: [],
  controllers: [AuthController,ReservationsController,
    PropertiesController,ClientsController,MinistryController,
    DocumentsController
  ],
  providers: [],
})
export class AppModule {}
