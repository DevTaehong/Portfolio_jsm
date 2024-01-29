"use client";

import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { ExperienceType } from "@/types";
import { useHover } from "@/context/HoverContext";
import CompanyLogo from "./CompanyLogo";

const Company = ({ company }: { company: ExperienceType }) => {
  const isBiggerThan1280 = useMediaQuery("(min-width: 1280px)");
  const { hoveredCompany } = useHover();
  const hasTheBarMoved = hoveredCompany === company.name;

  return (
    <motion.div
      transition={{ type: "spring" }}
      initial={{ x: 0 }}
      animate={{
        x: isBiggerThan1280 && hasTheBarMoved ? 30 : 0,
      }}
      className={twMerge(
        `job flex flex-col 
        justify-center gap-[1.12rem] px-9 dark:bg-black200 xl:h-[7.625rem] xl:flex-row
        xl:items-center xl:justify-start xl:border xl:border-white800 xl:pl-8  
      dark:xl:border-black200 2xl:w-[37.9375rem]`,
        hasTheBarMoved
          ? "border-none shadow-jobCardHover dark:bg-black300"
          : "xl:shadow-none"
      )}
    >
      <CompanyLogo company={company} hasTheBarMoved={hasTheBarMoved} />
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
