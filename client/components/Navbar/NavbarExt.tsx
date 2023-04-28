import Link from "next/link";

export default function NavbarExt() {
  return (
    <div className="flex justify-around items-center bg-black text-white">
      <ul className="flex py-2">
        <li className="px-10">
          <Link href="/">Inicio</Link>
        </li>
        <li className="px-10">
          <Link href="/">Videos</Link>
        </li>
        <li className="px-10">
          <Link href="/">Categorias</Link>
        </li>
        <li className="px-10">
          <Link href="/">Estrellas Porno</Link>
        </li>
      </ul>
    </div>
  );
}
