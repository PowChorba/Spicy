import Navbar from "@/components/Navbar/Navbar";
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

  // Paginado para renderizar solo 50
  const paginas = Math.ceil(data.length / 50)
  const divideData = data.splice(0,52)
  
  return (
    <main>
      <Navbar />
      {/* <iframe src="https://www.pornhub.com/embed/ph609579b7baf55?autoplay=1" scrolling="no" allowFullScreen></iframe> */}
      <div className="grid grid-cols-4 mr-2">
        {divideData.map((e) => {
          return (
            <Videos
              key={e.id}
              title={e.title}
              url={e.url}
              imgPreview={e.imgPreview}
              vidPreview={e.vidPreview}
              duration={e.duration}
              rating={e.rating}
            />
          );
        })}
      </div>
    </main>
  );
}
