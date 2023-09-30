"use client";

import { motion } from "framer-motion";

import { myProcess, myProcessText } from "@/constants";
import { generateFadeInAnimationVariants } from "@/utils";
import ProcessIcons from "./ProcessIcons";

const MyProcessIcons = () => {
  const fadeInAnimationVariants = generateFadeInAnimationVariants(0.2);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-x-[3.12rem] gap-y-[1.88rem] sm:justify-between">
      {myProcess.map((process, index) => (
        <motion.li
          className="list-none"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          whileHover={{ scale: 1.1 }}
          key={process.name}
        >
          <ProcessIcons
            Process={process}
            myProcessText={myProcessText[index]}
          />
        </motion.li>
      ))}
    </div>
  );
};

export default MyProcessIcons;
