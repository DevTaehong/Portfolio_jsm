"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { jobs } from "@/constants";

type CompanyProps = {
  CompanyLogo: React.FC<{ isHovered: boolean }>;
  index: number;
};

const Company = ({ CompanyLogo, index }: CompanyProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHovered = (index: number) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <motion.div
      transition={{ type: "spring" }}
      whileHover={{ x: 30 }}
      className="job flex flex-col justify-center gap-[1.12rem] pl-9 dark:bg-black200 sm:w-[37.9375rem] xl:h-[7.625rem]
    xl:flex-row xl:items-center xl:justify-start xl:border xl:border-white800 xl:pl-8 xl:shadow-none xl:hover:border-none xl:hover:shadow-jobCardHover dark:xl:border-black200 dark:xl:hover:bg-black300"
      onMouseEnter={() => handleCardHovered(index)}
      onMouseLeave={handleCardLeave}
    >
      <CompanyLogo isHovered={hoveredCard === index} />
      <div className="flex flex-col gap-[0.56rem] ">
        <h3 className="baseBold text-black200 dark:text-white900">
          {jobs[index].company}
        </h3>
        <p className="smallRegular text-white500 dark:text-white800">
          {jobs[index].description}
        </p>
      </div>
    </motion.div>
  );
};

export default Company;
