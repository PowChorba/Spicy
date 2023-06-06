import Navbar from "@/components/Navbar/Navbar";
import { PornstarFormat, VideoFormat } from "@/types";
import { getData, getDataPornstar, getDataVideos } from "./service/videos.service";
import VideoRenderDos from "@/components/RenderVideos/VideosRenderDos";
import Footer from "@/components/Footer/Footer";
import PornstarCard from "@/components/Pornstars/PornstarCard";

export default async function SearchVideos({ searchParams }: any) {
  const data: VideoFormat[] = await getDataVideos(searchParams.title)
  let dataPornstar: PornstarFormat[] = await getDataPornstar(searchParams.title)
  dataPornstar = dataPornstar.splice(0,5)

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
      <h4 className={dataPornstar.length < 1 ? 'hidden' : 'font-bold'}>Actores encontrados:</h4>
      <ul className={dataPornstar.length < 1 ? 'hidden' : "grid grid-cols-5 mt-2 gap-2 max-xl:grid-cols-3 max-sm:grid-cols-2"}>
      {
        dataPornstar?.map((e,index) => {
          return <PornstarCard key={e._id}  name={e.name} img={e.img} _id={e._id} index={index} videos={e.videos}/>
        })
      }
      </ul>
      <h4 className={data?.length < 1 ? 'hidden' : 'font-bold'}>Videos encontrados:</h4>
      {data?.length !== 0 ? (
        <>
          <VideoRenderDos data={data} />
        </>
      ) : (
        <div className={dataPornstar.length < 1 ? "flex justify-center items-center p-20 font-bold text-[#D63423] h-[65vh]" : "flex justify-center items-center p-20 font-bold text-[#D63423]"}>
          No pudimos encontrar ningun video, prueba buscando otro titulo...
        </div>
      )}
      <Footer/>
    </main>
  );
}
