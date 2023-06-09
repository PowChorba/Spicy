import Navbar from "@/components/Navbar/Navbar";
import { getActorIndividual } from "../service/pornstar.service";
import PornstarsWatch from "@/components/Pornstars/PornstarWatch";

export default async function InvididualActor({ searchParams }: any) {
  let nameActor = searchParams.name.replace("-", " ");
  const actorData = await getActorIndividual(nameActor);


  return (
    <main>
      <Navbar />
      {!actorData.msg ? (
        <div className="text-center p-10 font-bold">
          No encontramos esa estrella en nuestra base de datos, si recommiendas
          agregarlo manda un mail: support@spicy.online
        </div>
      ) : (
        <>
          <PornstarsWatch actorData={actorData.data} />
        </>
      )}
    </main>
  );
}
