import Link from "next/link";

export default function CatalogAccion(){
    
    return(<>
       <div className="p-2 w-full">
        <p className="font-bold text-lg w-full">Accion</p>
        <ul className="border-t-2 border-[#ffffff77] py-2">
            <Link href='/categorias/3' className="text-sm py-1">Anal</Link>
            <br />
            <Link href='/categorias/28' className="text-sm py-1">Mamadas</Link>
            <br />
            <Link href='/categorias/25' className="text-sm py-1">Solitaria</Link>
            <br />
            <Link href='/categorias/30' className="text-sm py-1">Bukkake</Link>
            {/* <Link href='/categorias/14' className="text-sm py-1">Tetas Grandes</Link> */}
        </ul>
        </div>
    </>)
}