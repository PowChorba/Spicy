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

  // const getData = async () => {
  //   try {
  //     const apiData = await axios.get(
  //       `http://localhost:3001/videos?title=${searchQuery}`
  //     );
  //     setState(apiData.data);
  //     //   return apiData.data;
  //   } catch (error) {
  //     console.log("Error fatal");
  //   }
  // };

  const [state, setState] = useState<VideoFormat[]>([]);

  useEffect(() => {
    const api = async () =>{
      const apiData = await getData(searchQuery)
      setState(apiData)
    }
    api()
  }, [searchQuery]);

  return (
    <main>
      <Navbar />
      <>
        <VideoRender data={state}/>
      </>
    </main>
  );
}
