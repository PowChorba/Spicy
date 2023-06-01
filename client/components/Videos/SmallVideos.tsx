'use client'
import { titleAcentos } from "@/app/videos/[id]/utils/videos.helper";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation"

interface Props {
  _id: string
  title: string;
  imgPreview: string;
  duration: string;
//   url: string;
}

export default function SmallVideos({
  title,
  imgPreview,
  duration,
  _id
}: Props) {
  const router = useRouter()

  return (
    <li
      // href={`/videos/${_id}`}
      onClick={() => router.push(`/videos/${_id}`)}
      className="break-words cursor-pointer bg-white relative text-ellipsis list-none shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] overflow-hidden"
    >
      <div className="relative">
        <Image
          src={imgPreview}
          alt="T"
          width="260"
          height="150"
        />
        <span className="text-sm px-1 text-[#F9005F] font-semibold absolute bottom-0 right-0 bg-[#252525]">
          {duration}
        </span>
      </div>
      <div className="text-center truncate">
        <span className="font-bold text-sm">{titleAcentos(title)}</span>
      </div>
      {/* <span className="text-xs absolute bottom-2 left-2 text-[#666666]">{rating}%</span> */}
    </li>
  );
}