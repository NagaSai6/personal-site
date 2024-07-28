import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { BLOG_QUERYResult } from "@/sanity.types";
import SanityImage from "./SanityImage/SanityImage";
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import PostHeader from "./PostHeader";
import author from "@/sanity/schemas/author";
const components: PortableTextComponents = {
  types: {
    image: SanityImage,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : undefined}
        >
          {children}
        </Link>
      );
    },
  },
};

export default function Post({ post }: { post: BLOG_QUERYResult }) {
  return (
    <div className="p-2 md:p-8 bg-white  shadow-lg rounded-lg">
      <PostHeader
        title={post?.title!}
        author={{
          name: post?.author?.name!,
          image: post?.author?.image?.asset?.url!,
        }}
        publishedAt={post?.publishedAt!}
        tags={post?.tags!}
      />
      <section className="mt-10 mx-auto container">
        <PortableText value={post?.content!} components={components} />
      </section>
    </div>
  );
}
