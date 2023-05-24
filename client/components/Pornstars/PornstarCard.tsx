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
    const nameModify = name.replace(' ', '-')
    return(
    <Link href={`/actores/${nameModify}`} className="bg-[#252525] rounded-lg text-center">
        <Image
          src={img}
          alt="T"
          width="300"
          height="350"
          className="rounded-tl-lg rounded-tr-lg"
        />
        <h4 className="font-bold py-2 text-white">{name}</h4>
        <div className="flex justify-between px-2">
        <span className="text-white text-sm">
            Ranking: <span className="text-[#D63423]">{index + 1}</span>
        </span>
        <span className="text-white text-sm">
            Videos: <span className="text-[#D63423]">{videos}</span></span>
        </div>
    </Link>)
}