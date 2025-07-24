import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DocumentService{
    
    constructor(private prisma: PrismaService){}

    //#region CRUD
    
    //GET
    getAllDocuments(){
        return this.prisma.document.findMany();
    }

    //#endregion
}

