/* eslint-disable prettier/prettier */
//Arquivo de controle de rotas
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { PlantasService } from './shared/plantas.service/plantas.service';
import { Plantas } from './shared/plantas';


@Controller('plantas')
export class PlantasController {

    constructor(
        private plantasService: PlantasService
        ) { }
        
    @Get()
    async getAll(): Promise<Plantas[]> {
        return this.plantasService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Plantas> {
        return this.plantasService.getById(id);
    }

    @Post() 
    async create(@Body() plantas: Plantas) : Promise<Plantas> {
        return await this.plantasService.create(plantas);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() plantas: Plantas): Promise<Plantas> {
        return this.plantasService.update(id, plantas);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.plantasService.delete(id);
   }        

}










