"use client";

import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

import { ExperienceType } from "@/types";
import CompanyLogo from "./CompanyLogo";

const Company = ({ company }: { company: ExperienceType }) => {
  const isBiggerThan1280 = useMediaQuery("(min-width: 1280px)");
  return (
    <motion.div
      transition={{ type: "spring" }}
      whileHover={isBiggerThan1280 ? { x: 30 } : undefined}
      className="job group flex flex-col justify-center gap-[1.12rem] px-9 dark:bg-black200 xl:h-[7.625rem] xl:flex-row
        xl:items-center xl:justify-start xl:border xl:border-white800 xl:pl-8 xl:shadow-none xl:hover:border-none 
        xl:hover:shadow-jobCardHover dark:xl:border-black200 dark:xl:hover:bg-black300 2xl:w-[37.9375rem]"
    >
      <CompanyLogo company={company} />
      <div className="flex flex-col gap-[0.56rem]">
        <h3 className="baseBold line-clamp-1 text-black200 dark:text-white900">
          {company.name}
        </h3>
        <p className="smallRegular text-white500 dark:text-white800">
          {company.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Company;
