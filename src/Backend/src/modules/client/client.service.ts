import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ClientService{
    
    constructor(private prisma: PrismaService){}

    //#region CRUD
    
    //GET
    getAllClients(){
        return this.prisma.client.findMany();
    }

    //#endregion
}

