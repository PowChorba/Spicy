import Navbar from "@/components/Navbar/Navbar";
import VideoRender from "@/components/RenderVideos/VideosRender";
import { SearchFormat, VideoFormat } from "@/types";
import { getSearch, getVideosPage } from "./services/home.service";
import Link from "next/link";
import Trending from "@/components/Relacionados/Trending";
import Footer from "@/components/Footer/Footer";


export default async function Home() {
  let data: VideoFormat[] = await getVideosPage('1');
  const search: SearchFormat[] = await getSearch()
  

  return (
    <main>
      <Navbar />
      <div className="w-full relative items-center">
      <h4 className="font-bold py-2">Busquedas mas activas</h4>
      <ul className="flex items-center gap-2 w-full overflow-hidden">
        {
          search?.map(e => {
            return <Trending key={e._id} word={e.word}/>
          })
        }
      </ul>
      </div>
        <VideoRender data={data} params={'1'}/>
        <Footer/>
    </main>
  );
}
