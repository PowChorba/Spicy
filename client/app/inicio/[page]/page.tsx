import { randomSort } from "@/app/videos/[id]/utils/videos.helper";
import Navbar from "@/components/Navbar/Navbar";
import VideoRender from "@/components/RenderVideos/VideosRender";
import { SearchFormat, VideoFormat } from "@/types";
import { getSearch, getVideos, getVideosPage } from "../services/home.service";
import Trending from "@/components/Relacionados/Trending";
import Footer from "@/components/Footer/Footer";


export default async function HomeDos({params}: any) {
  let data: VideoFormat[] = await getVideosPage(params.page);
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
      </div>
      <>
        <VideoRender data={data} params={params.page}/>
      </>
      <Footer/>
    </main>
  );
}
