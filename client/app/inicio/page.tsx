import Navbar from "@/components/Navbar/Navbar";
import { SearchFormat, VideoFormat } from "@/types";
import { getCategory, getInicioVideo, getPornstart, getSearch } from "./services/home.service";
import Trending from "@/components/Relacionados/Trending";
import Footer from "@/components/Footer/Footer";
import InicioRender from "@/components/RenderVideos/InicioRender";


export default async function Home() {
  let data: VideoFormat[] = await getInicioVideo();
  const search: SearchFormat[] = await getSearch()
  const actores = await getPornstart()
  const category = await getCategory()


  return (
    <main>
      <Navbar />
      <div className="w-full relative items-center">
      <h4 className="font-bold py-2">Busquedas mas activas</h4>
      <ul className="flex items-center gap-2 w-full overflow-hidden">
        {
          search?.map(e => {
            return <Trending key={e._id} word={e.word}/>
          })
        }
      </ul>
      </div>
        <InicioRender data={data} params={'1'} actores={actores} category={category}/>
        <Footer/>
    </main>
  );
}
