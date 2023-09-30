"use client";

import { motion } from "framer-motion";

import { paragraphAnimationVariants, headingAnimationVariants } from "@/utils";

const CaseStudiesDetailHeadings = ({
  smallText,
  headingText,
}: {
  smallText: string;
  headingText: string;
}) => {
  return (
    <div className="flex flex-col gap-[0.56rem] sm:gap-[0.62rem]">
      <motion.p
        variants={paragraphAnimationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 2 }}
        viewport={{ once: true }}
        className="technologiesUsed dark:text-primaryDark sm:text-[0.875rem] sm:leading-[1.26875rem]"
      >
        {smallText}
      </motion.p>
      <motion.h6
        variants={headingAnimationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 2 }}
        viewport={{ once: true }}
        className="caseStudyDetailTechStack dark:text-white900 sm:text-[2rem] sm:leading-[2.1rem]"
      >
        {headingText}
      </motion.h6>
    </div>
  );
};

export default CaseStudiesDetailHeadings;
