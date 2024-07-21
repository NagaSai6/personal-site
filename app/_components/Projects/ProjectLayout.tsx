import React from "react";
import { CarouselItem } from "@/components/ui/carousel";
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CarouselItem
      className="flex flex-col md:basis-1/2 lg:basis-1/3 sm:basis-1"
    >
      {children}
    </CarouselItem>
  );
}
