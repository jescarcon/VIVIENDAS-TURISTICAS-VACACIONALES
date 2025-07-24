import { Controller, Get } from "@nestjs/common";
import { ClientService } from "./client.service";

@Controller('clients')
export class ClientController {

    constructor(private readonly clientService: ClientService) { }

    //#region CRUD
    @Get()
    getAll() {
        return this.clientService.getAllClients();
    }
    //#endregion


}