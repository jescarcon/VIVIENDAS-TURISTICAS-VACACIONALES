import { Controller, Get } from "@nestjs/common";
import { ReservationService } from "./reservation.service";

@Controller('reservations')
export class ReservationController {

    constructor(private readonly reservationService: ReservationService) { }

    //#region CRUD
    @Get()
    getAll() {
        return this.reservationService.getAllReservations();
    }
    //#endregion


}