import Navbar from "@/components/Navbar/Navbar";
import { getPornstars } from "./service/pornstar.service";
import PornstarCard from "@/components/Pornstars/PornstarCard";
import { PornstarFormat, VideoFormat } from "@/types";
import { getData, getVideo } from "../videos/service/videos.service";

export default async function Pornstars(){
    const data: PornstarFormat[] = await getPornstars()

    return(
        <main>
          <Navbar />
          {/* <iframe src="https://www.pornhub.com/embed/ph609579b7baf55?autoplay=1" scrolling="no" allowFullScreen></iframe> */}
          <div className="grid grid-cols-6 mt-2 gap-2 max-xl:grid-cols-3 max-sm:grid-cols-2">
            {
                data.map((e, index) => {
                    return <PornstarCard key={e._id}  name={e.name} img={e.img} _id={e._id} index={index} videos={e.videos}/>
                })
            }
          </div>
        </main>)
}