import { VideoFormat } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  idCategory: number;
  img: string;
  videos?: VideoFormat[]
}

export default function CategoryCard({ name, idCategory, img, videos }: Props) {
    const filterVideo = videos?.filter(e => e.category?.includes(idCategory))
    return (
    <Link
      href={`/categorias/${idCategory}`}
      className="mt-2 bg-white rounded-lg relative text-ellipsis shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] overflow-hidden"
    >
      <div className="relative">
        <Image
          src={img}
          alt="T"
          width="300"
          height="350"
          className="rounded-tl-lg rounded-tr-lg transition-all ease-in-out hover:scale-110"
        />
        <span className="text-sm py-2 text-[#F9005F] font-semibold absolute bottom-0 right-0 bg-[#252525] w-full text-center max-xl:py-0">
          {name}{`(${filterVideo?.length})`}
        </span>
      </div>
      {/* <div className="p-4 text-center">
        <h4 className="font-bold">{name}</h4>
      </div> */}
    </Link>
  );
}
