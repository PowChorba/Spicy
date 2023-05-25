'use client'
import Link from "next/link";
import CatalogStars from "./helper/CatalogStars";
import CatalogAccion from "./helper/CatalogAccion";
import { useState } from "react";
import CatalogRecom from "./helper/CatalogRecom";

export default function CategoryCatalog(){
    const [listado, setListado] = useState('estrellas')

    const handleRenderListado = () => {
        if(listado === 'estrellas'){
            return <CatalogStars/>
        }else if(listado === 'accion'){
            return <CatalogAccion/>
        }
        // else if(listado === 'recomendado'){
        //     return <CatalogRecom/>
        // }
        else {
            return <div>Holaaa</div>
        }
    }

    return(
        <>
            <ul className="h-full gap-5 flex flex-col py-2 text-center">
            {/* <button onClick={() => setListado('recomendado')} className={listado === 'recomendado' ? 'bg-[#D63423] p-2' : 'py-2'}>Recomendados</button> */}
                <button onClick={() => setListado('estrellas')} className={listado === 'estrellas' ? 'bg-[#D63423] p-2' : 'py-2'}>Estrellas</button>
                <button onClick={() => setListado('accion')} className={listado === 'accion' ? 'bg-[#D63423] py-2' : 'py-2'}>Accion</button>
                <li onClick={() => setListado('historia')}>Con historia</li>
                <li className="p-2"><Link href='/categorias'>Ver todas las categorias</Link></li>
            </ul>
            <section className="flex justify-center gap-4 text-center h-full border-l-2 px-2 border-white">
                {
                    handleRenderListado()
                }
            </section>
        </>)
}