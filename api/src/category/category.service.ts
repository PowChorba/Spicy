import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './category.schema';
import { Model } from 'mongoose';
import { CategoryPost } from 'types';
import { Videos } from 'src/videos/videos.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>,@InjectModel(Videos.name) private videosModel: Model<Videos>){}

    async newCategory(newCat: CategoryPost): Promise<Category> { 
        const category = await new this.categoryModel({
            name: newCat.name,
            idCategory: newCat.idCategory,
            img: newCat.img
        })

        return category.save()
    }

    async findAll(){
        let allCategory: any = await this.categoryModel.find()
        // for(let i=0; i < allCategory.length; i++){
        //     const videos = await this.videosModel.find({category: {$eq : allCategory[i].idCategory}})
        //     allCategory[i].videos = videos.length
        //     allCategory[i].save()
        // }
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

    async videoCategory(id: number){
        const videos = await this.videosModel.find({category: {$eq : id}})
        return videos
    }
}
