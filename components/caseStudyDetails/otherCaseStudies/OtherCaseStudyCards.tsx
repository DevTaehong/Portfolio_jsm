"use client";

import { motion } from "framer-motion";

import { generateFadeInAnimationVariants } from "@/utils";
import CaseStudyCard from "./CaseStudyCard";
import { CaseStudiesDetailType } from "@/types";
import { useEffect, useState } from "react";

const OtherCaseStudyCards = ({
  projects,
  projectParam,
}: {
  projects: CaseStudiesDetailType[];
  projectParam: string;
}) => {
  const [isClient, setIsClient] = useState(false);
  const fadeInAnimationVariants = generateFadeInAnimationVariants(0.5);
  const otherProjects = projects.filter(
    (project) => project.name.toLowerCase() !== projectParam
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  isClient && otherProjects.sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
      {otherProjects.slice(0, 2).map((otherProjects, index) => (
        <motion.li
          className="list-none"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          key={otherProjects.name}
        >
          <CaseStudyCard otherProjects={otherProjects} />
        </motion.li>
      ))}
    </div>
  );
};

export default OtherCaseStudyCards;
