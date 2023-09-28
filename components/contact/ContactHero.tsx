"use client";

import { motion } from "framer-motion";

import { paragraphVariants, headingVariants } from "@/utils";

const ContactHero = () => {
  return (
    <section className="bg-white800 px-6 py-12 dark:bg-black300">
      <div className="flex flex-col items-center gap-6 text-center md:gap-[3.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-5 md:gap-8">
          <motion.h1
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            className="mobileHeading1 dark:text-white900 md:text-[4rem] md:leading-[5.2rem] md:tracking-[-0.04rem]"
          >
            <span className="relative inline-block">
              <span className="absolute top-[1.88rem] h-[1.1875rem] w-full shrink-0 bg-accentSecondary md:top-[3.3rem] md:h-[1.757rem]" />
              <span className="relative">Get in Touch</span>
            </span>
          </motion.h1>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
            className="smallRegular max-w-[21.125rem] text-white500 dark:text-white800 md:max-w-[44rem] md:text-[1.25rem] md:leading-[1.875rem]"
          >
            {`Let's Collaborate on Your Next Project`}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
