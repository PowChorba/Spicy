import { Body, Controller, Post, Get, Param, Query } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosType } from 'types';

@Controller('videos')
export class VideosController {
    constructor(private videosService: VideosService) {}

    @Post()
    createVideo(@Body() createOne: VideosType){
        return this.videosService.newVideo(createOne)
    }

    @Get(':page')
    getVideos(@Param('page') page: string){
        if(page.length < 4 && page.length !== 0){
            return this.videosService.findAll(page)
        }else{
            return this.videosService.findById(page)
        }
    }
    
    // @Get('single/:id')
    // findById(@Param('id') id: string){
    //     return this.videosService.findById(id)
    // }

    @Get()
    findByTitle(@Query('title') title:string){
        return this.videosService.findByTitle(title)
    }


    // @Get(':category')
    // findByCategory(@Param('category', ParseIntPipe) id: number){
    //     return this.videosService.findByCategory(id)
    // }
}
