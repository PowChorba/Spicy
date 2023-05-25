import Navbar from "@/components/Navbar/Navbar";
import { CategoryFormat, VideoFormat } from "@/types";
import { getCategory, getCategoryId, getVideos } from "../service/category.service";
import CategoryRender from "@/components/Category/CategoryRender";

export default async function CategoryId({ params }: any) {
  const categories: CategoryFormat[] = await getCategoryId(params.id) 
  const videos: VideoFormat[] = await getVideos()

  return (
    <>
      <Navbar />
      <CategoryRender data={categories} videos={videos} id={params.id}/>
    </>
  );
}
