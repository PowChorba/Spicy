import Navbar from "@/components/Navbar/Navbar";
import { CategoryFormat, CategoryReduce, VideoFormat } from "@/types";
import Link from "next/link";
import { getAllVideos, getCategoryVideos, getVideo } from "../service/videos.service";
import { categoryName, getRandomNumber, randomCategory, randomSort, titleAcentos } from "./utils/videos.helper";
import SmallVideos from "@/components/Videos/SmallVideos";
import { AiFillLike } from "react-icons/ai";
import MediumVideos from "@/components/Videos/MediumVideos";

export default async function VideoWatch({ params }: any) {
  const randomNumber = getRandomNumber(1, 49);
  const renderVideo: VideoFormat = await getVideo(params.id);
  // Para agarrar un categoria random, entre todas las del video.
  const categoryFilter: CategoryReduce[] = categoryName(renderVideo?.category)
  const category = randomCategory(renderVideo?.category)
  // Para agarrar 50 videos random de cualquier pagina
  const allVideos: VideoFormat[] = await getAllVideos(randomNumber);
  // Para mostrar los videos del aside
  const videosFilter = allVideos.slice(randomNumber, randomNumber + 5);
  // Para mostrar los videos abajo de los datos
  let relatedVideos: VideoFormat[] = await getCategoryVideos(category)
  relatedVideos = relatedVideos.filter((e) => e.title !== renderVideo?.title);
  relatedVideos = relatedVideos.sort(randomSort);
  relatedVideos = relatedVideos.slice(0, 20);

  renderVideo.fecha = renderVideo?.fecha?.replace("%a%", "á");
  renderVideo.fecha = renderVideo?.fecha?.replace("%n%", "ñ");


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

  
  return (
    <>
      <Navbar />
      <ins id="1023600" data-width="308" data-height="298" className="absolute top-[50%] left-0"></ins>
      <div className="flex">
        <article className="w-5/6 py-2 max-xl:w-full max-sm:px-1">
          <iframe
            src={renderVideo?.url}
            allowFullScreen
            // height="481" width="608" scrolling="no"
            className="w-full h-[600px] border-black border-2 rounded-lg max-xl:h-[350px] max-sm:h-[350px]  overflow-hidden"
          ></iframe>
          {/* <video src={renderVideo?.url}>
          <source type="mp4" />
          </video> */}
          <div className="py-2">
            <h3 className="font-semibold text-2xl max-xl:text-lg">
              {
                titleAcentos(renderVideo?.title)
              }
            </h3>
            <span className="flex gap-1 items-center">
              <AiFillLike />
              {renderVideo?.rating}%
            </span>
            <span>{renderVideo?.views}{' '}<br/></span>
            <span>Fuente del video: </span>
            {
              fuenteVideo(renderVideo?.fuente)
            }
            <span><br/>Publicado hace: {renderVideo?.fecha}</span>
          </div>
          <div className="border-t-2 border-black py-2 items-center">
            <h4>Estrellas:</h4>
            {renderVideo?.actor.length < 1 ? (
              <span className="text-[#D63423] font-bold">Unknown</span>
            ) : (
              renderVideo?.actor?.map((actor: string) => {
                return (
                  <Link
                    href={`/actores/name?name=${actor.replace(' ', '-')}`}
                    key={actor}
                    className="text-[#D63423] font-bold"
                  >
                    {actor} -{" "}
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
          <p className="w-full text-center my-2 py-2 bg-[#D63423] rounded-lg text-white">
            Ver mas
          </p>
        </article>
        <aside className="w-1/6 text-center p-2 max-xl:hidden">
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
          </div>
        </aside>
      </div>
    </>
  );
}
