import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pornstar } from 'src/pornstar/pornstar.schema';
import { Videos } from 'src/videos/videos.schema';
import { VideosType } from 'types';

@Injectable()
export class NavbarService {
    constructor(
        @InjectModel(Pornstar.name) private pornstarModel: Model<Pornstar>,
        @InjectModel(Videos.name) private videosModel: Model<Videos>,
      ) {}

      async findVideos(title: string){
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
          let findVideo: VideosType[] = await this.videosModel.find({"title" : {$regex : title, $options: 'i'}});
        //   findVideo = findVideo.filter((e) => e.title.toLowerCase().includes(title));
        // if (findVideo.length === 0) {
        //   let findVideo: VideosType[] = await this.videosModel.find({"title" : {$regex : title, $options: 'i'}});
        //   findVideo = findVideo.sort((a, b) => {
        //     if (a.views.includes('M') > b.views.includes('M')) return -1;
        //     if (a.views.includes('M') < b.views.includes('M')) return 1;
        //     return 0;
        //   });
        // }
          findVideo = findVideo.sort((a, b) => {
            if (a.views.includes('M') > b.views.includes('M')) return -1;
            if (a.views.includes('M') < b.views.includes('M')) return 1;
            return 0;
          });
          console.log(findVideo)
          return findVideo;
        }
      }

      async findActores(title: string){
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
        //   let findVideo = await this.pornstarModel.find();
          let findVideo = await this.pornstarModel.find({"name" : {$regex : title, $options: 'i'}});
          findVideo = findVideo.splice(0,4)
        // findVideo = findVideo.filter(e => e.name.toLowerCase().includes(title))
        //   findVideo = findVideo.sort((a, b) => {
        //     if (a.views.includes('M') > b.views.includes('M')) return -1;
        //     if (a.views.includes('M') < b.views.includes('M')) return 1;
        //     return 0;
        //   });
          return findVideo;
        }
      }
    }
