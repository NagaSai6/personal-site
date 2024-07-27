import { BLOGS_QUERYResult } from "@/sanity.types";
import Link from "next/link";
import Card from "../Generic/Card";

export function Posts({ posts }: { posts: BLOGS_QUERYResult }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
     
            <Card
              key={post._id}
              type="blog"
              title={post.title!}
              imageUrl={post.coverImage?.asset?.url!}
              publishedDate={post.publishedAt!}
              description={post.excerpt!}
              tags={post.tags?.map((tag)=>({name:tag.name!,url:tag.slug?.current!}))}
              url={`/blog/${post.slug?.current!}`}
            />
          
        ))}
      </div>
    </div>
  );
}
