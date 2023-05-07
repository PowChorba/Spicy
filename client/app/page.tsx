'use client'
import { useLocalStorage } from "@/helper/useLocalStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [mayor, setMayor] = useLocalStorage('edad', false)
  const navigate = useRouter()

  const handleEdad = () => {
    setMayor(true)
    navigate.push('/inicio')
  }
  
  // useEffect(() => {
  //   if (mayor === true) {
  //     navigate.push('/inicio')
  //   }
  // }, [mayor])

  return (
    <main className="w-2/3 flex-col justify-center items-center mx-auto my-20 border-2 border-grey-50 rounded-md p-8 shadow-[10px_10px_5px_-3px_rgba(0,0,0,0.22)]">
      <h2 className="text-5xl py-4 text-center">SPICY<span className="text-[#D63423]">TUBE</span></h2>
      <div className="py-4 px-2 bg-gray-300 rounded-md text-left">
        <span>
          Este sitio web contiene materiales que pueden ser sensibles para
          algunas personas. Si eres menor de <strong>18 años</strong>, o menor de edad en el
          lugar desde donde accede a este sitio web, no tienes autorización o
          permiso para ingresar a este sitio web o acceder a cualquiera de sus
          materiales. Si es mayor de <strong>18 años</strong> o mayor de edad en el lugar desde
          donde accedes a este sitio web, al ingresar al sitio web, aceptas
          cumplir con todos los <strong>TÉRMINOS Y CONDICIONES.</strong> También reconoces y
          aceptas que no te sientes ofendido por los materiales que puedan subir
          nuestros creadores de contenidos. Al hacer clic en el botón "Entrar",
          y al ingresar a este sitio web, usted acepta todo lo anterior y
          certifica bajo pena de perjurio que es mayor de edad.
        </span>
      </div>
      <div className="py-4 text-center">
      <button onClick={handleEdad} className="bg-[#D63423] text-white py-2 px-4 rounded-lg">Soy mayo de 18 años y entiendo los terminos y condiciones.</button>
      </div>
    </main>
  );
}
