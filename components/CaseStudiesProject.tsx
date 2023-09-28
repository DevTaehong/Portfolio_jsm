"use client";

import { motion } from "framer-motion";
import { Card } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

import { colorVariants } from "@/constants";

const CaseStudiesProject = ({
  project,
}: {
  project: { name: string; description: string; image: string };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
      className="max-w-[21.5625rem] lg:max-w-[34.375rem]"
    >
      <motion.div whileHover={{ scale: 1.1 }}>
        <Card
          as={Link}
          href={`/case-studies/${project.name.toLowerCase()}`}
          className={`${
            colorVariants[project.name.toLowerCase()]
          } items-center rounded-[0.62725rem] px-[1.54rem] pt-[2.73rem] transition-none xl:rounded-2xl xl:px-[3.75rem] xl:pt-[4.35rem]`}
        >
          <Tilt transitionSpeed={2500} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <Image
              className="lg:h-[15.8rem] lg:w-[26.8rem]"
              src={project.image}
              alt={project.description}
            />
          </Tilt>
        </Card>
      </motion.div>
      <div className="ml-[2.08rem] flex flex-col xl:ml-[3.8rem]">
        <Link
          href={`/case-studies/${project.name.toLowerCase()}`}
          className="paragraphBold mt-[1.3rem] text-black200 hover:opacity-80 hover:transition-opacity dark:text-white900 xl:mt-[2.04rem] xl:text-[2rem] xl:leading-[2.1rem] xl:tracking-[-0.01rem]"
        >
          {project.name}
        </Link>
        <p className="smallRegular mt-[0.39rem] text-white500 xl:mt-[0.62rem] xl:text-[1.25rem] xl:leading-[1.875rem]">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default CaseStudiesProject;
