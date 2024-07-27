import Image from "next/image";
import Link from "next/link";
import HomeBanner from "../_components/HomeBanner/HomeBanner";
import Projects from "../_components/Projects/Projects";
import Blogs from "../_components/Blogs/Blogs";
import WorkExperience from "../_components/Experience/WorkExperience";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Projects />
      <WorkExperience />
      <Blogs />
    </>
  );
}
