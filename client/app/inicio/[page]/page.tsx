import { randomSort } from "@/app/videos/[id]/utils/videos.helper";
import Navbar from "@/components/Navbar/Navbar";
import VideoRender from "@/components/RenderVideos/VideosRender";
import { VideoFormat } from "@/types";
import { getVideos, getVideosPage } from "../services/home.service";


export default async function HomeDos({params}: any) {
  let data: VideoFormat[] = await getVideosPage(params.page);
  // data = data?.sort(randomSort)

  return (
    <main>
      <Navbar />
      <h4 className="font-bold py-2">Inicio {'>'}</h4>
      <>
        <VideoRender data={data} params={params.page}/>
      </>
    </main>
  );
}
