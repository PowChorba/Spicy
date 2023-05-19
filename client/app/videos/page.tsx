import Navbar from "@/components/Navbar/Navbar";
import { VideoFormat } from "@/types";
import { getData } from "./service/videos.service";
import { DotSpinner } from "@uiball/loaders";
import VideoRenderDos from "@/components/RenderVideos/VideosRenderDos";

export default async function SearchVideos({ searchParams }: any) {
  // const search = useSearchParams();
  // const searchQuery = search?.get("title");
  // const [loader, setLoader] = useState(false);
  // const [state, setState] = useState<VideoFormat[]>([]);
  console.log(searchParams, 'asdasdsdad')
  
  const data: VideoFormat[] = await getData(searchParams.title)

  // useEffect(() => {
  //   const api = async () => {
  //     const apiData = await getData(searchQuery);
  //     setState(apiData);
  //   };
  //   const timer = () => {
  //     setTimeout(() => {
  //       setLoader(true);
  //     }, 1000);
  //   };
  //   api();
  //   timer();
  // }, [searchQuery]);

  // if (!loader) {
  //   return (
  //     <main>
  //       <Navbar />
  //       <div className="flex justify-center items-center p-20 font-bold text-[#D63423]">
  //         <DotSpinner size={100} speed={0.9} color="#D63423" />
  //       </div>
  //     </main>
  //   );
  // }
  if(data[0]?.title?.includes('Esta prohibido la busqueda y difunsion de videos relacionados a menores de edad. Porfavor no vuelvas a introduccir algo relacionado.')){
    return(
      <main>
      <Navbar/>
      <div className="flex justify-center text-center items-center p-20 font-bold text-[#D63423]">
          {
            data[0]?.title
          }
        </div>
    </main>
    )
  }

  return (
    <main>
      <Navbar />
      {data?.length !== 0 ? (
        <>
          <VideoRenderDos data={data} />
        </>
      ) : (
        <div className="flex justify-center items-center p-20 font-bold text-[#D63423]">
          No pudimos encontrar ningun video, prueba buscando otro titulo...
        </div>
      )}
    </main>
  );
}
