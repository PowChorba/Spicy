export type VideosSchema = {
  title: string;
  url: string;
  duration: string;
  category: number[];
  rating: string;
  imgPreview: string;
  vidPreview: string;
  actor: string[];
};

export type CategoryPost = {
  name: string;
  idCategory: number;
  img: string;
};
