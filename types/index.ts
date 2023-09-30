import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ExperienceType = {
  _id: string;
  name: string;
  logo: {
    alt: string;
    url: string;
    srcDark: { url: string };
    srcLightHover: { url: string };
    srcDarkHover: { url: string };
  };
  description: string;
};

export type ProjectType = {
  name: string;
  description: string;
  techStack: string[];
  image: string;
};

export type FeaturedProjectsType = {
  description: string;
  techStack: string[];
  _id: string;
  name: string;
  image: {
    alt: string;
    url: string;
  };
};

export type TestimonialType = {
  title: string;
  testimonial: string;
  _id: string;
  name: string;
  image: {
    alt: string;
    url: string;
  };
}[];

export type CaseStudiesProjectsType = {
  description: string;
  _id: string;
  name: string;
  image: {
    alt: string;
    url: string;
  };
};

export type CaseStudiesDetailType = {
  type: string;
  name: string;
  description: string;
  myRole: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  demoSite: string;
  sourceCode: string;
  learnings: string[];
  detail: string;
  problemStatement: string;
  problemStatementImage: string;
  figmaDesignImage: string;
  heroImage: string;
  challenges: string[];
};
