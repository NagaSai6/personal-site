import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function HomeBanner() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold  font-headingFont text-gray-800">
            Discovering the Crossroads of Tech and Governance
          </h2>
          <p className="text-lg  text-gray-600 font-nonHeadingFont">
            Hello, I&apos;m Naga Sai. I&apos;m a Software Engineer adept in both
            frontend and backend systems. Beyond the lines of code, my curiosity
            extends to the realms of physics and governance, adding a unique
            perspective to my tech-driven world.
          </p>
          <Button className="mt-4 bg-green-500 text-white font-lato py-2 px-4 rounded hover:bg-green-600 transition-colors ">
            More About My Journey
          </Button>
        </div>

        <div className="flex justify-center">
          <Image
            src="https://www.transparentpng.com/thumb/goku/y5OESW-goku-clipart-png-file.png"
            alt="goku clipart png file @transparentpng.com"
            width={300}
            height={300}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
