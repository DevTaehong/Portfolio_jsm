import { type SchemaTypeDefinition } from "sanity";
import experience from "./experience";
import featuredProjects from "./featuredProjects";
import testimonials from "./testimonials";
import caseStudiesProjects from "./caseStudiesProjects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, featuredProjects, testimonials, caseStudiesProjects],
};
