import Navbar from "@/components/Navbar/Navbar";
import VideoRender from "@/components/RenderVideos/VideosRender";
import { VideoFormat } from "@/types";
import { getVideos, getVideosPage } from "./services/home.service";
import { randomSort } from "../videos/[id]/utils/videos.helper";


export default async function Home() {
  let data: VideoFormat[] = await getVideosPage('1');
  // data = data?.sort(randomSort)

  return (
    <main>
      <Navbar />
      <h4 className="font-bold py-2">Inicio {'>'}</h4>
      <>
        <VideoRender data={data} params={'1'}/>
      </>
    </main>
  );
}
