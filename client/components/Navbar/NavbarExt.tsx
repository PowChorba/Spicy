'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CategoryCatalog from "../Category/CategoryCatalog";


export default function NavbarExt() {
  const path = usePathname()
  const [categorias,setCategorias] = useState(false)

  const handleCategories = () => {
    setCategorias(!categorias)
  }



  return (
    <div className="flex justify-around items-center bg-[#252525] text-white rounded-lg">
          <Link href="/inicio" className={path.includes('/inicio') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center max-sm:px-1 max-sm:py-1 max-sm:text-xs"}>Inicio</Link>
          {/* <button onClick={handleInicio} className={path.includes('/inicio') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs max-2xl:hidden" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs max-2xl:hidden"}>Inicio</button> */}
          {
            path.includes('/categorias') 
            ? <Link href="/categorias" className={path.includes('/categorias') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs max-2xl:hidden" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs max-2xl:hidden"}>Categorias</Link>
            : <button onClick={handleCategories} className={path.includes('/categorias') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs max-2xl:hidden" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs max-2xl:hidden"}>Categorias</button>
          }
          <Link href="/categorias" className={path.includes('/categorias') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs 2xl:hidden" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs 2xl:hidden tooltip"}>Categorias</Link>
          <Link href="/actores" className={path.includes('/actores') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center max-sm:px-1 max-sm:py-1 max-sm:text-xs"}>Estrellas Porno</Link>
          <div className={categorias ? 'py-2 bg-[#252525] absolute top-[153px] w-2/6 z-10 h-[225px] flex rounded-lg' : 'hidden'}>
              <CategoryCatalog/>
          </div>
          <Link href="/video" className={path.includes('/videos') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center max-xl:px-2 max-sm:px-1 max-sm:py-1 max-sm:text-xs"}>Videos</Link>
    </div>
  );
}
