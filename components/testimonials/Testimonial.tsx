"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/svg/testimonial";
import { stars } from "@/public";
import { testimonialsData } from "@/constants";

const Testimonial = () => {
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
    <>
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
    </>
  );
};

export default Testimonial;
