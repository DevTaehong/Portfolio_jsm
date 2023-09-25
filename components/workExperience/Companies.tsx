"use client";

import { motion } from "framer-motion";

import { companies } from "@/constants";
import Company from "./Company";

const Companies = () => {
  return (
    <>
      {companies.map((CompanyLogo, index) => (
        <motion.li
          className="list-none"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          key={CompanyLogo.name}
        >
          <Company CompanyLogo={CompanyLogo} index={index} />
        </motion.li>
      ))}
    </>
  );
};

export default Companies;
