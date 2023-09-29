import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getExperience() {
  const data = await client.fetch(
    groq`*[_type == "experience"]{
      _id,
      name,
      logo {alt, "url": asset->url, srcDark {"url": asset->url}, srcLightHover {"url": asset->url}, srcDarkHover {"url": asset->url}},
      description
    }`,
    { next: { revalidate: 150 } }
  );
  return data;
}

export async function getFeaturedProjects() {
  const data = await client.fetch(
    groq`*[_type == "featuredProjects"]{
      _id,
      name,
      image {alt, "url": asset->url},
      description,
      techStack
    }`,
    { next: { revalidate: 40 } }
  );
  return data;
}

export async function getTestimonials() {
  const data = await client.fetch(
    groq`*[_type == "testimonials"]{
      _id,
      name,
      image {alt, "url": asset->url},
      title,
      testimonial
    }`,
    { next: { revalidate: 40 } }
  );
  return data;
}

export async function getCaseStudiesProjects() {
  const data = await client.fetch(
    groq`*[_type == "caseStudiesProjects"]{
      _id,
      name,
      image {alt, "url": asset->url},
      description,
    }`,
    { next: { revalidate: 40 } }
  );
  return data;
}
