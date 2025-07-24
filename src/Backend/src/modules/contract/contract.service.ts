import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ContractService{
    
    constructor(private prisma: PrismaService){}

    //#region CRUD
    
    //GET
    getAllContracts(){
        return this.prisma.contract.findMany();
    }

    //#endregion
}

