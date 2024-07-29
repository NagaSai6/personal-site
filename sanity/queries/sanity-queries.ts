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

// get all tags

export const TAGS_QUERY = groq`*[_type == "tag" && defined(slug.current)][0...12]{
  _id,slug,name}`;

// get all tags with corresponding blogs data

export const TAG_BLOGS_QUERY = groq`*[_type == "tag" && slug.current == $slug][0]{
  _id,
  name,
  description,
  "slug": slug.current,
  "image":{  "url": image.asset->url},
  "blogs": *[_type == "blog" && references(^._id)][0...12]{
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
  }
}`;

// get all tags with count of blogs

export const TAG_BLOGS_COUNT_QUERY = groq`
    *[_type == "tag"]{
      _id,
      name,
      "slug": slug.current,
      "count": count(*[_type == "blog" && references(^._id)])
    }
  `;
