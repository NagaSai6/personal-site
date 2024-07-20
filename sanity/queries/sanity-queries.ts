import { client } from "@/sanity/lib/client";

export async function getProjects() {
  const query = `*[_type == "projects"] {
    title,
    slug,
    technologies,
    mainImage,
  }`;
  const data = await client.fetch(query);
  return data;
}
export async function getProfile() {
  const query = `*[_type == "profile"] {
        name,
        email,
        bio,
        image,
    }[0]`;
  const data = await client.fetch(query);
  return data;
}
