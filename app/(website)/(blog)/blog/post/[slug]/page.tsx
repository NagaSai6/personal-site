import React from "react";
import { client, sanityFetch } from "@/sanity/lib/client";
import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";
import Post from "@/app/_components/Blogs/Post";
import { BLOG_QUERYResult, BLOGS_QUERYResult } from "@/sanity.types";
import { BLOG_QUERY, BLOGS_QUERY } from "@/sanity/queries/sanity-queries";

export async function generateStaticParams() {
  const posts = await client.fetch<BLOGS_QUERYResult>(
    BLOGS_QUERY,
    {},
    { perspective: "published" }
  );

  return posts.map((post) => ({
    slug: post?.slug?.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch<BLOG_QUERYResult>({
    query: BLOG_QUERY,
    params,
  });
  if (!post) {
    return notFound();
  }
  return <Post post={post} />;
}
