import Navbar from "@/components/Navbar/Navbar";
import { getActorIndividual } from "../service/pornstar.service";

export default async function InvididualActor({ params }: any) {
  let nameActor = params.name.replace("%20", " ");
  const actorData = await getActorIndividual(nameActor);
  
  return (
    <>
      <Navbar />
    </>
  );
}
