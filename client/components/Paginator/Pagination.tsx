'use client'

import { VideoFormat } from "@/types"
import { Dispatch, SetStateAction, useState } from "react"
import {GrNext, GrPrevious} from 'react-icons/gr'

interface Props {
    data: VideoFormat[]
    setCurrentPage: Dispatch<SetStateAction<number>>
    postsPerPage: number
    currentPage: number
}

export default function Pagination({data, setCurrentPage, postsPerPage, currentPage}: Props){
    let pages: number[] = []
    const lastPage = Math.ceil(data.length / postsPerPage)

    for(let i = 1; i <= Math.ceil(data.length / postsPerPage); i++){
        pages.push(i)
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
        window.scrollTo(0,0)
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
        window.scrollTo(0,0)
    }

    const handleLastPage = () => {
        setCurrentPage(lastPage)
        window.scrollTo(0,0)
    }

    if(data.length < 49){
        return <div className="hidden">asd</div>
    }
    else{
        return(<div className='mt-2 py-2 rounded-lg text-center bg-[#252525]'>
            {/* Para ir a una pagina atras, de a una */}
            {/* <button onClick={handlePrev} className={currentPage - 1 !== 0 ? "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]" : 'hidden'}><GrPrevious/></button> */}
            {/* Para ir a la primer pagina, al menos que ya estes en la primer pagina */}
            <button onClick={() => setCurrentPage(1)} className={currentPage === 1 || currentPage === 2 ? "hidden" : 'p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]'}>1</button>
            {/*  Span para que quede bien visualmente, al menos que estes cerca del final */}
            <button className={currentPage === 1 ? 'hidden': "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}>...</button>
            {/* Para ir una pagina para atras, mostrando el numero a la que irias */}
            <button onClick={handlePrev} className={currentPage - 1 !== 0 ? "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]" : 'hidden'}>{currentPage - 1}</button>
            {/* Para ver la pagina actual en la que estas parado */}
            <button className={"p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md bg-[#D63423]"}>{currentPage}</button>
            {/* Para ir a la pagina siguiente, pero muestra el numero de la siguiente pagina */}
            <button onClick={handleNext} className={currentPage + 1 > lastPage ? 'hidden' : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}>{currentPage + 1}</button>
            {/* Span para que quede bien visualmente, al menos que estes cerca del final */}
            <button className={currentPage === lastPage ? 'hidden': "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}>...</button>
            {/* Para ir a la ultima pagina, al menos que estes en la ultima pagina ya */}
            <button onClick={handleLastPage} className={currentPage === lastPage || currentPage === lastPage - 1 ? 'hidden' : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}>{lastPage}</button>
            {/* Para adelantar de a una pagina, sin importar donde estes. Al menos que estes en la ultima pagina */}
            {/* <button onClick={handleNext} className={currentPage + 1 > lastPage ? 'hidden' : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}><GrNext color="white"/></button> */}
    </div>)
    }
}