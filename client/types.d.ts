export type VideoFormat = {
  _id: string;
  title: string;
  url: string;
  duration: string;
  rating: number;
  category: number[];
  imgPreview: string;
  vidPreview: string;
  actor: string[];
  views: string;
  fecha: string;
  fuente: string;
};

export interface CategoryFormat {
  _id: string;
  name: string;
  idCategory: number;
  img: string;
  counter: number
}

export interface CategoryCounter { 
  id: string
  counter: number
}

export interface SearchFormat {
  _id: string;
  word: string;
  counter: number;
}

export interface PornstarFormat {
  _id: string;
  name: string;
  img: string;
  relation: string;
  city: string;
  carrer: string;
  sex: string;
  horoscope: string;
  etnia: string;
  videos: number
}
