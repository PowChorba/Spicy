import Link from "next/link"

interface Props {
    title: string
    imgPreview: string
    vidPreview: string
    duration: string
    rating: number
    url:string
}

export default function Videos({title,imgPreview,vidPreview,duration,rating, url}: Props) {
  return (
    <Link href={url} className="mt-2 mr-2 break-words max-w-xs max-h-xs">
      <div>
        <img
            src={imgPreview}
            alt="T"
            width='350'
            height='300'
        />
        <video className="hidden absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
            <source src={vidPreview} type="video/mp4"/>
            <source src={vidPreview} type="video/webm"></source>
        </video>
      </div>
      <h4>{title}</h4>
      <div className="text-right">
        <span className="text-xs px-1">{duration}</span>
        <span className="text-xs ">{rating}%</span>
      </div>
    </Link>
  );
}
