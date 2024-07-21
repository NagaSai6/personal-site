import React from "react";
import Image from "next/image";
import styles from "@/public/css-modules/Experience.module.css";
import Experience from "./Experience";
type Experience = {
  company: string;
  roles: {
    role: string;
    startDate: string; // ISO format: dd-mm-yyyy
    endDate: string; // ISO format: dd-mm-yyyy or 'Present'
    location: string;
    years: number;
  }[];
};
// pages/index.js

// components/WorkExperience.js

const workExperiences = [
  {
    companyName: "Google LLC",
    companyLogo: "https://picsum.photos/200?random=3",
    role: "Software Engineer",
    description: "Worked on developing...",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    location: "New York, NY",
  },
  {
    companyName: "Wishup Technologies",
    companyLogo: "https://picsum.photos/200?random=1",
    role: "Full Stack Developer",
    description: "Focused on full stack web development...",
    skills: ["Node.js", "Express", "MongoDB", "Vue.js"],
    location: "San Francisco, CA",
  },
  {
    companyName: "Company C",
    companyLogo: "https://picsum.photos/200?random=2",
    role: "UI/UX Designer",
    description: "Designed user-friendly interfaces...",
    skills: ["Figma", "Sketch", "Adobe XD", "Photoshop"],
    location: "Austin, TX",
  },
  {
    companyName: "Company D",
    companyLogo: "https://picsum.photos/200?random=3",
    role: "Project Manager",
    description: "Managed multiple projects...",
    skills: ["Agile", "Scrum", "Project Planning", "Team Leadership"],
    location: "Seattle, WA",
  },
  {
    companyName: "Company E",
    companyLogo: "https://picsum.photos/200?random=4",
    role: "Data Scientist",
    description: "Analyzed large datasets...",
    skills: ["Python", "R", "Machine Learning", "Data Visualization"],
    location: "Boston, MA",
  },
  // Add more entries as needed
];

const workExperiences__ = workExperiences.map((workExperience, index) => {
  if (index % 2 === 0) {
    return (
      <div key={index} className={`${styles.container} ${styles.left}`}>
        <Experience
          key={index}
          companyName={workExperience.companyName}
          companyLogo={workExperience.companyLogo}
          role={workExperience.role}
          description={workExperience.description}
          skills={workExperience.skills}
          location={workExperience.location}
        />
      </div>
    );
  }else{
    return (
      <div key={index} className={`${styles.container} ${styles.right}`}>
        <Experience
          key={index}
          companyName={workExperience.companyName}
          companyLogo={workExperience.companyLogo}
          role={workExperience.role}
          description={workExperience.description}
          skills={workExperience.skills}
          location={workExperience.location}
        />
      </div>
    );
  }
});

export default function WorkExperience() {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-2 lg:px-8 ">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-h2 font-primartFont font-primaryFontWeight text-gray-800 mb-8">
          Work Experience
        </h2>
        <div className={`${styles.timeline}`}>
          {workExperiences__}
        </div>
      </div>
    </section>
  );
}
