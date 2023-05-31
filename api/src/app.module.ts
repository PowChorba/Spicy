import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './videos/videos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { SearchModule } from './search/search.module';
import { PornstarModule } from './pornstar/pornstar.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://doadmin:8S7L9TBe6Y2q03j1@db-mongodb-nyc1-03433-78d856ee.mongo.ondigitalocean.com/',
        // uri: 'mongodb+srv://powChorba:monofeo123@spicy.yj3cgur.mongodb.net/test'
      }),
    }),
    VideosModule,
    CategoryModule,
    SearchModule,
    PornstarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
