import { DataPornstar, PornstarComplete, VideoFormat } from "@/types";
import PornstartCardDos from "./PornstarCardDos";
import Videos from "../Videos/Videos";

interface Props{
    actorData: DataPornstar
}

export default function PornstarsWatch({actorData}: Props){
    const actor = actorData.pornstar[0];
    const videos: VideoFormat[] = actorData.findAllVideos;
    const videosLength = videos?.length;

    return <>
    <div className="flex gap-10 max-sm:gap-2 items-center justify-evenly my-4 max-sm:my-2 bg-[#252525] p-2 rounded-lg">
            <PornstartCardDos data={actor} videosLength={videosLength} />
          </div>
          <p className="font-bold">Videos de la estrella:</p>
          <div className="grid grid-cols-4 gap-2 mb-4  max-xl:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1">
            {videos?.length === 0 ? (
              <span className="text-center text-[#D63423]">
                No se encontaron videos de esta estrella en nuestra base de
                datos, si recommiendas alguno manda un mail al
                support@spicy.online
              </span>
            ) : (
              videos.map((e) => {
                return (
                  <Videos
                    key={e._id}
                    _id={e._id}
                    title={e.title}
                    url={e.url}
                    imgPreview={e.imgPreview}
                    vidPreview={e.vidPreview}
                    duration={e.duration}
                    rating={e.rating}
                    views={e.views}
                    fuente={e.fuente}
                  />
                );
              })
            )}
          </div>
    </>
}