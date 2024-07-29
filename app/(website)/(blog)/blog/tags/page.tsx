import React from 'react'
import { TAG_BLOGS_COUNT_QUERY } from '@/sanity/queries/sanity-queries';
import { sanityFetch } from '@/sanity/lib/client';
import { TAG_BLOGS_COUNT_QUERYResult } from '@/sanity.types';


export default async function page() {
    const tags = await sanityFetch<TAG_BLOGS_COUNT_QUERYResult>({
        query: TAG_BLOGS_COUNT_QUERY,

    });
  return (
    <div className="bg-white text-black min-h-screen p-4 font-secondaryFont">
    <h1 className="text-3xl font-bold mb-6">All Tags</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tags.map((tag) => (
        <div key={tag._id} className="bg-gray-50 p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-green-500">{tag.name}</h2>
          <p className="text-gray-700">{tag.count} blog posts</p>
        </div>
      ))}
    </div>
  </div>
  )
}
