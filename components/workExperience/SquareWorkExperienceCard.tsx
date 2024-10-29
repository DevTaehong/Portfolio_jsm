"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@nextui-org/card";

import LineDecoration from "../svg/workExperience/LineDecoration";
import { useHover } from "@/context/HoverContext";
import DefaultDetail from "./DefaultDetail";
import KoiiNetworkDetail from "./KoiiNetworkDetail";
import NSCCDetail from "./NSCCDetail";

const SquareWorkExperienceCard = () => {
  const { hoveredCompany } = useHover();

  const details: { [key: string]: JSX.Element } = {
    "": <DefaultDetail />,
    "Koii network": <KoiiNetworkDetail />,
    "Nova Scotia Community College": <NSCCDetail />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Card
        className="mainWorkExperienceCard flex flex-none grow flex-col justify-between  
          gap-4 px-[2.38rem] pb-[2.39rem] pt-[3.68rem]
          dark:bg-black300 dark:shadow-darkExperienceCard sm:max-w-[37.9375rem] 
          sm:px-14 sm:py-20 xl:h-[37.0625rem]"
      >
        <AnimatePresence mode="wait">{details[hoveredCompany]}</AnimatePresence>
        <div className="flex flex-col sm:gap-[1.06rem]">
          <p className="smallRegular text-white500 dark:text-white800">
            👉 Slide the bar to reveal details of my experience.
          </p>
          <div className="w-[16.8125rem] sm:w-[29.375rem]">
            <LineDecoration />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SquareWorkExperienceCard;
