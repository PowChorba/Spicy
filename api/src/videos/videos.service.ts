import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Videos, VideosSchema } from './videos.schema';
import { Model } from 'mongoose';
import { VideosType } from 'types';
// import { categoryName } from './helper/videos.helper';

@Injectable()
export class VideosService {
  constructor(@InjectModel(Videos.name) private videosModel: Model<Videos>) {}

  async newVideo(createOne: VideosType): Promise<Videos> {
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
    const limit = 48;
    const skip = (parseInt(page) - 1) * limit;

    // const count = await this.videosModel.countDocuments().exec();

    // const randomSkip = Math.floor(Math.random() * count);

    let allVideos = await this.videosModel.find().skip(skip).limit(limit).exec();

    // let allVideos = await this.videosModel.aggregate([
    //   { $sample: { size: count } }, // Select random documents
    //   { $skip: randomSkip }, // Skip to the random starting document
    //   { $limit: limit } // Limit the number of documents to retrieve
    // ]).exec();
    // let allVideos = await this.videosModel.find().exec();
    allVideos = allVideos.sort((a, b) => {
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;
      return 0;
    });

    allVideos = allVideos.sort((a, b) => {
      if (a.views.includes('M') > b.views.includes('M')) return -1;
      if (a.views.includes('M') < b.views.includes('M')) return 1;
      return 0;
    });
    // const slicedVideos = allVideos.slice(skip, skip + limit);
    return allVideos;
  }

  async findById(id: string) {
    try {
        const findVideo = await this.videosModel.findOne({
          _id: id,
        });
        if(findVideo.counter) {
          findVideo.counter = findVideo.counter + 1
          await findVideo.save()
          return {msg: true, data: findVideo}

        }
        else {
          findVideo.counter = 1
          await findVideo.save()
          return {msg: true, data: findVideo}
        }
    } catch (error) {
      return {msg: false}
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
        titleUpper.includes('niños') ||
        titleUpper.includes('child') ||
        titleUpper.includes('infantile') ||
        titleUpper.includes('under age') ||
        titleUpper.includes('children') 
        ) {
          return [
            {
              title:
                'Esta prohibido la busqueda y difunsion de videos relacionados a menores de edad. Porfavor no vuelvas a introduccir algo relacionado.',
            },
          ];
        } else {
          title = title.toLowerCase();
          let findVideo: VideosType[] = await this.videosModel.find({"title" : {$regex : title}});
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
      let findVideos: VideosType[] = await this.videosModel.find();
      findVideos = findVideos.filter((e) => e.category.includes(id));
      return findVideos;
    } catch (error) {
      console.log(error);
    }
  }
}
