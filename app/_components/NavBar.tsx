"use client"
import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Image from "next/image";
import { NavigationMenuDemo } from "./NavMenu/NavMenu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-5 py-3 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={"/images/nagasai_in_logo.svg"} className="hidden md:block" alt="Logo" width={50} height={50} />
          <h1 className="font-cormorantGaramond text-h1 md:block">Naga Sai</h1>
        </div>
        {/* Toggle the menu visibility on click */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <HiMiniBars3BottomLeft className="h-6 w-6" />
        </button>
      </div>
      {/* Conditionally render or hide the navigation menu based on isMenuOpen state */}
      <div className={`w-full ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center`}>
        <NavigationMenuDemo />
      </div>
    </nav>
  );
}