"use client";

import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { arrow } from "@/public";

type ProjectProps = {
  name: string;
  description: string;
  techStack: string[];
  image: string;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectProps;
  index: number;
}) => {
  const colorVariants: { [key: string]: string } = {
    morrent: "bg-morrentDark",
    jobit: "bg-jobit",
    hipnode: "bg-hipnode",
  };
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // NOTE - "0 1": '1' means when the end of viewpoint(=container) crosses the start ('0') of the target, the animation starts
    // "1.33 1": '1' means when the end of viewpoint(=container) has gone 33% beyond the end of target, the animation ends
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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
        <div
          className={`flex flex-col gap-6  ${
            (index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div
            className={`flex flex-col gap-[1.88rem] xl:gap-[3.13rem] ${
              (index + 1) % 2 === 0 && "sm:pl-0 sm:pr-6 xl:pr-0"
            } pl-6 xl:pl-0`}
          >
            <div className="flex flex-col gap-[1.88rem] xl:gap-[1.44rem]">
              <h2 className="projectName xl:max-w-[31.1875rem] xl:text-[3rem] xl:tracking-[-0.03rem]">
                {project.name} {" - "} <br className="block xl:hidden" />
                {project.description}
              </h2>
              <div className="flex flex-row gap-1 truncate xl:gap-5">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="smallRegular techStack flex items-start text-white900"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={`/case-studies/${project.name.toLowerCase()}`}
              className="bodyBold group inline-flex gap-[0.47rem] text-white900"
            >
              See Detail Project
              <Image
                className="transition group-hover:translate-x-[0.47rem]"
                src={arrow}
                alt="See Detail Project Arrow"
                width={35}
                height={0}
              />
            </Link>
          </div>
          <div
            className={`flex justify-center xl:absolute xl:inset-0 xl:mb-[3.31rem] xl:mt-[3.87rem] xl:overflow-hidden
                      ${
                        (index + 1) % 2 === 0
                          ? "xl:mr-[40.32rem]"
                          : "xl:ml-[37.27rem]"
                      }`}
          >
            <Image
              className={`sm:h-full sm:w-full xl:h-[20.56731rem] ${
                (index + 1) % 2 === 0
                  ? "xl:translate-x-[-3.72rem]"
                  : "xl:translate-x-[1.17rem]"
              } `}
              src={project.image}
              width={320}
              height={155}
              alt={`Project ${project.name}`}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
