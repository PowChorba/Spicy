import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PornstarService } from './pornstar.service';
import { PornstarPost } from 'types';

@Controller('pornstar')
export class PornstarController {
    constructor(private pornstarService:PornstarService) {}

    @Post()
    newPornstar(@Body() data: PornstarPost){
        return this.pornstarService.createPornstar(data)
    }

    @Get(':page')
    findAll(@Param('page') page: string){
        return this.pornstarService.findAll(page)
    }

    @Get()
    findOne(@Query('name') name:string){
            return this.pornstarService.findByName(name)
    }
}
