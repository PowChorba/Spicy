import React from "react";
import NavbarExt from "./NavbarExt";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-evenly py-4 w-2/3 mx-auto">
        <h1 className="text-3xl">SpicyTube</h1>
        <input type="text" placeholder="Busca tu video preferido..." className="w-1/3 h-8 p-2 rounded-lg border-2"/>
        <p className="invisible">asd</p>
      </div>
        <NavbarExt/>
    </div>
  );
}
