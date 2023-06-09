import { Body, Controller, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryPost } from 'types';

@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService) {}

    @Get()
    findAll(){
        return this.categoryService.findAll()
    }

    
    @Get(':id')
    getCategory(@Param('id') id:number) {
        return this.categoryService.counterClic(id)
    }

    @Post()
    createCategory(@Body() name: CategoryPost) {
        return this.categoryService.newCategory(name)
    }

    @Get('/videos/:id')
    getVideoCategory(@Param('id', ParseIntPipe) id: number){
        return this.categoryService.videoCategory(id)
    }
}
