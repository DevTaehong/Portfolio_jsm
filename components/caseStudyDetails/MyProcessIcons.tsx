"use client";

import { motion } from "framer-motion";

import { myProcess } from "@/constants";
import { generateFadeInAnimationVariants } from "@/utils";

const MyProcessIcons = () => {
  const fadeInAnimationVariants = generateFadeInAnimationVariants(0.2);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-[3.12rem] gap-y-[1.88rem] sm:justify-between">
      {myProcess.map((Process, index) => (
        <motion.li
          className="list-none"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          whileHover={{ scale: 1.1 }}
          key={Process.name}
        >
          <ProcessIcons Process={Process} />
        </motion.li>
      ))}
    </div>
  );
};

const ProcessIcons = ({ Process }: { Process: React.FC }) => {
  return (
    <div
      key={Process.name}
      className="flex flex-col items-center gap-[0.88rem]"
    >
      <Process />
      <p className="smallBold text-black300 dark:text-white900 sm:text-[1.25rem] sm:leading-[1.625rem]">
        {Process.name}
      </p>
    </div>
  );
};

export default MyProcessIcons;
