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
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Enter the description of the tag",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
