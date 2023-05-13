import Navbar from "@/components/Navbar/Navbar";
import { CategoryFormat, VideoFormat } from "@/types";
import Link from "next/link";
import { getAllVideos, getVideo } from "../service/videos.service";
import {getRandomNumber, randomSort} from "./utils/videos.helper";
import SmallVideos from "@/components/Videos/SmallVideos";
import { getCategory } from "@/app/categorias/service/category.service";
import { AiFillLike } from 'react-icons/ai'
import MediumVideos from "@/components/Videos/MediumVideos";

export default async function VideoWatch({ params }: any) {
  const renderVideo: VideoFormat[] = await getVideo(params.id);
  const allVideos: VideoFormat[] = await getAllVideos()
  const category: CategoryFormat[] = await getCategory()
  // Para mostrar los videos del aside
  const randomNumber = getRandomNumber(1,1600)
  const videosFilter = allVideos.slice(randomNumber, randomNumber + 5)
  // Para mostrar las categorias y poder ir hacia cada una de ellas
  const categoryFilter = category.filter(e => renderVideo[0].category.includes(e.idCategory))
  // Para mostrar los videos abajo de los datos
  let relatedVideos = allVideos.filter(e => e.category.includes(renderVideo[0].category[1] || renderVideo[0].category[0]))
  relatedVideos = relatedVideos.filter(e => e.title !== renderVideo[0].title)
  relatedVideos = relatedVideos.sort(randomSort)
  relatedVideos = relatedVideos.slice(0,20)


  return (
    <>
      <Navbar />
      <div className="flex">
      <article className="w-5/6 py-2 max-xl:w-full max-sm:px-1">
      <iframe
        src={renderVideo[0].url}
        allowFullScreen
        className="w-full h-[600px] border-black border-2 rounded-lg max-xl:h-[350px] max-sm:h-[350px]  overflow-hidden"
      ></iframe>
      <div className="py-2">
        <h3 className="font-semibold text-2xl max-xl:text-lg">{renderVideo[0].title}</h3>
        <span className="flex gap-1 items-center"><AiFillLike/>{renderVideo[0].rating}%</span>
            <span>Fuente del video: {' '}</span>
            <span className="font-bold">Porn</span>
            <span className="text-[#ff9000] font-bold">Hub</span>
      </div>
        <div className="border-t-2 border-black py-2 items-center">
            <h4>Estrellas:</h4>
            {
              renderVideo[0].actor.length < 1
              ? <span className="text-[#D63423] font-bold">Unknown</span>
              : renderVideo[0].actor?.map((actor: string) => {
                  return <Link href={`/actores/actor`} key={actor} className="text-[#D63423] font-bold">{actor}{' '} - </Link>
                })
              
            }
        </div>
        <div className="py-2 border-t-2 border-black flex gap-2 max-sm:gap-1 items-center">
            <h5>Categorias:</h5>
            {
              categoryFilter.map((category: CategoryFormat) => {
                return <Link href={`/categorias/${category.idCategory}`} key={category._id} className="border-2 border-[#D63423] bg-[#D63423] text-white px-2 rounded-lg max-sm:px-0 max-sm:text-xs">{category.name}</Link>
            })}
        </div>
        <div className="grid grid-cols-5 gap-2 max-xl:grid-cols-3 max-sm:grid-cols-2">
          {
            relatedVideos.map(e => {
              return <MediumVideos key={e._id} imgPreview={e.imgPreview} title={e.title} duration={e.duration} url={e.url} rating={e.rating} _id={e._id} vidPreview={e.vidPreview}/>
            })
          }
        </div>
        <p className="w-full text-center my-2 py-2 bg-[#D63423] rounded-lg text-white">Ver mas</p>
      </article>
      <aside className="w-1/6 text-center p-2 max-xl:hidden">
        <h5 className="font-bold border-b-2 border-black">Videos recomendados</h5>
        {
          videosFilter.map((video: VideoFormat) => {
            return <SmallVideos key={video._id} imgPreview={video.imgPreview} title={video.title} duration={video.duration} _id={video._id}/>
        })
        }
      </aside>
      </div>
    </>
  );
}
