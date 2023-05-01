import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  imgPreview: string;
  vidPreview: string;
  duration: string;
  rating: number;
  url: string;
}

export default function Videos({
  title,
  imgPreview,
  vidPreview,
  duration,
  rating,
  url,
}: Props) {
  return (
    <Link
      href={url}
      className="mt-2 break-words bg-white rounded-lg relative text-ellipsis shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] overflow-hidden"
    >
      <div className="relative">
        <Image
          src={imgPreview}
          alt="T"
          width="375"
          height="350"
          className="rounded-tl-lg rounded-tr-lg transition-all ease-in-out hover:scale-110"
        />
        <span className="text-sm px-1 text-[#F9005F] font-semibold absolute bottom-0 right-0 bg-[#252525]">
          {duration}
        </span>
      </div>
      <div className="p-4 text-center h-28">
        <h4 className="font-bold">{title}</h4>
      </div>
      <span className="text-xs absolute bottom-2 left-2 text-[#666666]">{rating}%</span>
    </Link>
  );
}
