"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "./icons";
import Image from "next/image";
import { stars, adrian, test, test2 } from "@/public";

const testimonialsData = [
  {
    name: "— Adrian Hajdin",
    testimonial:
      "I have had the pleasure of working with Adrian as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. ",
    title: "Founder & CEO at JS Mastery",
    picture: adrian,
  },
  // NOTE - Add real people testimonial data
  {
    name: "- Jane Smith",
    testimonial: "I love the design and functionality of this website.",
    title: "Full-stack developer",
    picture: test,
  },
  {
    name: "- Test",
    testimonial: "Test Test Test Test",
    title: "Software developer",
    picture: test2,
  },
];

const Testimonials = () => {
  const [testimonialsIndex, setTestimonialsIndex] = useState<number>(0);

  const handleArrowNextButton = () => {
    setTestimonialsIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : ++prevIndex
    );
  };

  const handleArrowPreviousButton = () => {
    setTestimonialsIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : --prevIndex
    );
  };

  return (
    <div className="bg-white800 dark:bg-black300">
      <section className="flex flex-col px-6 py-12 xl:gap-[4.5rem] xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <h1 className="mySkills relative dark:text-white900 xl:text-[3rem] xl:tracking-[-0.03rem]">
          {"What "}
          <span className="relative inline-block">
            <span className="absolute top-[1.6rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
            <span className="relative">they say</span>
          </span>
          <br className="block sm:hidden" /> about me
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[1.62rem]">
          <Button
            radius="full"
            className="testimonialButton hidden dark:border-black300 dark:bg-black200 lg:flex xl:h-14 xl:w-14"
            isIconOnly
            aria-label="Testimonial previous"
            onClick={handleArrowPreviousButton}
          >
            <ArrowLeftIcon />
          </Button>
          <div className="mt-9 flex flex-row justify-between xl:mt-0">
            <Image
              src={testimonialsData[testimonialsIndex].picture}
              className="rounded-[1rem] xl:h-[328px] xl:w-[328px]"
              width={200}
              height={200}
              alt="Testimonial"
            />
            <div className="flex flex-row gap-4 md:items-center md:gap-96">
              <Button
                radius="full"
                className="testimonialButton dark:border-black300 dark:bg-black200 lg:hidden"
                isIconOnly
                aria-label="Testimonial previous"
                onClick={handleArrowPreviousButton}
              >
                <ArrowLeftIcon />
              </Button>
              <Button
                radius="full"
                className="testimonialButton dark:border-black300 dark:bg-black200 lg:hidden"
                isIconOnly
                aria-label="Testimonial Next"
                onClick={handleArrowNextButton}
              >
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <Image
              className="mt-10 xl:mt-0"
              src={stars}
              width={116}
              height={20}
              alt="Testimonials stars"
            />
            <p className="bodyRegular mt-4 text-white500 dark:text-white800 xl:mt-6 xl:text-[1.5rem]">
              {testimonialsData[testimonialsIndex].testimonial}
            </p>
            <p className="bodyBold mt-6 text-black300 dark:text-white800 xl:mt-8">
              {testimonialsData[testimonialsIndex].name}
            </p>
            <p className="bodyRegular mt-1 text-white500 dark:text-white800">
              {testimonialsData[testimonialsIndex].title}
            </p>
          </div>
          <Button
            radius="full"
            className="testimonialButton hidden dark:border-black300 dark:bg-black200 lg:flex xl:h-14 xl:w-14"
            isIconOnly
            aria-label="Testimonial Next"
            onClick={handleArrowNextButton}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
