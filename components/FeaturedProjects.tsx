"use client";

import { Card } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

import { morrent, jobit, hipnode, arrow } from "@/public";

const projects = [
  {
    name: "Morrent",
    description: `A Car Rental Application`,
    techStack: ["ReactJS, Next.js", "Tailwind, MongoDB"],
    image: morrent,
    color: "bg-morrent",
  },
  {
    name: "JobIT",
    description: "A Job Finding Application",
    techStack: ["ReactJS, Next.js", "Redux Toolkit, Tailwind"],
    image: jobit,
    color: "bg-jobit",
  },
  {
    name: "Hipnode",
    description: "A Social Media Application",
    techStack: ["ReactJS, Next.js", "Node.js, MongoDB"],
    image: hipnode,
    color: "bg-hipnode",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="bg-white900 dark:bg-black200">
      <section className="flex flex-col gap-9 px-6 py-12 lg:gap-12 lg:px-[5.31rem] lg:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <h1 className="mySkills relative dark:text-white900 xl:text-[3rem] xl:tracking-[-0.03rem]">
          {"Featured "}
          <span className="relative inline-block">
            <span className="absolute top-[1.6rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
            <span className="relative">Projects</span>
          </span>
        </h1>
        {projects.map((project, index) => (
          <Card
            key={project.name}
            className={`${
              project.color
            } flex flex-col justify-center pb-[2.99rem] pt-[2.88rem] 
              xl:pb-[5.81rem] xl:pt-[6.06rem] ${
                (index + 1) % 2 === 0 ? "xl:pr-[4.38rem]" : "xl:pl-[6.75rem]"
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
                    <div className="smallRegular techStack flex items-start text-white900">
                      {project.techStack[0]}
                    </div>
                    <div className="smallRegular techStack flex items-start text-white900">
                      {project.techStack[1]}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/case-studies/${project.name}`}
                  className="bodyBold inline-flex gap-[0.47rem] text-white900"
                >
                  See Detail Project
                  <Image
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
        ))}
        <div className="flex justify-center">
          <Link
            href="/case-studies"
            className="seeMoreCaseStudies dark:bg-primaryDark"
          >
            See more case studies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProjects;
