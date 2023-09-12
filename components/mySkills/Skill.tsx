"use client";

import { motion } from "framer-motion";

import { techSkills } from "../icons";

const Skill = () => {
  return (
    <>
      {techSkills.map((Skill) => (
        <motion.div whileHover={{ scale: 1.1 }} key={Skill.name}>
          <Skill />
        </motion.div>
      ))}
    </>
  );
};

export default Skill;
