import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pornstar } from './pornstar.schema';
import { Model } from 'mongoose';
import { PornstarPost } from 'types';
import { Videos } from 'src/videos/videos.schema';

@Injectable()
export class PornstarService {
    constructor(@InjectModel(Pornstar.name) private pornstarModel: Model<Pornstar>, 
    @InjectModel(Videos.name) private videosModel: Model<Videos>){}

    async createPornstar(data: PornstarPost){
        const pornstar = new this.pornstarModel({
            name: data.name,
            img: data.img,
            relation: data.relation,
            city: data.city,
            carrer: data.carrer,
            sex: data.sex,
            horoscope: data.horoscope,
            etnia: data.etnia
        });
        return pornstar.save()
    }

    async findAll(page: string){
        const limit = 48;
        const skip = (parseInt(page) - 1) * limit;
        // const allVideos = await this.videosModel.find()
        const modelos: PornstarPost[] = (await this.pornstarModel.find().sort({videos: -1}).skip(skip).limit(limit).exec())
        // let modelos = await this.pornstarModel.find()
        // for(let i=0; i < modelos.length; i++){
        //     const videos = allVideos.filter(video => video.actor.includes(modelos[i].name))
        //     modelos[i].videos = videos.length
        //     modelos[i].save()
        // }
        // modelos = modelos.sort((a,b) => {
        //     if(a.videos > b.videos) return -1
        //     if(a.videos < b.videos) return 1
        //     return 0
        // })
        // for(let i=0; i < modelos.length; i++){
        //     modelos[i].ranking = i + 1
        //     modelos[i].save()
        // }
        
        // const slicedModelos = modelos.slice(skip, skip + limit);
        return modelos
    }

    async findByName(name: string){
        console.log('asdasdsadsadsadasdas')
        let findAllVideos = (await this.videosModel.find({"actor" : {$regex : name}}))
        findAllVideos = findAllVideos.filter(e => e.actor.includes(name))
        const pornstar = await this.pornstarModel.find({
            name: name
        })
        return [pornstar, findAllVideos]
    }
}
