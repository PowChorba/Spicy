import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.schema';
import { Videos, VideosSchema } from 'src/videos/videos.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}, {name: Videos.name, schema: VideosSchema}])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
