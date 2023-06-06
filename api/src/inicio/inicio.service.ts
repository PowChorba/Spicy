import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/category/category.schema';
import { Pornstar } from 'src/pornstar/pornstar.schema';
import { Videos } from 'src/videos/videos.schema';

@Injectable()
export class InicioService {
  constructor(
    @InjectModel(Pornstar.name) private pornstarModel: Model<Pornstar>,
    @InjectModel(Videos.name) private videosModel: Model<Videos>,
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async finVideos() {
    const count = await this.videosModel.countDocuments().exec();
    const randomSkip = Math.floor(Math.random() * count);
    const allVideos = await this.videosModel
      .aggregate([
        { $sample: { size: count } }, // Select random documents
        { $skip: randomSkip }, // Skip to the random starting document
        { $limit: 50 }, // Limit the number of documents to retrieve
      ])
      .exec();

    return allVideos;
  }

  async findPornstar() {
    const count = await this.pornstarModel.countDocuments().exec();
    const randomSkip = Math.floor(Math.random() * count);
    const allPornstar = await this.pornstarModel
      .aggregate([
        { $sample: { size: count } }, // Select random documents
        { $skip: randomSkip }, // Skip to the random starting document
        { $limit: 5 }, // Limit the number of documents to retrieve
      ])
      .exec();
      if(allPornstar.length < 5){
      const randomSkip = Math.floor(Math.random() * count);
      const allPornstar = await this.pornstarModel
        .aggregate([
          { $sample: { size: count } }, // Select random documents
          { $skip: randomSkip }, // Skip to the random starting document
          { $limit: 5 }, // Limit the number of documents to retrieve
        ])
        .exec();
        return allPornstar
      }

    return allPornstar;
  }

  async findCategory() {
    const count = await this.categoryModel.countDocuments().exec();
    const randomSkip = Math.floor(Math.random() * count);
    const allCategory = await this.categoryModel
      .aggregate([
        { $sample: { size: count } }, // Select random documents
        { $skip: randomSkip }, // Skip to the random starting document
        { $limit: 5 }, // Limit the number of documents to retrieve
      ])
      .exec();
      if(allCategory.length < 5){
        const randomSkip = Math.floor(Math.random() * count);
        const allCategory = await this.categoryModel
        .aggregate([
          { $sample: { size: count } }, // Select random documents
          { $skip: randomSkip }, // Skip to the random starting document
          { $limit: 5 }, // Limit the number of documents to retrieve
        ])
        return allCategory
      }
    return allCategory;
  }
}
