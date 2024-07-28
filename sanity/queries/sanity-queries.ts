import { groq } from "next-sanity";

export const BLOGS_QUERY = groq`*[_type == "blog" && defined(slug.current)][0...12]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  "author": author->{
    name,
  },
  "tags": tags[]->{
    name,
    slug
  },
  "coverImage": coverImage{
    asset->{
      url,
      metadata {
        dimensions,
        lqip, // low quality image placeholder
        palette
      }
    }
  }
}`;
export const BLOG_QUERY = groq`*[_type == "blog" && slug.current == $slug][0]{
  title, 
  content, 
  publishedAt, 
  author->{name, image{asset->{url}}}, 
  tags[]->{name, slug}
}`;
