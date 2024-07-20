import { defineField, defineType } from "sanity";
import { BiUser } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name of the person",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(50),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "email",
    }),
    defineField({
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    }),
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "skill",
              title: "Skill",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "skillImage",
              title: "Image",
              type: "image",
              description: "Upload an image for the skill",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                  description: "Alternative text for the image",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      description: "Add your social media links:",
      of: [
        {
          type: "object",
          title: "Social Link",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                  description: "Alternative text for the image",
                },
              ],
            },
          ],
          options: {
            collapsed: false,
            collapsible: true,
            columns: 2,
          },
        },
      ],
    }),
  ],
});
