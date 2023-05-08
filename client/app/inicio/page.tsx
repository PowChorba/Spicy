import Navbar from "@/components/Navbar/Navbar";
import Pagination from "@/components/Paginator/Pagination";
import VideoRender from "@/components/RenderVideos/VideosRender";
import Videos from "@/components/Videos/Videos";
import { VideoFormat } from "@/types";
import axios from "axios";
import { getVideos } from "./services/home.service";
import { randomSort } from "../videos/[id]/utils/videos.helper";


export default async function Home() {
  let data: VideoFormat[] = await getVideos();
  data = data.sort(randomSort)

  return (
    <main>
      <Navbar />
      {/* <iframe src="https://www.pornhub.com/embed/ph609579b7baf55?autoplay=1" scrolling="no" allowFullScreen></iframe> */}
      <h4 className="font-bold py-2">Inicio {'>'}</h4>
      <>
        <VideoRender data={data}/>
      </>
    </main>
  );
}
