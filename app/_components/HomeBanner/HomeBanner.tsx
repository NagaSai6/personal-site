import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function HomeBanner() {
  return (
    <div className="grid grid-cols-12  border border-green-300">
      <div className="col-span-6 flex justify-center content-center items-center  flex-col gap-6 ">
        <div className="w-[50%] space-y-4">
          <h2 className="font-garamond font-bold text-4xl">Naga Sai Rao</h2>
          <p className="font-lato">
            Hello, I&apos;m Naga Sai. I&apos;m a Software Engineer adept in both
            frontend and backend systems. Beyond the lines of code, my curiosity
            extends to the realms of physics and governance, adding a unique
            perspective to my tech-driven world
          </p>
          <Button className="font-lato">Know More</Button>
        </div>
      </div>

      <div className="col-span-6 flex items-center justify-center">
        <Image
          src="https://www.transparentpng.com/thumb/goku/y5OESW-goku-clipart-png-file.png"
          alt="goku clipart png file @transparentpng.com"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
