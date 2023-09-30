import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getExperience() {
  const data = await client.fetch(
    groq`*[_type == "experience"]{
      _id,
      name,
      logo {alt, "url": asset->url, srcLightHover {"url": asset->url}, srcDarkHover {"url": asset->url}},
      description
    }`,
    { next: { revalidate: 1500 } }
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
    { next: { revalidate: 1500 } }
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
    { next: { revalidate: 1500 } }
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
    { next: { revalidate: 1500 } }
  );
  return data;
}

export async function getCaseStudiesDetail() {
  const data = await client.fetch(
    groq`*[_type == "caseStudiesDetail"]{
      _id,
      type,
      name,
      description,
      myRole,
      startDate,
      endDate,
      techStack,
      demoSite,
      sourceCode,
      learnings,
      detail,
      problemStatement,
      "problemStatementImage": problemStatementImage.asset->url,
      "figmaDesignImage": figmaDesignImage.asset->url,
      "heroImage": heroImage.asset->url,
      challenges
    }`,
    { next: { revalidate: 1500 } }
  );
  return data;
}

export async function getResume() {
  const data = await client.fetch(
    groq`*[_type == "resume"]{
      "resumeUpload": resumeUpload.asset->url
    }`,
    { next: { revalidate: 1500 } }
  );
  return data;
}
