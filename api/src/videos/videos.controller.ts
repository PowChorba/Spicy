import { Body, Controller, Post, Get, Param, ParseIntPipe } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosSchema } from 'types';

@Controller('videos')
export class VideosController {
    constructor(private videosService: VideosService) {}

    @Get()
    findAll(){
        return this.videosService.findAll()
    }

    @Post()
    createVideo(@Body() createOne: VideosSchema){
        return this.videosService.newVideo(createOne)
    }

    @Get(':category')
    findById(@Param('category', ParseIntPipe) id: number){
        return this.videosService.findById(id)
    }
}
