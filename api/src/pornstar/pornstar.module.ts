import { Module } from '@nestjs/common';
import { PornstarController } from './pornstar.controller';
import { PornstarService } from './pornstar.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pornstar, PornstarSchema } from './pornstar.schema';
import { Videos, VideosSchema } from 'src/videos/videos.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Pornstar.name, schema: PornstarSchema}, {name: Videos.name, schema: VideosSchema}])],
  controllers: [PornstarController],
  providers: [PornstarService]
})
export class PornstarModule {}
