"use client";

import { motion } from "framer-motion";

import {
  paragraphAnimationVariants,
  paragraphAnimationVariants2,
  headingVariants,
} from "@/utils";

const HeroTexts = () => {
  return (
    <>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={paragraphAnimationVariants}
        className="text-sm font-semibold uppercase not-italic leading-[1.1375rem] tracking-[0.2625rem] text-primaryLight dark:text-primaryDark xl:text-[1.25rem] xl:leading-[1.625rem] xl:tracking-[0.375rem]"
      >
        HI, I AM TAEHONG
      </motion.p>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        className="mobileHeading1 pt-5 dark:text-white900  xl:pt-[1.69rem] xl:text-[4rem] xl:leading-[5.2rem] xl:tracking-[-0.04rem]"
      >
        Professional
        <br />
        <span className="relative inline-block">
          <motion.span
            initial="hidden"
            animate="visible"
            className="absolute top-[1.88rem] h-[1.1875rem] w-full shrink-0 bg-accentSecondary xl:top-[3.3rem] xl:h-[1.757rem]"
          />
          <span className="relative">Web Developer</span>
        </span>
        <br />
        based in Canada
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={paragraphAnimationVariants2}
        className="w-full max-w-[32rem] pb-5 pt-[0.87rem] text-xs font-normal not-italic leading-[1.1625rem] text-white500 dark:text-white800 xl:pb-9 xl:pt-[0.63rem] xl:text-[1.125rem] xl:leading-[1.8rem]"
      >
        Transforming the web one line of code at a time: Crafting cutting-edge
        digital experiences with precision, passion, and a profound commitment
        to excellence
      </motion.p>
    </>
  );
};

export default HeroTexts;
