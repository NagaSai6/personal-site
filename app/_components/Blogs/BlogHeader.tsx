import React from "react";
import Image from "next/image";

export default function BlogHeader() {
  return (
    <header className="bg-grey-50 shadow-lg h-96 flex items-center">
    <div className="container mx-auto px-5 py-10 flex flex-col items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <Image
          width={48}
          height={48}
          src="/images/nagasai_in_logo.svg"
          alt="Logo"
          className="w-12 h-12 hidden md:block"
        />
        <div>
          <h1 className="text-h1 font-primartFont font-primaryFontWeight">
           Curious Byte
          </h1>
          <p className="text-h6 font-secondaryFont">
            Discover the latest articles, tutorials, and insights on web
            development, design, and more.
          </p>
        </div>
      </div>
      <div className="w-full max-w-md mt-5 md:mt-2">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>
    </div>
  </header>
  );
}
