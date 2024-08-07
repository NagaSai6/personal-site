import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Slug } from "@/sanity.types";

type PostHeaderProps = {
  title: string;
  publishedAt: string;
  author: {
    name: string;
    image: string;
  };
  tags: {
    name: string | null;
    slug: Slug | null;
  }[];
};

export default function PostHeader({
  title,
  publishedAt,
  author,
  tags,
}: PostHeaderProps) {
  return (
    <header className="">
      <div className="container mx-auto">
        <h1 className="font-primartFont font-primaryFontWeight text-3xl sm:text-h2 md:text-3xl lg:text-4xl text-black mb-3 md:mb-4 leading-snug">
          {title}
        </h1>
        <div className="flex items-center mb-3 md:mb-4">
          <Image
            src={author.image}
            alt={author.name}
            width={56}
            height={56}
            objectFit="cover"
            className="rounded-full border-2 border-green-500 max-h-[56px] max-w-[56px]"
          />
          <div className="ml-3 md:ml-4">
            <p className="font-secondaryFont font-secondaryFontWeight text-black">
              {author.name}
            </p>
            <p className="text-h6 font-secondaryFont text-gray-500">
              {new Date(publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-2">
          {tags?.map(
            (tag) =>
              tag.name &&
              tag.slug && (
                <Link
                  href={`/blog/tag/${tag.slug.current}`}
                  key={tag.slug.current}
                  className="bg-green-500 text-white px-2 py-1 rounded-full text-xs md:text-sm font-secondaryFont font-secondaryFontWeight hover:bg-green-600 transition-colors"
                >
                  {tag.name}
                </Link>
              )
          )}
        </div>
      </div>
    </header>
  );
}