import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from 'src/category/category.schema';
import { Pornstar, PornstarSchema } from 'src/pornstar/pornstar.schema';
import { Videos, VideosSchema } from 'src/videos/videos.schema';
import { InicioController } from './inicio.controller';
import { InicioService } from './inicio.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Videos.name, schema: VideosSchema },
      { name: Pornstar.name, schema: PornstarSchema },
    ]),
  ],
  controllers: [InicioController],
  providers: [InicioService],
})
export class InicioModule {}
