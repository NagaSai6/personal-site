import React from 'react'
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { BLOG_QUERYResult } from "@/sanity.types";
export default function Post({ post }: { post: BLOG_QUERYResult }) {
    
  return (
    <div>{post?.title}</div>
  )
}
