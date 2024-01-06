import { defineField, defineType } from "sanity";

export default defineType({
  name: "admin-details",
  title: "Admin Details",
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
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          placeholder: "Skill",
          type: "string",
        },
      ],
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
      name : "tagline",
      title : "Tag Line",
      type : "string"
    })
  ],

  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return { ...selection, subtitle: author && `by ${author}` };
  //   },
  // },
});
