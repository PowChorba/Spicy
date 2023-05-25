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
            name: newCat.name,
            idCategory: newCat.idCategory,
            img: newCat.img
        })

        return category.save()
    }

    async findAll(){
        let allCategory: CategoryPost[] = await this.categoryModel.find()
        allCategory = allCategory?.sort((a: CategoryPost,b: CategoryPost) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0
        })
        return allCategory
    }

    async counterClic(id: number){

        console.log('entra aca asdasdsd', id)
        const findCategory = await this.categoryModel.findOne({
            idCategory: id
        })
        if(findCategory.counter) findCategory.counter = findCategory.counter + 1
        else findCategory.counter = 1
        await findCategory.save()
        let allCategory: CategoryPost[] = await this.categoryModel.find()
        allCategory = allCategory?.sort((a: CategoryPost,b: CategoryPost) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0
        })
        return allCategory
    }
}
