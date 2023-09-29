"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/svg/testimonial";
import { stars } from "@/public";
import { testimonialAnimationVariants } from "@/utils";
import { TestimonialType } from "@/types";

const Testimonial = ({
  testimonialsData,
}: {
  testimonialsData: TestimonialType;
}) => {
  const [testimonialsIndex, setTestimonialsIndex] = useState<number>(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleArrowNextButton = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(1);
      setTestimonialsIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  const handleArrowPreviousButton = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(-1);
      setTestimonialsIndex((prevIndex) =>
        prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(animationTimeout);
  }, [testimonialsIndex]);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="testimonialButton hidden rounded-full dark:border-black300 dark:bg-black200 lg:flex xl:h-14 xl:w-14"
        aria-label="Testimonial previous"
        onClick={handleArrowPreviousButton}
      >
        <ArrowLeftIcon />
      </motion.button>
      <div className="mt-9 flex flex-row justify-between xl:mt-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            variants={testimonialAnimationVariants}
            whileInView="animate"
            viewport={{ once: true }}
            initial="initial"
            exit="exit"
            key={testimonialsData[testimonialsIndex].name}
            custom={direction}
          >
            <Image
              src={testimonialsData[testimonialsIndex].image.url}
              className="rounded-[1rem] xl:h-[20.5rem] xl:w-[20.5rem]"
              width={200}
              height={200}
              alt="Testimonial"
            />
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-row gap-4 md:items-center md:gap-96">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="testimonialButton inline-flex dark:border-black300 dark:bg-black200 lg:hidden"
            aria-label="Testimonial previous"
            onClick={handleArrowPreviousButton}
          >
            <ArrowLeftIcon />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="testimonialButton inline-flex dark:border-black300 dark:bg-black200 lg:hidden"
            aria-label="Testimonial Next"
            onClick={handleArrowNextButton}
          >
            <ArrowRightIcon />
          </motion.button>
        </div>
      </div>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          variants={testimonialAnimationVariants}
          whileInView="animate"
          viewport={{ once: true }}
          initial="initial"
          exit="exit"
          key={testimonialsData[testimonialsIndex].name}
          className="flex flex-1 flex-col"
          custom={direction}
        >
          <Image
            className="mt-10 xl:mt-0"
            src={stars}
            width={116}
            height={20}
            alt="Testimonials stars"
          />
          <p className="bodyRegular mt-4 text-white500 dark:text-white800 xl:mt-6 xl:text-[1.5rem] xl:leading-[1.95rem]">
            {testimonialsData[testimonialsIndex].testimonial}
          </p>
          <p className="bodyBold mt-6 text-black300 dark:text-white800 xl:mt-8">
            {testimonialsData[testimonialsIndex].name}
          </p>
          <p className="bodyRegular mt-1 text-white500 dark:text-white800">
            {testimonialsData[testimonialsIndex].title}
          </p>
        </motion.div>
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="testimonialButton hidden dark:border-black300 dark:bg-black200 lg:flex xl:h-14 xl:w-14"
        aria-label="Testimonial Next"
        onClick={handleArrowNextButton}
      >
        <ArrowRightIcon />
      </motion.button>
    </>
  );
};

export default Testimonial;
