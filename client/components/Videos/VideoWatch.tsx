'use client'
import { getCategoryVideos } from "@/app/categorias/service/category.service";
import { categoryName, getRandomNumber, randomCategory, randomSort, titleAcentos } from "@/app/videos/[id]/utils/videos.helper";
import { getAllVideos } from "@/app/videos/service/videos.service";
import { CategoryReduce, VideoFormat, VideoFormatComplete } from "@/types";
import Navbar from "../Navbar/Navbar";
import { AiFillLike } from "react-icons/ai";
import Link from "next/link";
import MediumVideos from "./MediumVideos";
import SmallVideos from "./SmallVideos";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { RaceBy } from '@uiball/loaders'


interface Props{
    renderVideo: VideoFormatComplete
}

export default function VideoWatch({ renderVideo }: Props) {
  const randomNumber = getRandomNumber(1, 49);
  const [allVideos, setAllVideos] = useState<VideoFormat[]>([])
  const [relatedVideo, setRelatedVideos] = useState<VideoFormat[]>([])
  // Para agarrar un categoria random, entre todas las del video.
  const categoryFilter: CategoryReduce[] = categoryName(renderVideo?.data?.category)
  const category = randomCategory(renderVideo?.data?.category)

  // Para mostrar los videos del aside
  const videosFilter = allVideos.slice(randomNumber, randomNumber + 5);
  // Para mostrar los videos abajo de los datos

  let relatedVideos = relatedVideo?.filter((e) => e.title !== renderVideo?.data?.title);
  relatedVideos = relatedVideos?.sort(randomSort);
  relatedVideos = relatedVideos?.slice(0, 20);

  useEffect(() => {
    const videos = async () => {
        const data = await getAllVideos(randomNumber)
        setAllVideos(data)
    }
    const videosRelated = async () => {
        const data = await getCategoryVideos(category)
        setRelatedVideos(data)
    }
    videos()
    videosRelated()
  }, [])

  renderVideo.data.fecha = renderVideo?.data?.fecha?.replace("%a%", "á");
  renderVideo.data.fecha = renderVideo?.data?.fecha?.replace("%n%", "ñ");


  const fuenteVideo = (fuente:string) =>{
    if (fuente === "PornHub") {
      return <>
        <span className="font-bold">Porn</span>
        <span className="text-[#ff9000] font-bold">Hub</span>
      </>
    }
    else if(fuente=== 'YouPorn'){
      return <>
      <span className="font-bold">You</span>
        <span className="text-[#ec567c] font-bold">Porn</span></>
    }
    else {
      return <>
      <span className="font-bold text-[#de2600]">X</span>
        <span className="font-bold">Videos</span></>
    }
  }

  if(relatedVideo.length < 1){
    return (<>
        <Navbar/>
        <div className="flex justify-center items-center h-[50vh]">
            <RaceBy 
                size={150}
                lineWeight={10}
                speed={1.4} 
                color="red" 
            />
        </div>
    </>)
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        <article className="w-5/6 py-2 max-xl:w-full max-sm:px-1">
          <iframe 
            src={renderVideo?.data?.url}
            allowFullScreen
            className="w-full h-[600px] border-black border-2 rounded-lg max-xl:h-[350px] max-sm:h-[350px]  overflow-hidden"
          ></iframe>
          <div className="py-2">
            <h3 className="font-semibold text-2xl max-xl:text-lg">
              {
                titleAcentos(renderVideo?.data?.title)
              }
            </h3>
            <span className="flex gap-1 items-center">
              <AiFillLike />
              {renderVideo?.data?.rating}%
            </span>
            <span>{renderVideo?.data?.views}{' '}<br/></span>
            <span>Fuente del video: </span>
            {
              fuenteVideo(renderVideo?.data?.fuente)
            }
            <span><br/>Publicado hace: {renderVideo?.data?.fecha}</span>
          </div>
          <div className="border-t-2 border-black py-2 items-center">
            <h4>Estrellas:</h4>
            {renderVideo?.data?.actor.length < 1 ? (
              <span className="text-[#D63423] font-bold">Unknown</span>
            ) : (
              renderVideo?.data?.actor?.map((actor: string) => {
                return (
                  <Link
                    href={`/actores/name?name=${actor.replace(' ', '-')}`}
                    key={actor}
                    className="text-[#D63423] font-bold"
                  >
                    {actor}-{" "}
                  </Link>
                );
              })
            )}
          </div>
          <div className="py-2 border-t-2 border-black flex gap-2 max-sm:gap-1 items-center">
            <h5>Categorias:</h5>
            {categoryFilter.map((category: CategoryReduce) => {
              return (
                <Link
                  href={`/categorias/${category.idCategory}`}
                  key={category.name}
                  className="border-2 border-[#D63423] bg-[#D63423] text-white px-2 rounded-lg max-sm:px-0 max-sm:text-xs"
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
          <div className="grid grid-cols-5 gap-2 max-xl:grid-cols-3 max-sm:grid-cols-2">
            {relatedVideos.map((e) => {
              return (
                <MediumVideos
                  key={e._id}
                  imgPreview={e.imgPreview}
                  title={e.title}
                  duration={e.duration}
                  url={e.url}
                  rating={e.rating}
                  _id={e._id}
                  vidPreview={e.vidPreview}
                />
              );
            })}
          </div>
          {/* <p className="w-full text-center my-2 py-2 bg-[#D63423] rounded-lg text-white">
            Ver mas
          </p> */}
        </article>
        <aside className="w-1/6 text-center p-2 max-xl:hidden flex-col justify-center">
          <h5 className="font-bold border-b-2 border-black">
            Videos recomendados
          </h5>
          <div className="flex flex-col gap-2">
          {videosFilter.map((video: VideoFormat) => {
            return (
              <SmallVideos
                key={video._id}
                imgPreview={video.imgPreview}
                title={video.title}
                duration={video.duration}
                _id={video._id}
              />
            );
          })}
          {/* <a href="https://www.exoclick.com/signup/?login=iuGhen"><img src="https://www.exoclick.com/banners/120x150.gif" /></a> */}
          <ins className="adsbyexoclick" data-zoneid="4999360"></ins> 
          </div>
        </aside>
      </div>
      <Footer/>
    </>
  );
}
