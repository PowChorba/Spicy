import Navbar from "@/components/Navbar/Navbar";
import VideoRender from "@/components/RenderVideos/VideosRender";
import { SearchFormat, VideoFormat } from "@/types";
import { getSearch, getVideosPage } from "./services/home.service";
import Link from "next/link";


export default async function Home() {
  let data: VideoFormat[] = await getVideosPage('1');
  const search: SearchFormat[] = await getSearch()
  

  return (
    <main>
      <Navbar />
      <div className="w-full relative items-center">
      <h4 className="font-bold py-2">Busquedas mas activas</h4>
      <div className="flex items-center gap-2 w-full">
        {
          search.map(e => {
            return <Link href={`/videos?title=${e.word}`} key={e._id} className="px-4 bg-[#D63423] text-white text-sm rounded-lg">{e.word}</Link>
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
