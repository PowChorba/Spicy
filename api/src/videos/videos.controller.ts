import { Body, Controller, Post, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosSchema } from 'types';

@Controller('videos')
export class VideosController {
    constructor(private videosService: VideosService) {}

    @Post()
    createVideo(@Body() createOne: VideosSchema){
        return this.videosService.newVideo(createOne)
    }

    @Get(':id')
    findById(@Param('id') id: string){
        return this.videosService.findById(id)
    }

    @Get()
    findByTitle(@Query('title') title:string){
        return this.videosService.findByTitle(title)
    }

    // @Get(':category')
    // findByCategory(@Param('category', ParseIntPipe) id: number){
    //     return this.videosService.findByCategory(id)
    // }
}
