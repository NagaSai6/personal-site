import { defineField, defineType } from "sanity";
import { HiRss } from "react-icons/hi";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: HiRss,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Enter the title of the blog",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Enter the slug of the blog",
      options: {
        source: "title",
        maxLength: 200,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
      description: "Enter the date of the blog",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Enter the excerpt of the blog",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});