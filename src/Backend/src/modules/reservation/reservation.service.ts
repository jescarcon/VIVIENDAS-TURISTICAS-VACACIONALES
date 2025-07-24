import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ReservationService{
    
    constructor(private prisma: PrismaService){}

    //#region CRUD
    
    //GET
    getAllReservations(){
        return this.prisma.reservation.findMany();
    }

    //#endregion
}

