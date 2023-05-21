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
            img: data.img
        });
        return pornstar.save()
    }

    async findAll(){
        const allVideos = await this.videosModel.find()
        let modelos = await this.pornstarModel.find()
        for(let i=0; i < modelos.length; i++){
            const videos = allVideos.filter(video => video.actor.includes(modelos[i].name))
            modelos[i].videos = videos.length
        }
        modelos = modelos.sort((a,b) => {
            if(a.videos > b.videos) 1
            if(a.videos < b.videos) -1
            return 0
        })
        return modelos
    }

    async findByName(name: string){
        let findAllVideos = await this.videosModel.find()
        findAllVideos = findAllVideos.filter(e => e.actor.includes(name))
        const pornstar = await this.pornstarModel.find({
            name: name
        })
        return [pornstar, findAllVideos]
    }
}
