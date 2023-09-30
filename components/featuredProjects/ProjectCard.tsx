"use client";

import { Card } from "@nextui-org/card";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import ProjectCardContent from "./ProjectCardContent";
import { FeaturedProjectsType } from "@/types";

const ProjectCard = ({
  project,
  index,
}: {
  project: FeaturedProjectsType;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // NOTE - "0 1": '1' means when the end of viewpoint(=container) crosses the start ('0') of the target, the animation starts
    // "1.33 1": '1' means when the end of viewpoint(=container) has gone 33% beyond the end of target, the animation ends
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const colorVariants: { [key: string]: string } = {
    morent: "bg-morentDark",
    jobit: "bg-jobit",
    hipnode: "bg-hipnode",
    filmpire: "bg-filmpire",
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <Card
        className={`${
          colorVariants[project.name.toLowerCase()]
        } flex flex-col justify-center rounded-[1.25rem] pb-[2.99rem] pt-[2.88rem] 
                  xl:pb-[5.81rem] xl:pt-[6.06rem] ${
                    (index + 1) % 2 === 0
                      ? "xl:pr-[4.38rem]"
                      : "xl:pl-[6.75rem]"
                  }`}
      >
        <ProjectCardContent project={project} index={index} />
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
