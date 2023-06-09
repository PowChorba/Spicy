import { VideoFormat } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  idCategory: number;
  img: string;
  videos?: number;
}


export default function CategoryCard({ name, idCategory, img, videos }: Props) {
  // const filterVideo = videos?.filter((e) => e.category?.includes(idCategory));
  return (
    <Link
      href={`/categorias/${idCategory}`}
      className="mt-2 bg-white rounded-3xl relative text-ellipsis shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] overflow-hidden"
    >
      <div className="relative">
        <Image
          src={img}
          alt="T"
          width="350"
          height="350"
        />
        <span className="text-sm text-center py-20 text-white font-bold absolute bottom-0 left-0 h-full w-full bg-[#0000003f] max-xl:py-0">
          {name}
          <br />
          {`(${videos}) videos`}
        </span>
      </div>
    </Link>
  );
}
