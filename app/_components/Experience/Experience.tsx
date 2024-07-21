import React from "react";
import Image from "next/image";
import styles from "@/public/css-modules/Experience.module.css";
interface WorkExperienceEntryProps {
  companyName: string;
  companyLogo: string; // URL to the logo image
  role: string;
  description: string;
  skills: string[]; // Array of skills tags
  location: string;
}
export default function Experience({
  companyName,
  companyLogo,
  role,
  description,
  skills,
  location,
}: WorkExperienceEntryProps) {
  return (
    <div className={styles.content}>
      <div className="flex items-center space-x-2 mb-2">
        {" "}
        {/* Reduced space-x and mb */}
        <Image
          width={12}
          height={12}
          src={companyLogo}
          alt={`${companyName} Logo`}
          className="h-10 w-10 object-cover rounded-md" // Reduced size
        />
        <div>
          <h3 className="text-lg font-semibold">{companyName}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <h4 className="text-md font-semibold mb-1">{role}</h4> {/* Reduced mb */}
      <p className="text-sm text-gray-700 mb-2">{description}</p>{" "}
      {/* Reduced mb */}
      <div className="flex flex-wrap gap-1">
        {" "}
        {/* Reduced gap */}
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded" // Adjusted padding
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
