"use client";

import { motion } from "framer-motion";

import { techSkills } from "@/constants";
import { generateFadeInAnimationVariants } from "@/utils";

const Skill = () => {
  const fadeInAnimationVariants = generateFadeInAnimationVariants(0.05);

  return (
    <>
      {techSkills.map((Skill, index) => (
        <motion.li
          className="list-none"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          whileHover={{ scale: 1.1 }}
          key={Skill.name}
        >
          <Skill />
        </motion.li>
      ))}
    </>
  );
};

export default Skill;
