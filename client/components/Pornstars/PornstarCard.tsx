'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
interface Props {
    name: string
    img: string
    _id: string
    index: number
    videos: number
    ranking: number
}

export default function PornstarCard({name, img, _id, index, videos, ranking}:Props){
    const nameModify = name?.replace(' ', '-')
    const router = useRouter()


    return(
    // <Link href={`/actores/name?name=${nameModify}`} className="bg-[#252525] rounded-lg text-center shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)]">
    <li onClick={() => router.push(`/actores/name?name=${nameModify}`)} className="bg-[#252525] list-none rounded-lg text-center shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] cursor-pointer">
        <img
          src={img}
          alt="T"
          width="250"
          height="350"
          className="rounded-tl-lg rounded-tr-lg w-[100%]"
        />
        <h4 className="font-bold py-2 text-white">{name}</h4>
        <div className="flex justify-between px-2">
        <span className="text-white text-sm">
            Ranking: <span className="text-[#D63423]">{ranking}</span>
        </span>
        {/* <span className="text-white text-sm">
            Videos: <span className="text-[#D63423]">{videos}</span>
            </span> */}
        </div>
    </li>)
}   