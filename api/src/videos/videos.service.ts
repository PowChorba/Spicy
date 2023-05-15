import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Videos } from './videos.schema';
import { Model } from 'mongoose';
import { VideosSchema } from 'types';

@Injectable()
export class VideosService {
    constructor(@InjectModel(Videos.name) private videosModel: Model<Videos>){}

    async newVideo(createOne: VideosSchema): Promise<Videos>{
        const video = await new this.videosModel({
            title: createOne.title,
            url: createOne.url,
            rating: createOne.rating,
            duration: createOne.duration,
            category: createOne.category,
            imgPreview: createOne.imgPreview,
            vidPreview: createOne.vidPreview,
            actor: createOne.actor,
            views: createOne.views,
            fecha: createOne.fecha
        })

        return video.save()
    }

    async findAll(page: string){
        const limit = 32
        const skip = (parseInt(page) - 1) * limit
        const allVideos = await this.videosModel.find().skip(skip).limit(limit).exec();
        return allVideos
    }

    async findById(id: string){
        try {
            if(id.toString().length > 3){
                const findVideo: VideosSchema[] = await this.videosModel.find({
                    _id : id
                }) 
                return findVideo
            }
        } catch (error) {
            console.log(error)
        }
    }

    async findByTitle(title: string){
        try {
            if(title){
                title = title.toLowerCase()
                let findVideo: VideosSchema[] = await this.videosModel.find()
                findVideo = findVideo.filter(e => e.title.toLowerCase().includes(title))
                return findVideo
            }else{
                const allVideos = await this.videosModel.find()
                return allVideos
            }
        } catch (error) {
            console.log(error)
        }
    }

    async findByCategory(id: number) {
        try {
            let findVideos: VideosSchema[] = await this.videosModel.find()
            findVideos = findVideos.filter(e => e.category.includes(id))
            return findVideos
        } catch (error) {
            console.log(error)
        }
    }
}
