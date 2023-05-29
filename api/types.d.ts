export type VideosType = {
  title: string;
  url: string;
  duration: string;
  category: number[]
  rating: string;
  imgPreview: string;
  vidPreview: string;
  actor: string[];
  views: string
  fecha: string
  fuente: string
  counter: number
};

export type CategoryPost = {
  name: string;
  idCategory: number;
  img: string;
  counter?: number
};

export type CounterCategory = {
  id: number
  counter: number
}

export type SearchModel = {
  word: string
  counter?: number
}

export type PornstarPost = {
  name: string
  img : string 
  videos: number
  relation: string
  city: string
  carrer: string
  sex: string
  horoscope: string
  etnia: string
}
