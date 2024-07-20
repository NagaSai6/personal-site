import { defineType, defineField } from "sanity";
import { BiBrain } from "react-icons/bi";
export default defineType({
  name: "projects",
  title: "Projects",
  icon : BiBrain,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Name",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string"
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true // Enables image cropping
              }
            }
          ]
        }
      ]
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "tagline",
      title: "Tag Line",
      type: "string",
    }),
    // markup
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some screen readers shows this instead of the image.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
  ],

  // preview: {
  //   select: {
  //     title: "title",
});
