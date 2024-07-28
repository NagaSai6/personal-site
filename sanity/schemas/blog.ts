import { defineField, defineType } from "sanity";
import { HiRss } from "react-icons/hi";
import { UserIcon } from "@sanity/icons";

import ExternalLinkRenderer from "./components/ExternalLinkRenderer";
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      description: "Select the author of the blog",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      description: "Select the tags of the blog",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload the cover image of the blog",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
      description: "Enter the date of the blog",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "Enter the excerpt of the blog",
      validation: (Rule) => Rule.required() && Rule.max(400),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          options: {},
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "link",
                fields: [
                  {
                    name: "url",
                    type: "url",
                  },
                ],
                components: {
                  annotation: ExternalLinkRenderer,
                },
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                icon: UserIcon,
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    to: [
                      { type: "blog" },
                      // other types you may want to link to
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              description: "Alternative text for the image",
              validation: (Rule) =>
                Rule.required().warning(
                  "Alt text is important for accessibility."
                ),
            },
            {
              name: "credits",
              type: "string",
              title: "Credits",
              description: "Source of the image",
            },
          ],
        },
        {
          type: "code",
          options: {
            withFilename: true,
          },
        },
      ],
      description: "Enter the content of the blog",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
