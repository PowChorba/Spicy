import Link from "next/link";

export default function NavbarExt() {
  return (
    <div className="flex justify-around items-center bg-[#252525] text-white rounded-lg">
      <ul className="flex py-1">
        {/* <li className="px-10 hover:bg-[#F9005F] py-2 rounded-md"> */}
          <Link href="/inicio" className="px-10 bg- hover:bg-[#D63423] py-2 rounded-md">Inicio</Link>
        {/* </li> */}
        {/* <li className="px-10 hover:bg-[#F9005F] py-2 rounded-md"> */}
          <Link href="/" className="px-10 hover:bg-[#D63423] py-2 rounded-md">Videos</Link>
        {/* </li> */}
        {/* <li className="px-10 hover:bg-[#F9005F] py-2 rounded-md"> */}
          <Link href="/category" className="px-10 hover:bg-[#D63423] py-2 rounded-md">Categorias</Link>
        {/* </li> */}
        {/* <li className="px-10 hover:bg-[#F9005F] py-2 rounded-md"> */}
          <Link href="/pornstars" className="px-10 hover:bg-[#D63423] py-2 rounded-md">Estrellas Porno</Link>
        {/* </li> */}
      </ul>
    </div>
  );
}
