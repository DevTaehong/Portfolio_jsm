"use client";

import { motion } from "framer-motion";
import { paragraphAnimationVariants2 } from "@/utils";

import Image from "next/image";

import { projectDetails } from "@/constants";
import CaseStudiesDetailHeadings from "./CaseStudiesDetailHeadings";

const ProblemStatement = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];
  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col gap-6 px-6 py-9 xl:px-[17.5rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-6">
          <CaseStudiesDetailHeadings
            smallText="Problem"
            headingText="Problem Statement"
          />
        </div>
        <motion.p
          variants={paragraphAnimationVariants2}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 2 }}
          viewport={{ once: true }}
          className="smallRegular whitespace-pre-line text-white500 sm:text-[1.25rem] sm:leading-[1.875rem]"
        >
          {projectDetail?.problemStatement}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            className="sm:h-full sm:w-full"
            src={projectDetail?.problemStatementImage}
            alt="Problem Statement Image"
            width={348}
            height={363.836}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
