import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { Project } from "@/types/project";
import { Blog } from "@/types/blog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";

type CarouselLayoutProps = {
  name: string;
  viewAllLink: string;
  viewAllText: string;
  projects?: Project[];
  blogs?: Blog[];
  type: "project" | "blog";
};
export default function CarouselLayout({
  name,
  viewAllLink,
  viewAllText,
  projects,
  blogs,
  type,
}: CarouselLayoutProps) {
  let data__: any = [];

  if (type === "project") {
    data__ = projects?.map((project, index) => (
      <CarouselItem
        key={index}
        className="flex flex-col md:basis-1/2 lg:basis-1/3 sm:basis-1"
      >
        <Card
          type="project"
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          imageUrl={project.imageUrl}
          url={project.url}
        />
      </CarouselItem>
    ));
  } else if (type === "blog") {
    data__ = blogs?.map((blog, index) => (
      <CarouselItem
        key={index}
        className="flex flex-col md:basis-1/2 lg:basis-1/3 sm:basis-1"
      >
        <Card
          type="blog"
          title={blog.title}
          description={blog.description}
          imageUrl={blog.imageUrl}
          url={blog.slug}
          content={blog.content}
          publishedDate={blog.publishedDate}
          tags={blog.tags}
        />
      </CarouselItem>
    ));
  }

  return (
    <div className="bg-grey-50 py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <h2 className="text-h2 font-primartFont font-primaryFontWeight text-gray-800 mb-8">
          {name}
        </h2>
        <div className={``}>
          <Carousel
            opts={{
              loop: true,
              breakpoints: {
                "(min-width: 768px)": { slidesToScroll: 1, inViewThreshold: 1 },
              },
            }}
          >
            <CarouselContent className="py-2 ">{data__}</CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="text-right mt-4">
        <Link
          href={viewAllLink}
          className="text-green-500 hover:text-green-600 font-secondaryFont font-medium flex items-center justify-end text-sm md:text-base"
        >
          {viewAllText} <FiArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>
    </div>
  );
}
