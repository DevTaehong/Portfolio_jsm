"use client";

import { motion } from "framer-motion";

import {
  HTMLIcon,
  ExpressIcon,
  FramerMotionIcon,
  GitHubIcon,
  JSIcon,
  MongoDBIcon,
  MUIIcon,
  NextJSIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
  SASSIcon,
  CSSIcon,
  GitIcon,
} from "@/components/skillIcons";

const skillIcons = [
  JSIcon,
  ReactIcon,
  ReduxIcon,
  NextJSIcon,
  TypeScriptIcon,
  HTMLIcon,
  CSSIcon,
  SASSIcon,
  MUIIcon,
  TailwindIcon,
  FramerMotionIcon,
  GitIcon,
  GitHubIcon,
  NodeIcon,
  ExpressIcon,
  MongoDBIcon,
];

const MySkills = () => {
  return (
    <div className="bg-white900 py-12 dark:bg-black200">
      <section className="flex flex-col items-center gap-10  xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <span className="relative inline-block">
          <span className="absolute top-[1.6rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
          <h1 className="mySkills relative dark:text-white900 xl:text-[3rem] xl:tracking-[-0.03rem]">
            My Skills
          </h1>
        </span>
        <div className="grid grid-cols-4 gap-[2.59rem] md:flex md:flex-wrap md:justify-center lg:gap-[4rem] xl:gap-[2.73rem]">
          {skillIcons.map((Skill) => (
            <motion.div whileHover={{ scale: 1.1 }} key={Skill.name}>
              <Skill />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MySkills;
