import { VideoFormat } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  idCategory: number;
  img: string;
  videos?: VideoFormat[]
  actualId: string
}

export default function CategorySmall({ name, idCategory, img, videos, actualId }: Props) {
    const filterVideo = videos?.filter(e => e.category?.includes(idCategory))
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
          height="200"
          className="rounded-tl-lg rounded-tr-lg transition-all ease-in-out object-cover"
        />
        {
          actualId === idCategory.toString()
          ? <span className="text-[12px] text-white font-bold absolute bottom-0 right-0 bg-[#252525] w-full text-center">
          {name}{`(${filterVideo?.length})`}
        </span>
          : <span className="text-[12px] text-[#F9005F] font-semibold absolute bottom-0 right-0 bg-[#252525] w-full text-center">
          {name}{`(${filterVideo?.length})`}
        </span> 
        }
      </div>
      {/* <div className="p-4 text-center">
        <h4 className="font-bold">{name}</h4>
      </div> */}
    </Link>
  );
}
