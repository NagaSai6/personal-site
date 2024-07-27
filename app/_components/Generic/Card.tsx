import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { BlogTags } from "@/types/blog";
import { BlockSchemaType } from "sanity";
type CardProps = {
  type: "blog" | "project";
  title: string;
  description: string;
  content?: BlockSchemaType;
  technologies?: { name: string; url: string }[];
  imageUrl: string;
  url?: string;
  publishedDate?: string;
  tags?: { name: string; url: string }[];
};

export default function Card({
  type,
  title,
  description,
  content,
  technologies,
  imageUrl,
  publishedDate,
  tags,
  url,
}: CardProps) {
  const averageReadingSpeed = 200; // Words per minute
  const wordCount =
    (type === "project"
      ? description.split(" ").length
      : description!.split(" ").length) || 0;
  const readingTime = Math.ceil(wordCount / averageReadingSpeed);

  return (
    <div
      className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden flex flex-col transition duration-300 ease-in-out transform hover:-translate-y-1 min-h-max"
      style={{ minHeight: "400px" }}
    >
      <div className="flex-grow flex justify-center items-center h-40 relative">
        <div className="absolute z-10 top-0 right-0 bg-black bg-opacity-75 text-white px-3 py-2 text-xs font-secondaryFont font-medium rounded-lg shadow">
          <div className="flex items-center">
            <FiClock className="inline-block w-4 h-4 mr-2" />
            {readingTime} min read
          </div>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          fill
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="p-4 md:p-2 flex-grow">
        <h3 className="font-primartFont font-primaryFontWeight text-h5 sm:text-h5 md:text-h4 lg:text-h3 mb-2 leading-snug">
          {title}
        </h3>
        {type === "blog" && (
          <div className="text-gray-600 text-xs md:text-sm mb-2 font-secondaryFont">
            {publishedDate}
          </div>
        )}
        <p
          className="text-gray-600 text-sm md:text-base mb-2 overflow-ellipsis overflow-hidden font-secondaryFont font-secondaryFontWeight"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>
        <div className="mb-2 flex flex-wrap">
          {(type === "project" ? technologies : tags)
            ?.slice(0, 5)
            .map((item, index) => (
              <span
                key={index}
                className={`inline-block rounded-full px-2 py-1 text-xs md:text-sm font-secondaryFont text-gray-700 mr-1 mb-1 bg-gray-200 hover:bg-gray-300 cursor-pointer`}
              >
                <Link
                  href={
                    type === "project" ? item.url : `/blog/tags/${item.url}`
                  }
                >
                  {item.name}
                </Link>
              </span>
            ))}
          {((type === "project" ? technologies : tags) || [])?.length > 5 && (
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs md:text-sm font-secondaryFont text-gray-700 mr-1 mb-1">
              +{((type === "project" ? technologies : tags) || []).length - 5}{" "}
              more
            </span>
          )}
        </div>
        <Link href={`${url}`}>
          <Button className="font-medium w-full md:w-auto bg-green-500 text-white py-2.5 px-5 text-base rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 shadow hover:shadow-lg transition ease-in-out duration-150 font-secondaryFont">
            {type === "project" ? "View Project" : "Read More"}{" "}
            <MdOutlineKeyboardArrowRight className="ml-2 w-5 h-5 my-auto" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
