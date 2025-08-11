import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { ReservationsController } from './controllers/reservations.controller';
import { PropertiesController } from './controllers/properties.controller';


@Module({
  imports: [],
  controllers: [AuthController,ReservationsController,PropertiesController],
  providers: [],
})
export class AppModule {}
