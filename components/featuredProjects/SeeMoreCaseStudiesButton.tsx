"use client";

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";

const SeeMoreCaseStudiesButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex justify-center"
    >
      <Link
        href="/case-studies"
        className="seeMoreCaseStudies dark:bg-primaryDark"
      >
        See more case studies
      </Link>
    </motion.div>
  );
};

export default SeeMoreCaseStudiesButton;
