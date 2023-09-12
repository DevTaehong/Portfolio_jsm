"use client";

import { Card, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";

import { serviceIcons } from "@/components/icons";
import { services } from "@/constants";

const ServiceCard = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHovered = (index: number) => {
    setHoveredCard(index);
  };
  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      {serviceIcons.map((ServiceIcon, index) => (
        <motion.div
          key={services[index].service}
          transition={{ type: "spring" }}
          whileHover={{ y: 71 }}
        >
          <Card
            className="serviceCard flex flex-col gap-9 pb-[1.88rem] pl-[1.56rem] pr-[1.83rem] pt-[1.87rem] dark:bg-black300 
              dark:shadow-darkServiceCard dark:hover:bg-primaryDark dark:hover:shadow-darkServiceCardHover"
            onMouseEnter={() => handleCardHovered(index)}
            onMouseLeave={handleCardLeave}
          >
            <CardHeader
              className={`serviceIcon flex items-center justify-center bg-primaryLight dark:bg-primaryDark ${
                hoveredCard === index && "bg-white900 dark:bg-white900"
              }`}
            >
              <ServiceIcon isHovered={hoveredCard === index} />
            </CardHeader>
            <div className="flex flex-col gap-[0.63rem]">
              <p
                className={`baseBold text-black200 dark:text-white900 ${
                  hoveredCard === index && "text-white900"
                }`}
              >
                {services[index].service}
              </p>
              <p
                className={`smallRegular w-[14.5625rem] text-white500 dark:text-white800 ${
                  hoveredCard === index && "text-white900"
                }`}
              >
                {services[index].description}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </>
  );
};

export default ServiceCard;
