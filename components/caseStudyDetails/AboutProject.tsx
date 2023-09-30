"use client";

import { motion } from "framer-motion";

import { CaseStudiesDetailType } from "@/types";
import { paragraphAnimationVariants } from "@/utils";

const AboutProject = ({ project }: { project: CaseStudiesDetailType }) => {
  return (
    <section className="bg-white800 dark:bg-black300">
      <motion.p
        variants={paragraphAnimationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="smallRegular whitespace-pre-line px-6 py-9 text-white500 dark:text-white800 sm:text-[1.25rem] sm:leading-[1.875rem] xl:px-[17.5rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]"
      >
        {project?.detail}
      </motion.p>
    </section>
  );
};

export default AboutProject;
