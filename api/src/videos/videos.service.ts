import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Videos } from './videos.schema';
import { Model } from 'mongoose';
import { VideosSchema } from 'types';
// import { categoryName } from './helper/videos.helper';

@Injectable()
export class VideosService {
  constructor(@InjectModel(Videos.name) private videosModel: Model<Videos>) {}

  async newVideo(createOne: VideosSchema): Promise<Videos> {
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
      fecha: createOne.fecha,
      fuente: createOne.fuente,
    });

    return video.save();
  }

  async findAll(page: string) {
    const limit = 32;
    const skip = (parseInt(page) - 1) * limit;
    let allVideos = await this.videosModel.find().exec();
    // let allVideos = await this.videosModel.find().skip(skip).limit(limit).exec();
    allVideos = allVideos.sort((a, b) => {
      if (a.views.includes('M') > b.views.includes('M')) return -1;
      if (a.views.includes('M') < b.views.includes('M')) return 1;
      return 0;
    });
    const slicedVideos = allVideos.slice(skip, skip + limit);
    return slicedVideos;
  }

  async findById(id: string) {
    console.log('Esta haciendo peticion cuando no tiene que hacer')
    try {
        const findVideo = await this.videosModel.findOne({
          _id: id,
        });
        if(findVideo.counter) {
          findVideo.counter = findVideo.counter + 1
          return findVideo.save()

        }
        else {
          findVideo.counter = 1
          return findVideo.save()
        }
    } catch (error) {
      console.log(error);
    }
  }

  async findByTitle(title: string) {
    try {
      if (typeof title !== 'undefined') {
        const titleUpper = title?.toLowerCase();
        if (
          titleUpper.includes('menor') ||
          titleUpper.includes('infantil') ||
          titleUpper.includes('menores') ||
          titleUpper.includes('niño') ||
          titleUpper.includes('niña') ||
          titleUpper.includes('niñas') ||
          titleUpper.includes('niños')
        ) {
          return [
            {
              title:
                'Esta prohibido la busqueda y difunsion de videos relacionados a menores de edad. Porfavor no vuelvas a introduccir algo relacionado.',
            },
          ];
        } else {
          title = title.toLowerCase();
          let findVideo: VideosSchema[] = await this.videosModel.find();
          // const asd = findVideo.map(e => categoryName(e.category))
          // for(let i =0; i < findVideo.length; i++){
          //   findVideo[i].category = asd[i]
          // }e.title.toLowerCase().includes(title) ||
          findVideo = findVideo.filter((e) => e.title.toLowerCase().includes(title));
          findVideo = findVideo.sort((a, b) => {
            if (a.views.includes('M') > b.views.includes('M')) return -1;
            if (a.views.includes('M') < b.views.includes('M')) return 1;
            return 0;
          });
          return findVideo;
        }
      } else {
        let allVideos = await this.videosModel.find();
        allVideos = allVideos.sort((a, b) => {
          if (a.views.includes('M') > b.views.includes('M')) return -1;
          if (a.views.includes('M') < b.views.includes('M')) return 1;
          return 0;
        });
        return allVideos;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findByCategory(id: number) {
    try {
      let findVideos: VideosSchema[] = await this.videosModel.find();
      findVideos = findVideos.filter((e) => e.category.includes(id));
      return findVideos;
    } catch (error) {
      console.log(error);
    }
  }
}
