import Image from "next/image";
import Link from "next/link";

interface Props {
  _id: string
  title: string;
  imgPreview: string;
  vidPreview: string;
  duration: string;
  rating: number;
  url: string;
  views: string
}

export default function Videos({
  title,
  imgPreview,
  duration,
  rating,
  _id,
  views
}: Props) {
  if(title.includes('%a%')) title = title.replace(/%a%/g, 'á')
  if(title.includes('%e%')) title = title.replace(/%e%/g, 'é')
  if(title.includes('%i%')) title = title.replace(/%i%/g, 'í')
  if(title.includes('%o%')) title = title.replace(/%o%/g, 'ó')
  if(title.includes('%u%')) title = title.replace(/%u%/g, 'ú')
  if(title.includes('%n%')) title = title.replace(/%n%/g, 'ñ')

  return (
    <Link prefetch={false}
      href={`/videos/${_id}`}
      className="mt-2 break-words bg-[#00000015] rounded-lg relative text-ellipsis shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] overflow-hidden"
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
      <div className="py-4 h-28 text-center max-sm:h-14 max-sm:p-2 max-lg:truncate">
        <h4 className="font-bold text-sm">{title}</h4>
      </div>
      <span className="text-xs absolute bottom-2 left-2 text-[#8faf20] font-bold"> {rating}%</span>
      <span className="text-xs absolute bottom-2 left-12 text-[#F9005F] font-bold">{views}</span>
    </Link>
  );
}
