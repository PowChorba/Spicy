import { Module } from '@nestjs/common';
import { NavbarService } from './navbar.service';
import { NavbarController } from './navbar.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Videos, VideosSchema } from 'src/videos/videos.schema';
import { Pornstar, PornstarSchema } from 'src/pornstar/pornstar.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Videos.name, schema: VideosSchema },
      { name: Pornstar.name, schema: PornstarSchema },
    ]),
  ],
  providers: [NavbarService],
  controllers: [NavbarController]
})
export class NavbarModule {}
