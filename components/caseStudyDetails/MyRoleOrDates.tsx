"use client";

import { motion } from "framer-motion";

const MyRoleOrDates = ({
  text,
  myRoleOrDates,
}: {
  text: string;
  myRoleOrDates: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-[0.62rem]"
    >
      <p className="smallBold text-black400 dark:text-white500 sm:text-[1.125rem] sm:leading-[1.26875rem]">
        {text}
      </p>
      <p className="paragraphBold text-black200 dark:text-white900 sm:text-[1.5rem] sm:leading-[1.95rem]">
        {myRoleOrDates}
      </p>
    </motion.div>
  );
};

export default MyRoleOrDates;
