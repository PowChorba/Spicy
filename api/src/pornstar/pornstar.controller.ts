import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PornstarService } from './pornstar.service';
import { PornstarPost } from 'types';

@Controller('pornstar')
export class PornstarController {
    constructor(private pornstarService:PornstarService) {}

    @Post()
    newPornstar(@Body() data: PornstarPost){
        return this.pornstarService.createPornstar(data)
    }

    @Get()
    findAll(){
        return this.pornstarService.findAll()
    }

    @Get(':name')
    findOne(@Param('name') name:string){
            return this.pornstarService.findByName(name)
    }
}
