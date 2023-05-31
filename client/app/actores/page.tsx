import Navbar from "@/components/Navbar/Navbar";
import { getPornstars } from "./service/pornstar.service";
import PornstarCard from "@/components/Pornstars/PornstarCard";
import { PornstarFormat } from "@/types";
import Link from "next/link";

export default async function Pornstars(){
    const data: PornstarFormat[] = await getPornstars('1')
    console.log(data[0].ranking, 'asdasdsadsad')

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
          <div className="mt-2 py-2 rounded-lg text-center bg-[#252525]">
            <span className="p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md bg-[#D63423]">
            {'1'}
            </span>
            <Link
            href={`/actores/2`}
            className="p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"
            >
            {2}
            </Link>
          </div>
        </main>)
}