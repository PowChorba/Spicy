export type VideosSchema = {
  title: string;
  url: string;
  duration: string;
  category: number[];
  rating: string;
  imgPreview: string;
  vidPreview: string;
  actor: string[];
  views: string
  fecha: string
};

export type CategoryPost = {
  name: string;
  idCategory: number;
  img: string;
};
