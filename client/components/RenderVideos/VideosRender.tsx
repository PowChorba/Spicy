"use client";

import { VideoFormat } from "@/types";
import Videos from "../Videos/Videos";
import Pagination from "../Paginator/Pagination";
import { useState } from "react";

interface Props {
  data: VideoFormat[];
}

export default function VideoRender({ data }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(48);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <>
    <div className="grid grid-cols-4 gap-2 mb-4">
      {currentPosts.map((e) => {
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
              />
              );
            })}
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
