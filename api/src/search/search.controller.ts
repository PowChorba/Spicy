import { Body, Controller, Get, Post } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchModel } from 'types';

@Controller('search')
export class SearchController {
    constructor(private searchService: SearchService){}

    @Get()
    getAll(){
        return this.searchService.findAll()
    }

    @Post()
    create(@Body() word: SearchModel){
        return this.searchService.refreshWord(word)
    }
}
