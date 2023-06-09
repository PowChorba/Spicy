import { VideoFormat } from "@/types";
import Videos from "../Videos/Videos";
import Link from "next/link";
import VideosSkeleton from "../Skeleton/VideosSkeleton";
import PaginationDos from "../Paginator/PaginatorDos";
interface Props {
  data: VideoFormat[];
  params: string;
}

export default function VideoRender({ data, params }: Props) {
  const nextPage = parseInt(params) + 1;
  const prevPage = parseInt(params) - 1;

  return (
    <>
      <div className="grid grid-cols-4 gap-2 mb-4  max-xl:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1">
        {
          !data 
          ? [... new Array(48).map(e => {return <VideosSkeleton key={e}/>})]
          : data?.map((e) => {
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
        }
      </div>
      <div className="mt-2 py-2 rounded-lg text-center bg-[#252525]">
        <PaginationDos next={nextPage} prev={prevPage} actual={params}/>
      </div>
    </>
  );
}
