import Navbar from "@/components/Navbar/Navbar";
import { CategoryFormat, VideoFormat } from "@/types";
import { getCategory, getVideos } from "./service/category.service";
import CategoryCard from "@/components/Category/Category";


export default async function Category({params}: any){
    const categorys:CategoryFormat[] = await getCategory()
    const videos: VideoFormat[] = await getVideos()
    
    return(
    <main>
      <Navbar />
      {/* <iframe src="https://www.pornhub.com/embed/ph609579b7baf55?autoplay=1" scrolling="no" allowFullScreen></iframe> */}
      <div className="grid grid-cols-6 gap-2 max-xl:grid-cols-3 max-sm:grid-cols-2">
        {
            categorys?.map(e => {
                return (<CategoryCard key={e._id} name={e.name} idCategory={e.idCategory} img={e.img} videos={videos}/>)
            })
        }
      </div>
    </main>)
}