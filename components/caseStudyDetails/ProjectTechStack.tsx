"use client";

import { motion } from "framer-motion";

import CaseStudyDetailSkill from "./CaseStudyDetailSkill";
import { generateFadeInAnimationVariants } from "@/utils";
import CaseStudiesDetailHeadings from "./CaseStudiesDetailHeadings";

const ProjectTechStack = ({
  projectDetail,
}: {
  projectDetail: {
    techStack: React.FC<{
      isCaseDetailPage: boolean;
    }>[];
  };
}) => {
  const fadeInAnimationVariants = generateFadeInAnimationVariants(0.05);

  return (
    <div className="flex flex-col gap-6 py-[2.62rem] sm:gap-[2.75rem] xl:py-[4.5rem]">
      <div className="flex flex-col gap-6">
        <CaseStudiesDetailHeadings
          smallText="Technologies used"
          headingText="Tech Stack"
        />
      </div>
      <div className="flex flex-row flex-wrap gap-x-5 gap-y-[2.06rem] xl:grid xl:grid-cols-7 xl:gap-x-[2.32rem] xl:gap-y-[2.1rem]">
        {projectDetail?.techStack.map((tech, index) => (
          <motion.li
            className="list-none"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.1 }}
            key={tech.name}
          >
            <CaseStudyDetailSkill Tech={tech} key={tech.name} />
          </motion.li>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;
