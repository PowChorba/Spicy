// 'use client'
import { CategoryFormat, VideoFormat } from "@/types";
// import { useState } from "react";
import CategorySmall from "./CategorySmall";
// import { useParams } from "next/navigation";
import VideoRender from "../RenderVideos/VideosRender";
import {GrNext, GrPrevious} from 'react-icons/gr'
import Link from "next/link";
import VideoRenderDos from "../RenderVideos/VideosRenderDos";

interface Props {
    data: CategoryFormat[]
    videos: VideoFormat[]
    id: string
}

export default function CategoryRender({data, videos, id}: Props){
    // const router = useParams()
    // const {id} = router
    // Paginado
    // const dataUno = data.slice(0,7)
    // const dataDos = data.slice(8,16)
    // const dataTres = data.slice(17,-1)
    // const [catRender, setCatRender] = useState(dataUno)

    // const handlePrev = () => {
    //     setCatRender(dataUno)
    // }

    // const handleNext = () => {
    //     setCatRender(dataDos)
    // }

    // const handleNextTres = () => {
    //     setCatRender(dataTres)
    // }

    const renderVideos = videos.filter(e => e.category?.includes(parseInt(id)))
    const actualData = data?.filter(e => e.idCategory === parseInt(id))

    return(
        <>
        <div className='flex flex-row my-2 gap-2 justify-center rounded-lg max-sm:hidden'>
        {/* <button onClick={handlePrev} className={catRender[0].name !== dataUno[0].name ? "p-2  text-lg rounded-md " : 'invisible'}><GrPrevious/></button> */}
        {/* <button onClick={() => setCurrentPage(currentPage - 1)} className={currentPage - 1 !== 0 ? "p-2  text-lg rounded-md " : 'invisible'}>{"<"}</button> */}
            {/* {
                catRender?.map(e => {
                    return <CategorySmall key={e._id} name={e.name} idCategory={e.idCategory} img={e.img} videos={videos} actualId={id}/>
                })
            } */}
        {/* <button onClick={() => setCurrentPage(currentPage + 1)} className={currentPage + 1 > lastPage ? 'invisible' :  " p-2 text-lg rounded-md"}>{">"}</button> */}
        {/* <button onClick={handleNext} className={catRender[0].name !== dataDos[0].name ? "p-2  text-lg rounded-md " : 'invisible'}><GrNext/></button> */}
        {/* <button onClick={handleNextTres} className={catRender[0].name !== dataDos[0].name ? "p-2  text-lg rounded-md " : 'invisible'}><GrNext/></button> */}
        </div>
        <div className="w-full py-2">
            <h4 className="font-bold"><Link href='/categorias'>Categorias</Link> {'> '} <span className="text-[#D63423]">{actualData[0]?.name}</span> </h4>
        </div>
        <VideoRenderDos data={renderVideos}/>
        </>
    )
}
