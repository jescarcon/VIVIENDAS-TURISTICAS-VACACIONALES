import { Controller, Get } from "@nestjs/common";
import { ContractService } from "./contract.service";

@Controller('contracts')
export class ContractController {

    constructor(private readonly contractService: ContractService) { }

    //#region CRUD
    @Get()
    getAll() {
        return this.contractService.getAllContracts();
    }
    //#endregion


}