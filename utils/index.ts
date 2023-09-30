import { ExperienceType, CaseStudiesDetailType } from "@/types";
import {
  CaseStudyGitHubIcon,
  DemoSiteIcon,
} from "@/components/svg/caseStudyDetails";

export const generateFadeInAnimationVariants = (
  delayFactor: number,
  y: number = 100
) => {
  return {
    initial: {
      opacity: 0,
      y,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delayFactor * index,
      },
    }),
  };
};

export const revealAnimationVariants = (y: number) => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
});

export const paragraphAnimationVariants = revealAnimationVariants(35);
export const headingAnimationVariants = revealAnimationVariants(30);
export const paragraphAnimationVariants2 = revealAnimationVariants(25);
export const paragraphAnimationVariants3 = revealAnimationVariants(20);

export const getImageSources = (company: ExperienceType) => [
  {
    src: company?.logo?.url,
    className: `block group-hover:hidden dark:hidden dark:group-hover:hidden`,
  },
  {
    src: company?.logo?.srcLightHover?.url,
    className: `hidden group-hover:block dark:hidden dark:group-hover:hidden group-hover:dark:hidden`,
  },
  {
    src: company?.logo?.srcDark?.url,
    className: `hidden group-hover:hidden dark:block`,
  },
  {
    src: company?.logo?.srcDarkHover?.url,
    className: `hidden dark:hidden dark:group-hover:block`,
  },
];

export const testimonialAnimationVariants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

export const heroLinks = (projectDetail: CaseStudiesDetailType | undefined) => {
  const links = [
    { text: "Demo Site", href: projectDetail?.demoSite, Icon: DemoSiteIcon },
    {
      text: "Source Code",
      href: projectDetail?.sourceCode,
      Icon: CaseStudyGitHubIcon,
    },
  ];
  return links;
};
