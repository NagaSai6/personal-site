import { groq } from "next-sanity";

export const BLOGS_QUERY = groq`*[_type == "blog" && defined(slug.current)][0...12]{
  _id, title, slug
}`;

export const BLOG_QUERY = groq`*[_type == "blog" && slug.current == $slug][0]{
  title, content, coverImage
}`;
