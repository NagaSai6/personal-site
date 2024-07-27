import { defineType, defineField } from "sanity";
import { FaUsers } from "react-icons/fa";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: FaUsers,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the author",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Enter the slug of the author",
      options: {
        source: "name",
        maxLength: 200,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      description: "Enter the bio of the author",
    }),
  ],
});
// Compare this snippet from sanity/schemas/blockContent.ts:
