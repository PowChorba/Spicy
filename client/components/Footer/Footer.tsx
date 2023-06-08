'use client'
import { useRouter} from 'next/navigation'

export default function Footer(){
    const router = useRouter()
    return(
        <footer className="flex items-center justify-between p-2 bg-[#252525] text-white rounded-lg mt-2 text-xs">
            <h4 onClick={() => router.push('/inicio')} className="text-5xl cursor-pointer max-sm:text-3xl">Spicy<span className="text-[#D63423]">X</span></h4>
            <span>Terminos de servicio</span>
            {/*  - Politica de Privacidad DMCA */}
            <span onClick={() => router.push('/informacion/2257')} className='cursor-pointer'>2257</span>
            <span>EU DSA</span>
            <span>© SpicyX 2023</span>
        </footer>
        )
}