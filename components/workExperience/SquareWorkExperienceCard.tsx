"use client";

import { motion } from "framer-motion";
import { Card } from "@nextui-org/card";

import LineDecoration from "../svg/workExperience/LineDecoration";

const SquareWorkExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Card
        className="mainWorkExperienceCard flex flex-none grow flex-col justify-center gap-[0.86rem] 
          px-[2.38rem] pb-[2.39rem] pt-[3.68rem] dark:bg-black300
          dark:shadow-darkExperienceCard sm:max-w-[37.9375rem] sm:gap-[4.25rem] sm:px-14 
          sm:py-20 xl:min-h-[37.0625rem]"
      >
        <div className="flex flex-col gap-[1.62rem]">
          <h2 className="ExperienceCardHeader dark:text-white900 xl:text-[3rem] xl:leading-[3.45rem] xl:tracking-[-0.03rem]">
            Work{" "}
            <span className="relative inline-block">
              <span className="absolute top-[1.8325rem] h-[0.93256rem] w-[9.75rem] shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
              <h1 className="relative ">Experience</h1>
            </span>
          </h2>
          <div className="flex flex-col gap-4">
            <p className="smallRegular leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
              Take a trip through my career, where {`I've`} not only paved the
              way but also reached important goals, taken on different{" "}
              <span className="font-semibold text-primaryLight dark:text-primaryDark">
                roles
              </span>
              , worked on impressive{" "}
              <span className="font-semibold text-primaryLight dark:text-primaryDark">
                projects
              </span>
              , and accomplished notable things.
            </p>
            <p className="smallRegular leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
              From coding in the late hours to collaborating with talented
              teams, my career has been a dynamic adventure filled with{" "}
              <span className="font-semibold text-primaryLight dark:text-primaryDark">
                growth{" "}
              </span>
              and{" "}
              <span className="font-semibold text-primaryLight dark:text-primaryDark">
                innovation
              </span>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.06rem]">
          {/* // NOTE - Add it after making the slider  */}
          {/* <p className="smallRegular text-white500 dark:text-white800">
            👉 Slide the bar to reveal details of my web experience.
          </p> */}
          <div className="w-[16.8125rem] sm:w-[29.375rem]">
            <LineDecoration />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SquareWorkExperienceCard;
