import React from "react";
import BlogHeader from "@/app/_components/Blogs/BlogHeader";
import { sanityFetch } from "@/sanity/lib/client";
import { BLOGS_QUERY } from "@/sanity/queries/sanity-queries";
import { BLOGS_QUERYResult } from "@/sanity.types";
import { Posts } from "@/app/_components/Blogs/Posts";
export default async function page() {
  const posts = await sanityFetch<BLOGS_QUERYResult>({
    query: BLOGS_QUERY,
  });
  return (
    <>
      <BlogHeader />
      <Posts posts={posts} />
    </>
  );
}
