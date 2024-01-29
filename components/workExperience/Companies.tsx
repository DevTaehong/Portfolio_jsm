"use client";

import { motion } from "framer-motion";

import Company from "./Company";
import { ExperienceType } from "@/types";
import { sortedExperience } from "@/constants";

const Companies = ({ experience }: { experience: ExperienceType[] }) => {
  experience.sort(
    (a, b) => sortedExperience[a.description] - sortedExperience[b.description]
  );

  return (
    <>
      {experience.map((company) => (
        <motion.li
          className="list-none"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          key={company._id}
        >
          <Company company={company} />
        </motion.li>
      ))}
    </>
  );
};

export default Companies;
