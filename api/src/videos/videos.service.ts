import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Videos } from './videos.schema';
import { Model } from 'mongoose';
import { VideosSchema } from 'types';
// import { encrypt } from './videos.helper';

@Injectable()
export class VideosService {
    constructor(@InjectModel(Videos.name) private videosModel: Model<Videos>){}

    async newVideo(createOne: VideosSchema): Promise<Videos>{
        // const urlEncrypted = await encrypt(createOne.url)
        // const imgPreviewEncrypted = await encrypt(createOne.imgPreview)
        // const vidPreviewEncrypted = await encrypt(createOne.vidPreview)
        const video = await new this.videosModel({
            title: createOne.title,
            url: createOne.url,
            rating: createOne.rating,
            duration: createOne.duration,
            category: createOne.category,
            imgPreview: createOne.imgPreview,
            vidPreview: createOne.vidPreview
        })

        return video.save()
    }

    async findAll(){
        return this.videosModel.find()
    }
}
