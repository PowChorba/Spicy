import Navbar from "@/components/Navbar/Navbar";
import { CategoryFormat, CategoryReduce, VideoFormat, VideoFormatComplete } from "@/types";
import Link from "next/link";
import { getAllVideos, getCategoryVideos, getVideo } from "../service/videos.service";
import { categoryName, getRandomNumber, randomCategory, randomSort, titleAcentos } from "./utils/videos.helper";
import SmallVideos from "@/components/Videos/SmallVideos";
import { AiFillLike } from "react-icons/ai";
import MediumVideos from "@/components/Videos/MediumVideos";
import VideoWatchError from "@/components/Videos/VideoWatchError";
import VideoWatch from "@/components/Videos/VideoWatch";

export default async function VideoWatchPage({ params }: any) {
  const randomNumber = getRandomNumber(1, 49);
  const renderVideo: VideoFormatComplete = await getVideo(params.id);
  
  if(!renderVideo.msg){
    return <VideoWatchError/>
  }else {
    const allVideos = await getAllVideos(randomNumber)
    const categoryFilter: CategoryReduce[] = categoryName(renderVideo?.data?.category)
    const category = randomCategory(renderVideo?.data?.category)
    const videosFilter = allVideos.slice(randomNumber, randomNumber + 5);
    const relatedVideos = await getCategoryVideos(category)

    return <VideoWatch renderVideo={renderVideo} categoryFilter={categoryFilter} videosFilter={videosFilter} relatedVideo={relatedVideos}/>

  }
}
