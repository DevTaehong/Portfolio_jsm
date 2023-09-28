"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { generateFadeInAnimationVariants } from "@/utils";

const BulletPoint = ({
  bulletPoint,
  challengesOrLearnings,
  index,
  icon,
}: {
  bulletPoint: string;
  challengesOrLearnings: string;
  index: number;
  icon: string;
}) => {
  const fadeInAnimationVariants = generateFadeInAnimationVariants(0.1, 50);
  return (
    <div
      key={bulletPoint}
      className="flex list-none flex-row items-start gap-[0.63rem]"
    >
      <Image
        className="mt-[0.24rem] sm:mt-[0.38rem]"
        src={icon}
        alt={`${challengesOrLearnings} bullet point image`}
        width={20}
        height={20}
      />
      <motion.p
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index}
        className="smallRegular text-white500 dark:text-white800 sm:text-[1.125rem] sm:leading-[1.8rem]"
      >
        {bulletPoint}
      </motion.p>
    </div>
  );
};

export default BulletPoint;
