import { Controller, Get, Query } from '@nestjs/common';
import { NavbarService } from './navbar.service';

@Controller('navbar')
export class NavbarController {
    constructor(private navbarService: NavbarService){}

    @Get('/video')
    findVideo(@Query('title') title:string){
        return this.navbarService.findVideos(title)
    }

    @Get('/pornstar')
    findPornstar(@Query('title') title:string){
        return this.navbarService.findActores(title)
    }

}
