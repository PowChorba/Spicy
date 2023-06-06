"use client";
import { useRouter } from 'next/navigation';

interface Props {
  prev: number;
  next: number;
  actual: string;
}

export default function PaginationDos({ prev, next, actual }: Props) {
    const router = useRouter();
  const handleNext = () =>{
    router.push(`/inicio/${next}`)
  }

  const handlePrev = () =>{
    router.push(`/inicio/${prev}`)
  }
  
  return (
    <>
      <button
      onClick={() => router.push('/inicio/1')}
        className={
          actual === '1' || actual === "2"
            ? "hidden"
            : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"
        }
      >1</button>
      <span className={actual === '1' || actual === "2" ? 'hidden' : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}>...</span>
      <button
      onClick={handlePrev}
        className={
          prev === 0
            ? "hidden"
            : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"
        }
      >
        {prev}
      </button>
      <span className="p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md bg-[#D63423]">
        {actual}
      </span>
      <button onClick={handleNext} className={actual === '208' ? 'hidden' : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}>
        {next}
      </button>
      <span className={actual === '208' || actual === '207' ? 'hidden' : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}>...</span>
      <button onClick={() => router.push('/inicio/208')} className={actual === '208' || actual === '207' ? 'hidden' : "p-2 border-2 mr-2 ml-2 text-white text-xs rounded-md border-[#D63423]"}>
        208
      </button>
    </>
  );
}
