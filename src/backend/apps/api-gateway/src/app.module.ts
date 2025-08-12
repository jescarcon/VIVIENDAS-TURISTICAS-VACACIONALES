import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { ReservationsController } from './controllers/reservations.controller';
import { PropertiesController } from './controllers/properties.controller';
import { ClientsController } from './controllers/client.controller';


@Module({
  imports: [],
  controllers: [AuthController,ReservationsController,PropertiesController,ClientsController],
  providers: [],
})
export class AppModule {}
