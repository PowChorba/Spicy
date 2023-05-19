"use client";
import axios from "axios";
import Link from "next/link";

interface Props {
  word: string;
}

export default function Trending({ word }: Props) {
  const handleClic = async () => {
    await axios.post("http://localhost:3001/search", { word: word });
  };
  return (
    <Link
      onClick={handleClic}
      href={`/videos?title=${word}`}
      className="px-4 bg-[#D63423] text-white text-sm rounded-lg min-w-[7%] max-w-[7%] text-center overflow-hidden"
    >
      {word}
    </Link>
  );
}
