import { CategoryFormat, PornstarFormat, VideoFormat } from "@/types";
import Videos from "../Videos/Videos";
import PaginationDos from "../Paginator/PaginatorDos";
import PornstarCard from "../Pornstars/PornstarCard";
import CategoryCard from "../Category/Category";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { INICIO_ACTORES, INICIO_CATEGORIAS, INICIO_VIDEOS } from "@/redux/actions";
interface Props {
  data: VideoFormat[];
  params: string;
  actores: PornstarFormat[]
  category: CategoryFormat[]
}

// export default function InicioRender() {
export default function InicioRender({ data, params, actores, category}: Props) {
  const nextPage = 2;
  const prevPage = 1 - 1;
  const dataUno = data?.slice(0,8)
  const dataDos = data?.slice(9,17)
  const dataTres = data?.slice(20,28)


    
  return (
    <>
      <div className="grid grid-cols-4 gap-2 mb-4  max-xl:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1">
        {
          dataUno?.map((e) => {
            return (
              <Videos
                key={e._id}
                _id={e._id}
                title={e.title}
                url={e.url}
                imgPreview={e.imgPreview}
                vidPreview={e.vidPreview}
                duration={e.duration}
                rating={e.rating}
                views={e.views}
                fuente={e.fuente}
              />
            );
          })
        }
      </div>
        <h4 className="font-bold py-2 text-lg">Actores recomendados <Link href='/actores' className="text-sm text-[#D63423] max-sm:hidden">{' '}Ver todas</Link></h4>
      <div className="grid grid-cols-5 gap-2 mb-4  max-xl:grid-cols-3 max-sm:grid-cols-3 max-sm:gap-1">
        {
            actores?.map((e,index) => {
                return <PornstarCard key={e._id}  name={e.name} img={e.img} _id={e._id} index={index} videos={e.videos} ranking={e.ranking}/>
            })
        }
        <Link href={'/actores'}  className="hidden max-sm:bg-[#252525] max-sm:text-[#D63423] max-sm:flex max-sm:justify-center max-sm:items-center max-sm:list-none max-sm:rounded-lg max-sm:text-center max-sm:shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] max-sm:cursor-pointer">
        Ver todos
    </Link>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4  max-xl:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1">
        {
          dataDos?.map((e) => {
            return (
              <Videos
                key={e._id}
                _id={e._id}
                title={e.title}
                url={e.url}
                imgPreview={e.imgPreview}
                vidPreview={e.vidPreview}
                duration={e.duration}
                rating={e.rating}
                views={e.views}
                fuente={e.fuente}
              />
            );
          })
        }
      </div>
      <h4 className="font-bold py-2 text-lg">Categorias en Tendencia <Link href='/categorias' className="text-sm text-[#D63423]">{' '}Ver todas</Link></h4>
      <div className="grid grid-cols-5 gap-2 mb-4  max-xl:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1">
        {
            category?.map(e => {
                return (<CategoryCard key={e._id} name={e.name} idCategory={e.idCategory} img={e.img} videos={e.videos}/>)
            })
        }
        <Link href={'/categorias'}  className="hidden max-sm:bg-[#252525] max-sm:text-[#D63423] max-sm:flex max-sm:justify-center max-sm:items-center max-sm:list-none max-sm:rounded-3xl max-sm:text-center max-sm:shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] max-sm:cursor-pointer">
        Ver todas
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4  max-xl:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-1">
        {
          dataTres?.map((e) => {
            return (
              <Videos
                key={e._id}
                _id={e._id}
                title={e.title}
                url={e.url}
                imgPreview={e.imgPreview}
                vidPreview={e.vidPreview}
                duration={e.duration}
                rating={e.rating}
                views={e.views}
                fuente={e.fuente}
              />
            );
          })
        }
      </div>
      <div className="mt-2 py-2 rounded-lg text-center bg-[#252525]">
        <PaginationDos next={nextPage} prev={prevPage} actual={'1'}/>
      </div>
    </>
  );
}