import Navbar from "@/components/Navbar/Navbar";
import { VideoFormat } from "@/types";
import axios from "axios";
import { usePathname } from "next/navigation";

async function getVideo(id: string) {
  try {
    const apiData = await axios.get(`http://localhost:3001/videos/${id}`);
    return apiData.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function VideoWatch({ params }: any) {
  const renderVideo: VideoFormat[] = await getVideo(params.id);

  return (
    <div>
      <Navbar />
      <iframe
        src={renderVideo[0].url}
        scrolling="no"
        allowFullScreen
        className="py-2 w-full h-[600px]"
      ></iframe>
      {/* <div> */}
        <h3 className="font-semibold text-2xl">{renderVideo[0].title}</h3>
        <p>{renderVideo[0].rating}%</p>
        <div>
            <h4>Actores:</h4>
            
        </div>
      {/* </div> */}
    </div>
  );
}
