'use client'
import {useRouter} from 'next/navigation'
import { titleAcentos } from "@/app/videos/[id]/utils/videos.helper";
import Image from "next/image";
import Link from "next/link";

interface Props {
  _id: string
  title: string;
  imgPreview: string;
  vidPreview: string;
  duration: string;
  rating: number;
  url: string;
  views: string
  fuente: string
}

export default function Videos({
  title,
  imgPreview,
  duration,
  rating,
  _id,
  views,
  fuente
}: Props) {
  const router = useRouter()
  const fuenteVideo = (fuente:string) =>{
    if (fuente === "PornHub") {
      return <p className="text-xs absolute bottom-2 left-32">
        <span className="font-bold">Porn</span>
        <span className="text-[#ff9000] font-bold">Hub</span>
      </p>
    }
    else if(fuente=== 'YouPorn'){
      return <p className="text-xs absolute bottom-2 left-32">
      <span className="font-bold">You</span>
        <span className="text-[#ec567c] font-bold">Porn</span></p>
    }
    else {
      return <p className="text-xs absolute bottom-2 left-32">
      <span className="font-bold text-[#de2600]">X</span>
        <span className="font-bold">Videos</span></p>
    }
  }

  return (
    <li onClick={() => router.push(`/videos/${_id}`)} className="mt-2 break-words list-none bg-[#00000015] rounded-lg relative text-ellipsis shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] overflow-hidden max-h-[325px] cursor-pointer">
      <div className="relative">
        <Image
          src={imgPreview}
          alt="T"
          width="375"
          height="350"
          className="rounded-tl-lg rounded-tr-lg transition-all ease-in-out hover:scale-110"
        />
        <span className="text-sm px-1 text-[#F9005F] font-semibold absolute bottom-0 right-0 bg-[#252525]">
          {duration}
        </span>
      </div>
      <div className="py-4 h-28 text-center max-sm:h-14 max-sm:p-2 max-lg:truncate">
        <h4 className="font-bold text-sm">{titleAcentos(title)}</h4>
      </div>
      <span className="text-xs absolute bottom-2 left-2 text-[#8faf20] font-bold"> {rating}%</span>
      <span className="text-xs absolute bottom-2 left-12 text-[#F9005F] font-bold">{views}</span>
      {fuenteVideo(fuente)}
    </li>
  );
}
