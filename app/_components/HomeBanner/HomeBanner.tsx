import React from "react";

export default function HomeBanner() {
  return (
    <div className="grid grid-cols-12 min-h-screen border border-green-300">
      <div className="col-span-6 flex justify-center content-center items-center font-garamond flex-col gap-6 ">
        <h2>hey Im Naga </h2>
        <p>I m a Software enginner</p>
      
      </div>

      <div className="col-span-6">Naga Test v1.0.0 - Integrated Sanity CMS </div>
    </div>
  );
}
