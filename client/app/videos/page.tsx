import Navbar from "@/components/Navbar/Navbar";
import { VideoFormat } from "@/types";
import { getData } from "./service/videos.service";
import VideoRenderDos from "@/components/RenderVideos/VideosRenderDos";
import Footer from "@/components/Footer/Footer";

export default async function SearchVideos({ searchParams }: any) {
  const data: VideoFormat[] = await getData(searchParams.title)

  if(data[0]?.title?.includes('Esta prohibido la busqueda y difunsion de videos relacionados a menores de edad. Porfavor no vuelvas a introduccir algo relacionado.')){
    return(
      <main>
      <Navbar/>
      <div className="flex justify-center text-center items-center p-20 font-bold text-[#D63423]">
          {
            data[0]?.title
          }
        </div>
    </main>
    )
  }

  return (
    <main>
      <Navbar />
      {data?.length !== 0 ? (
        <>
          <VideoRenderDos data={data} />
        </>
      ) : (
        <div className="flex justify-center items-center p-20 font-bold text-[#D63423]">
          No pudimos encontrar ningun video, prueba buscando otro titulo...
        </div>
      )}
      <Footer/>
    </main>
  );
}
