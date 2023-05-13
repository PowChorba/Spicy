"use client";
import Navbar from "@/components/Navbar/Navbar";
import Pagination from "@/components/Paginator/Pagination";
import VideoRender from "@/components/RenderVideos/VideosRender";
import Videos from "@/components/Videos/Videos";
import { VideoFormat } from "@/types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getData } from "./service/videos.service";

export default function SearchVideos() {
  const search = useSearchParams();
  const searchQuery = search?.get("title");

  const [state, setState] = useState<VideoFormat[]>([]);

  useEffect(() => {
    const api = async () => {
      const apiData = await getData(searchQuery);
      setState(apiData);
    };
    api();
  }, [searchQuery]);

  if (state?.length === 0) {
    return (
      <main>
        <Navbar />
        <div className="flex justify-center items-center p-20 font-bold text-[#D63423]">
          No pudimos encontrar ningun video, prueba buscando otro titulo...
        </div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <>
        <VideoRender data={state} />
      </>
    </main>
  );
}
