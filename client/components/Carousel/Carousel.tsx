import { CategoryFormat, VideoFormat } from "@/types";
import Slider from "react-slick";
import CategorySmall from "../Category/CategorySmall";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Props {
    catRender: CategoryFormat[]
    id: string
    videos: VideoFormat[]
}

export default function Carousel({catRender, id, videos}: Props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7
      };
    return(
        <div className="z-10">
            <Slider {...settings}>
                {
                    catRender?.map(e => {
                        return <CategorySmall key={e._id} name={e.name} idCategory={e.idCategory} img={e.img} videos={videos} actualId={id}/>
                    })
                }
            </Slider>
        </div>)
}