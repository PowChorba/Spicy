import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './category.schema';
import { Model } from 'mongoose';
import { CategoryPost } from 'types';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>){}

    async newCategory(newCat: CategoryPost): Promise<Category> { 
        const category = await new this.categoryModel({
            name: newCat.name
        })

        return category.save()
    }

    async findAll(){
        return this.categoryModel.find()
    }
}
