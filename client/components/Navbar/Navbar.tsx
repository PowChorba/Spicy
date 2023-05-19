'use client'
import React, { useState } from "react";
import NavbarExt from "./NavbarExt";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function Navbar() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/search', {word:search})
    router.push(`/videos?title=${search}`)
  }

  return (
    <>
      <div className="flex justify-evenly items-center py-8 mx-auto max-sm:gap-2 max-sm:py-4">
        <Link href='/inicio'>
        <h1 className="text-5xl max-sm:text-3xl ">Spicy<span className="text-[#D63423]">X</span></h1>
        </Link>
        <form onSubmit={handleSearch} className="w-2/3 h-8 items-center focus:border-[#D63423]">
          <input type="text" value={search} placeholder="Busca tu video preferido..." className="p-2 w-full rounded-lg border-2 border-[#D63423] focus:border-[#D63423] max-sm:p-1" onChange={(e) => setSearch(e.target.value)}/>
        </form>
        {/* <p className="invisible">asd</p> */}
      </div>
        <NavbarExt/>
    </>
  );
}
