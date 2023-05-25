import { PornstarFormat } from "@/types"
import Image from "next/image"

interface Props {
    data: PornstarFormat
    videosLength: number
}

export default function PornstartCardDos({data, videosLength}: Props){
    return(
        <>
        <div>
            <Image src={data.img} alt={data.name} width='200' height='250' className="rounded-lg max-sm:w-[100px]"/>
        </div>
        <div>
            <p className="font-bold text-white max-sm:text-[10px]">Nombre: <span className="text-[#D63423]">{data.name}</span></p>
            <p className="font-bold text-white max-sm:text-[10px]">Ciudad: <span className="text-[#D63423]">{data.city}</span></p>
            <p className="font-bold text-white max-sm:text-[10px]">Genero: <span className="text-[#D63423]">{data.sex}</span></p>
            <p className="font-bold text-white max-sm:text-[10px]">Etnia: <span className="text-[#D63423]">{data.etnia}</span></p>
            <p className="font-bold text-white max-sm:text-[10px]">Horoscopo: <span className="text-[#D63423]">{data.horoscope}</span></p>
        </div>
        <div>
            <p className="font-bold text-white max-sm:text-[10px]">Relacion: <span className="text-[#D63423]">{data.relation}</span></p>
            <p className="font-bold text-white max-sm:text-[10px]">Carrera: <span className="text-[#D63423]">{data.carrer}</span></p>
            <p className="font-bold text-white max-sm:text-[10px]">Videos: <span className="text-[#D63423]">{videosLength}</span></p>
        </div>
        </>
    )
}