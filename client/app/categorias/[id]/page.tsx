import Navbar from "@/components/Navbar/Navbar";
import { CategoryFormat, VideoFormat } from "@/types";
import { getCategory, getVideos } from "../service/category.service";
import CategoryRender from "@/components/Category/CategoryRender";

export default async function CategoryId() {
  const categories: CategoryFormat[] = await getCategory() 
  const videos: VideoFormat[] = await getVideos()
  return (
    <>
      <Navbar />
      <CategoryRender data={categories} videos={videos}/>
    </>
  );
}
