'use client'
import { VideoFormat } from "@/types";
import Videos from "../Videos/Videos";
import Pagination from "../Paginator/Pagination";
import { useState, useEffect } from "react";
import VideosSkeleton from "../Skeleton/VideosSkeleton";
interface Props {
  data: VideoFormat[];
}

export default function VideoRenderDos({ data }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(48);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
  const [loading,setLoading] = useState(true)


  // useEffect(() => {
  //   if (data) {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1500);
  //   }
  // }, [data]);


  return (
    <>
    <div className="grid grid-cols-4 gap-2 mb-4  max-xl:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1">
      {
        // loading 
        // ? [... new Array(50)].map(e => { return <VideosSkeleton key={e}/>}) 
        // : 
        currentPosts?.map((e) => {
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
              />
              );
            })
      }
    </div>
      <Pagination
        data={data}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        />

        </>
  );
}