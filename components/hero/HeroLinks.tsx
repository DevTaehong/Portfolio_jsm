"use client";

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { useMediaQuery } from "usehooks-ts";

import { paragraphAnimationVariants3 } from "@/utils";
import { HeroEmailCopyIcon } from "../svg/HeroEmailCopyIcon";
import { CheckIcon } from "../svg/CheckIcon";

const HeroLinks = () => {
  const isDeskTop = useMediaQuery("(min-width: 1280px)");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={paragraphAnimationVariants3}
      className="gap-[1.13rem] xl:flex xl:max-w-[32rem] xl:flex-row xl:items-baseline"
    >
      <Link
        rel="noreferrer"
        href="#featuredProjects"
        className="primaryButton primaryButtonText dark:bg-primaryDark xl:h-[4.3rem] xl:max-w-[11.625rem] xl:px-3 xl:py-5 xl:text-[1.125rem] xl:leading-[1.8rem]"
      >
        My Work
      </Link>
      <Snippet
        copyIcon={
          <HeroEmailCopyIcon
            width={isDeskTop ? 21 : 16}
            height={isDeskTop ? 21 : 16}
          />
        }
        checkIcon={
          <CheckIcon width={isDeskTop ? 21 : 16} height={isDeskTop ? 21 : 16} />
        }
        className="contactButton contactButtonText mb-[1.69rem] mt-[0.88rem] dark:bg-black200 dark:text-white900 xl:mb-[6.06rem] xl:mt-0 xl:h-[4.3rem] xl:max-w-[19.06rem] xl:px-6 xl:py-5 xl:text-[1.125rem] xl:leading-[1.8rem]"
        symbol=""
        classNames={{
          pre: "contactButtonText xl:text-[1.125rem] xl:leading-[1.8rem] font-poppins dark:text-white900",
        }}
        tooltipProps={{
          delay: 0,
          classNames: {
            base: "text-white500 dark:text-white900 dark:bg-black300",
          },
          closeDelay: 0,
        }}
      >
        minth1123@icloud.com
      </Snippet>
    </motion.div>
  );
};

export default HeroLinks;
