import Image from "next/image"
import Link from "next/link"

interface Props {
    name: string
    img: string
    _id: string
    index: number
    videos: number
}

export default function PornstarCard({name, img, _id, index, videos}:Props){
    return(
    <Link href={`/actores/${name}`} className="bg-[#D63423] rounded-lg text-center">
        <Image
          src={img}
          alt="T"
          width="300"
          height="350"
          className="rounded-tl-lg rounded-tr-lg"
        />
        <h4 className="font-bold py-2 text-[#252525]">{name}</h4>
        <div className="flex justify-between px-2">
        <span className="text-white">
            Ranking: {index + 1}
        </span>
        <span>Videos: {videos}</span>
        </div>
    </Link>)
}