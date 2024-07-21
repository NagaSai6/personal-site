"use client"
import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Image from "next/image";
import { NavigationMenuDemo } from "./NavMenu/NavMenu";
import Eyes from "./Generic/Eyes";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white  px-5 py-3 flex flex-col md:flex-row items-center justify-between shadow-lg transform -skew-y-1 md:sticky md:top-0 md:z-50">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={"/images/nagasai_in_logo.svg"} className="hidden md:block" alt="Logo" width={50} height={50} />
          <h1 className="font-primartFont font-primaryFontWeight text-h1 md:block">{`Naga Sai Rao`}</h1>
        </div>
        {/* Toggle the menu visibility on click */}
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HiMiniBars3BottomLeft className="h-6 w-6" />
        </button>
       <div className="hidden md:block">
       <Eyes />
       </div>
      </div>
      {/* Conditionally render or hide the navigation menu based on isMenuOpen state */}
      <div className={`w-full ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center`}>
       
        <NavigationMenuDemo />
      </div>
    </nav>
  );
}