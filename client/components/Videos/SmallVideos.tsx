import Image from "next/image";
import Link from "next/link";

interface Props {
  _id: string
  title: string;
  imgPreview: string;
  duration: string;
//   url: string;
}

export default function SmallVideos({
  title,
  imgPreview,
  duration,
  _id
}: Props) {
  return (
    <Link
      href={`/videos/${_id}`}
      className="py-2 break-words bg-white relative text-ellipsis shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] overflow-hidden"
    >
      <div className="relative">
        <Image
          src={imgPreview}
          alt="T"
          width="250"
          height="150"
        />
        <span className="text-sm px-1 text-[#F9005F] font-semibold absolute bottom-0 right-0 bg-[#252525]">
          {duration}
        </span>
      </div>
      <div className="text-center truncate">
        <span className="font-bold text-sm">{title}</span>
      </div>
      {/* <span className="text-xs absolute bottom-2 left-2 text-[#666666]">{rating}%</span> */}
    </Link>
  );
}