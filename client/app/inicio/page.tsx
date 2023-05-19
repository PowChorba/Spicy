import Navbar from "@/components/Navbar/Navbar";
import VideoRender from "@/components/RenderVideos/VideosRender";
import { SearchFormat, VideoFormat } from "@/types";
import { getSearch, getVideosPage } from "./services/home.service";
import Link from "next/link";
import Trending from "@/components/Relacionados/Trending";


export default async function Home() {
  let data: VideoFormat[] = await getVideosPage('1');
  const search: SearchFormat[] = await getSearch()
  

  return (
    <main>
      <Navbar />
      <div className="w-full relative items-center">
      <h4 className="font-bold py-2">Busquedas mas activas</h4>
      <div className="flex items-center gap-2 w-full overflow-hidden">
        {
          search?.map(e => {
            return <Trending key={e._id} word={e.word}/>
          })
        }
      </div>
      {/* <select className="absolute right-0 bg-[#252525] text-white">
        <option value="Recomendados">Recomendados</option>
        <option value="Ultimos">Ultimos Agregados</option>
        <option value="Mas vistos">Mas Vistos</option>
      </select> */}
      </div>
        <VideoRender data={data} params={'1'}/>
    </main>
  );
}
