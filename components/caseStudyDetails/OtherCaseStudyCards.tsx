"use client";

import { motion } from "framer-motion";

import { projectDetails } from "@/constants";
import { generateFadeInAnimationVariants } from "@/utils";
import CaseStudyCard from "./CaseStudyCard";

const OtherCaseStudyCards = ({ project }: { project: string }) => {
  const otherProjects = Object.keys(projectDetails).filter(
    (key) => key !== project
  );

  const fadeInAnimationVariants = generateFadeInAnimationVariants(0.5);

  return (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
      {otherProjects.map((otherProject, index) => (
        <motion.li
          className="list-none"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          key={otherProject}
        >
          <CaseStudyCard otherProject={otherProject} />
        </motion.li>
      ))}
    </div>
  );
};

export default OtherCaseStudyCards;
