import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryPost } from 'types';

@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService) {}

    @Get()
    findAll(){
        return this.categoryService.findAll()
    }

    @Post()
    createCategory(@Body() name: CategoryPost) {
        return this.categoryService.newCategory(name)
    }
}
