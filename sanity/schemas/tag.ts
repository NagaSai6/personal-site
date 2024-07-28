import { defineType, defineField } from "sanity";
import { HiTag } from "react-icons/hi";

export default defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  icon: HiTag,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the tag",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Enter the slug of the tag",
      options: {
        source: "name",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Enter the description of the tag",
      validation: (Rule) => Rule.required() && Rule.max(400), 
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload the image of the tag",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for the image",
          validation: (Rule) => Rule.required().warning('Alt text is important for accessibility.'),
        },
        {
          name: "credits",
          type: "string",
          title: "Credits",
          description: "Source of the image",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
