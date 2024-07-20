import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function HomeBanner() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-primartFont font-primaryFontWeight text-gray-800">
            Discovering the Crossroads of Tech and Governance
          </h2>
          <p className="text-lg  text-gray-600 font-secondaryFont">
            Hello, I&apos;m Naga Sai. I&apos;m a Software Engineer adept in both
            frontend and backend systems. Beyond the lines of code, my curiosity
            extends to the realms of physics and governance, adding a unique
            perspective to my tech-driven world.
          </p>
          <Button className="mt-4 font-secondaryFont bg-green-500 text-white font-lato py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg border border-transparent hover:border-gray-200 transform hover:scale-105">
            More About My Journey
          </Button>
        </div>

        <div className="flex justify-center">
          <Image
            src="/goku.webp"
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
