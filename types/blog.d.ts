export type Blog = {
  title: string;
  description: string;
  content: string;
  tags: BlogTags[];

  imageUrl: string;
  slug: string;
  publishedDate: string;
};

export type BlogTags = {
  name: string;
url: string;
};
