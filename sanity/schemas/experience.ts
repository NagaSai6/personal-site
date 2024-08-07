import { defineType, defineField } from "sanity";
import { BiBriefcase} from "react-icons/bi";

export default defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  icon: BiBriefcase,
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company?",
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the job title. E.g: Software Developer",
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
    }),
    defineField({
      name: "url",
      title: "Company Website",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
  ],
});
