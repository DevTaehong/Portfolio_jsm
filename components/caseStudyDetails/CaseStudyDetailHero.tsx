"use client";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

import { projectDetails } from "@/constants";
import { CaseStudyGitHubIcon, DemoSiteIcon } from "../svg/caseStudyDetails";
import { paragraphVariants, headingVariants } from "@/utils";
import HeroLink from "./HeroLink";

const CaseStudyDetailHero = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];

  const HeroLinks = [
    { text: "Demo Site", href: projectDetail?.demoSite, Icon: DemoSiteIcon },
    {
      text: "Source Code",
      href: projectDetail?.sourceCode,
      Icon: CaseStudyGitHubIcon,
    },
  ];

  return (
    <section className="bg-white800 px-6 py-12 dark:bg-black300">
      <article className="flex flex-col items-center gap-6 text-center sm:gap-[3.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <header className="flex flex-col gap-[0.62rem] sm:gap-[1.88rem]">
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            className="text-sm font-semibold uppercase not-italic leading-[1.1375rem] tracking-[0.2625rem] text-primaryLight dark:text-primaryDark xl:text-[1.25rem]"
          >
            {projectDetail?.type}
          </motion.p>
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="mobileHeading1 dark:text-white900 xl:text-[4rem] xl:leading-[5.2rem] xl:tracking-[-0.04rem]"
          >
            <span className="relative inline-block">
              <span className="absolute top-[1.88rem] h-[1.1875rem] w-full shrink-0 bg-accentSecondary xl:top-[3.3rem] xl:h-[1.757rem]" />
              <span className="relative">{projectDetail?.name}</span>
            </span>
            {" - "}
            {projectDetail?.description}
          </motion.h1>
        </header>
        <Tilt
          scale={1.1}
          transitionSpeed={2500}
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
        >
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:h-full sm:max-h-[21.875rem] sm:w-full sm:max-w-[46.375rem]"
            width={345}
            height={163}
            src={`/images/${projectDetail?.name.toLowerCase()}.svg`}
            alt={`An image of ${projectDetail?.name}`}
          />
        </Tilt>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex flex-row gap-[2.56rem] sm:mt-[1.13rem]  sm:gap-[6.81rem]"
        >
          {HeroLinks.map(({ text, href, Icon }) => (
            <HeroLink key={text} Icon={Icon} href={href} text={text} />
          ))}
        </motion.section>
      </article>
    </section>
  );
};

export default CaseStudyDetailHero;
