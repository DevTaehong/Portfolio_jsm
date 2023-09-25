"use client";

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import Image from "next/image";

import { contactIcon } from "@/public";

import { paragraphVariants3 } from "@/utils";

const HeroLinks = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={paragraphVariants3}
      className="gap-[1.13rem] xl:flex xl:max-w-[32rem] xl:flex-row xl:items-baseline"
    >
      <Link
        rel="noreferrer"
        href="#featuredProjects"
        className="primaryButton primaryButtonText dark:bg-primaryDark xl:h-[4.3rem] xl:max-w-[11.625rem] xl:px-3 xl:py-5 xl:text-[1.125rem] xl:leading-[1.8rem]"
      >
        My Work
      </Link>
      <Link
        href="mailto:minth1123@icloud.com"
        className="contactButton contactButtonText mb-[1.69rem] mt-[0.88rem] dark:bg-black200 dark:text-white900 xl:mb-[6.06rem] xl:mt-0 xl:h-[4.3rem] xl:max-w-[19.06rem] xl:px-6 xl:py-5 xl:text-[1.125rem] xl:leading-[1.8rem]"
      >
        <span>minth1123@icloud.com</span>
        <Image
          className="xl:h-[1.3125rem] xl:w-[1.3125rem]"
          src={contactIcon}
          alt="contact icon"
          width={16}
          height={16}
        />
      </Link>
    </motion.div>
  );
};

export default HeroLinks;
