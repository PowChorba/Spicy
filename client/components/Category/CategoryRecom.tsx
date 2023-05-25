import { VideoFormat } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  idCategory: number;
  img: string;
}

export default function CategoryRecom({ name, idCategory, img, }: Props) {

    return (
    <Link
      href={`/categorias/${idCategory}`}
      className="bg-white rounded-lg relative text-ellipsis shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] overflow-hidden"
    >
      <div className="relative">
        <Image
          src={img}
          alt={name}
          width="200"
          height='200'
          className="rounded-tl-lg rounded-tr-lg transition-all ease-in-out"
        />
        <span className="text-[12px] text-white font-bold absolute bottom-0 right-0 bg-[#252525] w-full text-center">
          {name}
        </span>
      </div>
      {/* <div className="p-4 text-center">
        <h4 className="font-bold">{name}</h4>
      </div> */}
    </Link>
  );
}