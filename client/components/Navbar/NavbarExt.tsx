import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavbarExt() {
  const path = usePathname()

  return (
    <div className="flex justify-around items-center bg-[#252525] text-white rounded-lg">
          <Link href="/inicio" className={path.includes('/inicio') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center"}>Inicio</Link>
          <Link href="/video" className={path.includes('/videos') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center"}>Videos</Link>
          <Link href="/categorias" className={path.includes('/categorias') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center"}>Categorias</Link>
          <Link href="/pornstars" className={path.includes('/pornstars') ? "px-10 bg-[#D63423] py-2 rounded-md w-1/4 text-center" : "px-10 bg-[#252525] py-2 rounded-md w-1/4 text-center"}>Estrellas Porno</Link>
    </div>
  );
}
