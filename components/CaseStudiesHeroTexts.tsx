"use client";

import { motion } from "framer-motion";

import { heroText, projects } from "@/constants";
import CaseStudiesHeading from "./CaseStudiesHeading";
import { paragraphVariants, headingVariants } from "@/utils";

const CaseStudiesHeroTexts = () => {
  return (
    <>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="mobileHeading1 max-w-[21rem] dark:text-white800 sm:max-w-[41.125rem] lg:text-[4rem] lg:leading-[5.2rem] lg:tracking-[-0.04rem]"
      >
        Recent{" "}
        {heroText.map((text, i) => (
          <CaseStudiesHeading text={text} key={projects[i].name} />
        ))}
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={paragraphVariants}
        className="smallRegular max-w-[21.125rem] text-white500 dark:text-white800 lg:max-w-[44rem] lg:text-[1.25rem] lg:leading-[1.875rem]"
      >
        {`Dive into my recent success stories and discover how I've helped clients
        overcome challenges, innovate, and achieve their goals`}
      </motion.p>
    </>
  );
};

export default CaseStudiesHeroTexts;
