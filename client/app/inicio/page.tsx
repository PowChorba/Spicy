import Navbar from "@/components/Navbar/Navbar";
import Pagination from "@/components/Paginator/Pagination";
import VideoRender from "@/components/RenderVideos/VideosRender";
import Videos from "@/components/Videos/Videos";
import { VideoFormat } from "@/types";
import axios from "axios";

async function getVideos() {
  try {
    const apiData = await axios.get("http://localhost:3001/videos");
    return apiData.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const data: VideoFormat[] = await getVideos();
  
  return (
    <main>
      <Navbar />
      {/* <iframe src="https://www.pornhub.com/embed/ph609579b7baf55?autoplay=1" scrolling="no" allowFullScreen></iframe> */}
      <>
        <VideoRender data={data}/>
      </>
    </main>
  );
}