import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { ContractModule } from './modules/contract/contract.module';
import { ClientModule } from './modules/client/client.module';
import { DocumentModule } from './modules/document/document.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule,ReservationModule,ContractModule,
            ClientModule,DocumentModule,AuthModule],
})
export class AppModule {}
