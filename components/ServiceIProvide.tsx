"use client";

import { Card, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";

import { serviceIcons } from "@/components/icons";

const ServiceIProvide = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHovered = (index: number) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const services = [
    {
      service: "Analytics & SEO",
      description:
        "Implement tracking & analytics tools to monitor website performance & improve SEO.",
    },
    {
      service: "Front-End Dev",
      description:
        "Front-end dev includes creating the user interface and interactive elements of websites and apps.",
    },
    {
      service: "Back-End Dev",
      description:
        "Back-end includes building the server-side functionality that powers websites & applications.",
    },
    {
      service: "Web Optimization",
      description:
        "Web optimization focuses on improving website performance for a smoother user experience",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-10 bg-white900 py-12 dark:bg-black300 sm:bg-white800 xl:px-[5.31rem] xl:pb-[8.9375rem] xl:pt-[4.5rem]">
      <h1 className="mySkills relative dark:text-white900 xl:text-[3rem] xl:tracking-[-0.03rem]">
        {"What "}
        <span className="relative inline-block">
          <span className="absolute top-[1.6rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
          <span className="relative">service</span>
        </span>
        <br className="block sm:hidden" /> do I provide
      </h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid xl:grid-cols-4 xl:gap-[2.51rem]">
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
      </div>
    </section>
  );
};

export default ServiceIProvide;
