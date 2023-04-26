import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Videos, VideosSchema } from './videos.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Videos.name, schema: VideosSchema}])],
  providers: [VideosService],
  controllers: [VideosController]
})
export class VideosModule {}
