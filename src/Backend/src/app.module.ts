import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
// import { PropertyModule } from './modules/property/property.module';
// import { ReservationModule } from './modules/reservation/reservation.module';
// import { ClientModule } from './modules/client/client.module';
// import { ContractModule } from './modules/contract/contract.module';
// import { DocumentModule } from './modules/document/document.module';
// import { MinistryCommunicationModule } from './modules/ministryCommunication/ministry-communication.module';

@Module({
  imports: [
            UserModule
            // ,ReservationModule,PropertyModule,
            // MinistryCommunicationModule,DocumentModule,ContractModule,
            // ClientModule,
            ],
})
export class AppModule {}
