import React from "react";
import CarouselLayout from "../Generic/CarouselLayout";
import Card from "../Generic/Card";

const projects = [
  {
    title: "Project One",
    description:
      "An innovative solution to modern problems, utilizing React and Node.js.",
    technologies: [
      { name: "React", url: "https://reactjs.org/" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Github Actions", url: "https://github.com/features/actions" },
      { name: "Docker", url: "https://www.docker.com/" },
      { name: "Linux", url: "https://www.linux.org/" },
    ],
    imageUrl: "https://picsum.photos/400",
    url: "#",
  },
  {
    title: "Project Two",
    description: "A mobile app that revolutionizes the way we share moments.",
    technologies: [
      { name: "Flutter", url: "https://flutter.dev/" },
      { name: "Firebase", url: "https://firebase.google.com/" },
      { name: "Dart", url: "https://dart.dev/" },
    ],
    imageUrl: "https://picsum.photos/200",
    url: "#",
  },
  {
    title: "Project Three",
    description:
      "A web platform that connects freelancers with projects using AI matchmaking.",
    technologies: [
      { name: "Vue.js", url: "https://vuejs.org/" },
      { name: "Python", url: "https://www.python.org/" },
      { name: "Flask", url: "https://palletsprojects.com/p/flask/" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/" },
    ],
    imageUrl: "https://picsum.photos/200",
    url: "#",
  },
  {
    title: "Project Four",
    description:
      "An e-commerce platform with a focus on sustainability and green products.",
    technologies: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Stripe", url: "https://stripe.com/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
    ],
    imageUrl: "https://picsum.photos/200",
    url: "#",
  },
  // Add more projects as needed
];
export default function Projects() {
  return (
    <CarouselLayout
      name="Featured Projects"
      viewAllLink="/projects"
      viewAllText="View All Projects"
      type="project"
      projects={projects}
    />
  );
}
