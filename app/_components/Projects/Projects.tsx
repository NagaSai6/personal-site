import React from "react";

import { FiArrowRight } from "react-icons/fi";
import Card from "../Generic/Card";
import Link from "next/link";
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
    url: "#",
  },
  {
    title: "Project Two",
    description: "A mobile app that revolutionizes the way we share moments.",
    technologies: ["Flutter", "Firebase", "Dart"],
    imageUrl: "https://picsum.photos/200",
    url: "#",
  },
  {
    title: "Project Three",
    description:
      "A web platform that connects freelancers with projects using AI matchmaking.",
    technologies: ["Vue.js", "Python", "Flask", "PostgreSQL"],
    imageUrl: "https://picsum.photos/200",
    url: "#",
  },
  {
    title: "Project Four",
    description:
      "An e-commerce platform with a focus on sustainability and green products.",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    imageUrl: "https://picsum.photos/200",
    url: "#",
  },
  // Add more projects as needed
];
import ProjectLayout from "./ProjectLayout";
export default function Projects() {
  const projects__ = projects.map((project, index) => (
    <ProjectLayout key={index}>
      <Card
        type="project"
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        imageUrl={project.imageUrl}
        slug={project.url}
      />
    </ProjectLayout>
  ));
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
            <CarouselContent className="py-2 ">{projects__}</CarouselContent>
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
