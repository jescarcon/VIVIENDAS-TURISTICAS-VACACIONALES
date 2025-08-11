import { Body, Controller, Get, Post } from "@nestjs/common";
import { PropertiesService } from "./properties.service";

@Controller('properties')
export class PropertiesController {

    constructor(private readonly propertiesService: PropertiesService) { }

    @Get()
    async getAllReservations() {
        return await this.propertiesService.findAll();
    }
}