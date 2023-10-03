"use client";

import { motion } from "framer-motion";

import ContactInputs from "@/components/contact/ContactInputs";
import MyEmailPhoneNumber from "@/components/contact/MyEmailPhoneNumber";

const ContactMainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white900 dark:bg-black200"
    >
      <div className="flex flex-col md:flex-row-reverse md:justify-evenly lg:py-8 xl:gap-[4.69rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <ContactInputs />
        <MyEmailPhoneNumber />
      </div>
    </motion.div>
  );
};

export default ContactMainContent;
