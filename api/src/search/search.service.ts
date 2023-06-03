import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Search } from './search.schema';
import { SearchModel } from 'types';

@Injectable()
export class SearchService {
  constructor(@InjectModel(Search.name) private searchModel: Model<Search>) {}

  async refreshWord(search: SearchModel) {
    const titleUpper = search.word.toLowerCase();
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
      return 'Esta prohibido';
    } else {
      const findword = await this.searchModel.findOne({
        word: search.word,
      });
      if (findword) {
        findword.counter += 1;
        return findword.save();
      } else {
        const newSearch = await new this.searchModel({
          word: search.word,
          counter: 1,
        });
        return newSearch.save();
      }
    }
  }

  async findAll() {
    let findAll = await this.searchModel.find();
    findAll = findAll.sort((a, b) => {
      if (a.counter > b.counter) return -1;
      if (a.counter < b.counter) return 1;
      return 0;
    });
    findAll = findAll.splice(0, 5);
    return findAll;
  }
}
