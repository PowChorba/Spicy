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
            <Image src={data.img} alt={data.name} width='250' height='250' className="rounded-lg"/>
        </div>
        <div>
            <p className="font-bold text-white">Nombre: <span className="text-[#D63423]">{data.name}</span></p>
            <p className="font-bold text-white">Ciudad: <span className="text-[#D63423]">{data.city}</span></p>
            <p className="font-bold text-white">Genero: <span className="text-[#D63423]">{data.sex}</span></p>
            <p className="font-bold text-white">Etnia: <span className="text-[#D63423]">{data.etnia}</span></p>
            <p className="font-bold text-white">Horoscopo: <span className="text-[#D63423]">{data.horoscope}</span></p>
        </div>
        <div>
            <p className="font-bold text-white">Relacion: <span className="text-[#D63423]">{data.relation}</span></p>
            <p className="font-bold text-white">Carrera: <span className="text-[#D63423]">{data.carrer}</span></p>
            <p className="font-bold text-white">Videos: <span className="text-[#D63423]">{videosLength}</span></p>
        </div>
        </>
    )
}