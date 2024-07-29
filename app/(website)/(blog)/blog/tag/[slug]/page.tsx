import React from "react";
import { QueryParams } from "sanity";
import { client, sanityFetch } from "@/sanity/lib/client";
import { TAG_BLOGS_QUERY, TAGS_QUERY } from "@/sanity/queries/sanity-queries";
import { TAGS_QUERYResult, TAG_BLOGS_QUERYResult } from "@/sanity.types";
import Image from "next/image";
import { notFound } from "next/navigation";
import Card from "@/app/_components/Generic/Card";
export async function generateStaticParams() {
  const tags = await client.fetch<TAGS_QUERYResult>(
    TAGS_QUERY,
    {},
    { perspective: "published" }
  );
  return tags.map((tag) => ({
    slug: tag?.slug?.current,
  }));
}
export default async function page({ params }: { params: QueryParams }) {
  const tag = await sanityFetch<TAG_BLOGS_QUERYResult>({
    query: TAG_BLOGS_QUERY,
    params,
  });
  if (!tag) {
    return notFound();
  } else {
    return (
        <div className="bg-gray-50 text-black min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            {tag.image && (
              <Image
                src={tag.image?.url!}
                alt={tag.name!}
                width={150}
                height={150}
                className="rounded-full shadow-lg mb-6 min-h-[150px] min-w-[150px]"
              />
            )}
            <div>
              <h1 className="text-5xl font-bold text-green-600 font-primartFont">
                {tag.name}
              </h1>
              <p className="text-gray-600 mt-4 text-lg font-secondaryFont">
                {tag.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tag.blogs.map((blog) => (
              <Card
                key={blog._id}
                type="blog"
                title={blog.title!}
                description={blog.excerpt!}
                imageUrl={blog.coverImage?.asset?.url!}
                publishedDate={blog.publishedAt!}
                url={`/blog/post/${blog?.slug!.current}`}
                tags={[]}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
