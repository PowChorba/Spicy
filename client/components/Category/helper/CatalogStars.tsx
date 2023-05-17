import Link from "next/link";

export default function CatalogStars(){
    return(<>
       <div className="p-2 w-full">
        <p className="font-bold text-lg w-full">Atributos</p>
        <ul className="border-t-2 border-[#ffffff77] py-2">
            <Link href='/categorias/4' className="text-sm py-1">Culos Grandes</Link>
            <br />
            <Link href='/categorias/14' className="text-sm py-1">Tetas Grandes</Link>
        </ul>
        </div>
        <div className=" p-2">
            <span className="font-bold text-lg">Edades</span>
            <ul className="border-t-2 border-[#ffffff77] py-2">
                <Link href='/categorias/8' className="text-sm py-1">MILF</Link>
                <br />
                <Link href='/categorias/7' className="text-sm py-1">Maduras</Link>
            </ul>
        </div>
        <div className=" p-2">
            <span className="font-bold text-lg">Nacionalidades</span>
            <ul className="border-t-2 border-[#ffffff77] py-2">
                <Link href='/categorias/10' className="text-sm py-1">Latinas</Link>
                <br />
                <Link href='/categorias/20' className="text-sm py-1">Alemanas</Link>
                <br />
                <Link href='/categorias/5' className="text-sm py-1">Brasileras</Link>
                <br />
                <Link href='/categorias/12' className="text-sm py-1">Morenas</Link>
            </ul>
        </div> 
    </>)
}