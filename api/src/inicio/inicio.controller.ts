import { Controller, Get } from '@nestjs/common';
import { InicioService } from './inicio.service';

@Controller('inicio')
export class InicioController {
    constructor(private inicioService:InicioService) {}

    @Get('/category')
    async getCategories(){
        return this.inicioService.findCategory()
    }

    @Get('/pornstar')
    async getPornstar(){
        return this.inicioService.findPornstar()
    }

    @Get('/videos')
    async getVideos(){
        return this.inicioService.finVideos()
    }

}
