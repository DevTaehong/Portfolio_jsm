"use client";

import { Card } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";

import { LineDecoration, companies } from "./icons";

const jobs = [
  {
    company: "Slack",
    description: "Product Design - 4 Years Experience",
  },
  {
    company: "Firefox",
    description: "Sr. UI Design - 4 Years Experience",
  },
  {
    company: "Digital Ocean",
    description: "UI & Motion Designer - 4 Years Experience",
  },
  {
    company: "Mailchimp",
    description: "UI Designer - 4 Years Experience",
  },
];

const WorkExperience = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHovered = (index: number) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div className="bg-white900 dark:bg-black200">
      <section
        className="flex flex-col justify-center gap-4 px-6 py-12 xl:flex-row xl:gap-[1.63rem] xl:px-[5.31rem] 
          xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]"
      >
        <Card
          className="mainWorkExperienceCard flex flex-none grow flex-col justify-center gap-[0.86rem] dark:bg-white800 
            xl:w-[37.9375rem] xl:pb-[6.56rem] xl:pl-[6.56rem] xl:pr-[8.94rem] xl:pt-[9.5rem]"
        >
          <div className="flex flex-col gap-[1.49rem]">
            <h2 className="ExperienceCardHeader dark:text-black200 xl:text-[3rem] xl:tracking-[-0.03rem]">
              Work
              <span className="relative inline-block">
                <span className="absolute top-[1.9rem] h-[0.93256rem] w-[9.75rem] shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
                <h1 className="relative ">Experience</h1>
              </span>
            </h2>
            <div className="smallRegular leading-[1.8rem] text-white800 dark:text-white500 xl:text-[1.125rem]">
              Progress and milestones: A simple walkthrough of roles, projects,
              and achievements in my career.
            </div>
          </div>
          <LineDecoration />
        </Card>
        <div className="grid w-full grow grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[2.19rem] xl:mr-[1.87rem] xl:w-[37.9375rem] xl:grid-cols-1">
          {companies.map((CompanyLogo, index) => (
            <motion.div
              key={CompanyLogo.name}
              transition={{ type: "spring" }}
              whileHover={{ x: 30 }}
            >
              <div
                className="job flex flex-col justify-center gap-[1.12rem] pl-9 dark:bg-black200 xl:h-[7.625rem] 
                xl:flex-row xl:items-center xl:justify-start xl:border xl:border-white800 xl:pl-8 xl:shadow-none xl:hover:border-none xl:hover:shadow-jobCardHover dark:xl:border-black200 dark:xl:hover:bg-black300"
                onMouseEnter={() => handleCardHovered(index)}
                onMouseLeave={handleCardLeave}
              >
                <CompanyLogo isHovered={hoveredCard === index} />
                <div className="flex flex-col gap-[0.56rem] ">
                  <h3 className="baseBold text-black200 dark:text-white900">
                    {jobs[index].company}
                  </h3>
                  <p className="smallRegular text-white500 dark:text-white800">
                    {jobs[index].description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
