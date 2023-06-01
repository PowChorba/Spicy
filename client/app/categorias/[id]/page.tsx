import Navbar from "@/components/Navbar/Navbar";
import { CategoryFormat, VideoFormat } from "@/types";
import { getCategory, getCategoryId, getCategoryVideos } from "../service/category.service";
import CategoryRender from "@/components/Category/CategoryRender";

export default async function CategoryId({ params }: any) {
  const categories: CategoryFormat[] = await getCategoryId(params.id) 
  const categoryVideo: VideoFormat[] = await getCategoryVideos(params.id)

  return (
    <>
      <Navbar />
      <CategoryRender data={categories} videos={categoryVideo} id={params.id}/>
    </>
  );
}
