import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Link from "next/link";
import ProjectCss from "@/public/css-modules/Project.module.css"; // Import the CSS module
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const projects = [
  {
    title: "Project One",
    description:
      "An innovative solution to modern problems, utilizing React and Node.js.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Github Actions",
      "Docker",
      "Linux",
    ],
    imageUrl: "https://picsum.photos/400",
    projectUrl: "#",
  },
  {
    title: "Project Two",
    description: "A mobile app that revolutionizes the way we share moments.",
    technologies: ["Flutter", "Firebase", "Dart"],
    imageUrl: "https://picsum.photos/200",
    projectUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A web platform that connects freelancers with projects using AI matchmaking.",
    technologies: ["Vue.js", "Python", "Flask", "PostgreSQL"],
    imageUrl: "https://picsum.photos/200",
    projectUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "An e-commerce platform with a focus on sustainability and green products.",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    imageUrl: "https://picsum.photos/200",
    projectUrl: "#",
  },
  // Add more projects as needed
];
export default function Projects() {
  return (
    <div className="bg-grey-50 py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <h2 className="text-h2 font-primartFont font-primaryFontWeight text-gray-800 mb-8">
          Featured Projects
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
            <CarouselContent className="py-2 ">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col md:basis-1/2 lg:basis-1/3 sm:basis-1"
                >
                  <div
                    className={`bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden flex flex-col  transition duration-300 ease-in-out transform hover:-translate-y-1`}
                    style={{ minHeight: "400px" }}
                  >
                    <div className="flex-grow flex justify-center items-center h-40 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-100 opacity-75"></div>
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        objectFit="cover"
                        className="z-10"
                      />
                    </div>
                    <div className="p-4 md:p-2 flex-grow">
                      <h3 className="font-primartFont font-primaryFontWeight  text-h3 mb-1 truncate">
                        {project.title}
                      </h3>
                      <p
                        className="text-gray-600 text-sm md:text-base mb-2 overflow-ellipsis overflow-hidden font-secondaryFont font-secondaryFontWeight"
                        style={{
                          maxHeight: "4.5em",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {project.description}
                      </p>
                      <div className="mb-2 flex flex-wrap">
                        {project.technologies
                          .slice(0, 5)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs md:text-sm font-secondaryFont text-gray-700 mr-1 mb-1 hover:bg-gray-300 cursor-pointer"
                            >
                              {tech}
                            </span>
                          ))}
                        {project.technologies.length > 5 && (
                          <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs md:text-sm font-secondaryFont text-gray-700 mr-1 mb-1">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                      <Button className="font-secondaryFont w-full md:w-auto bg-green-500 text-white py-2 px-4 text-sm md:text-base rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition ease-in-out duration-150">
                        View Project{" "}
                        <MdOutlineKeyboardArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="text-right mt-4">
        <Link
          href="/projects"
          className="text-green-500 hover:text-green-600 font-secondaryFont font-medium flex items-center justify-end text-sm md:text-base"
        >
          View All Projects{" "}
          <FiArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
        </Link>
      </div>
    </div>
  );
}
