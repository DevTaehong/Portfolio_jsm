import { motion } from "framer-motion";

const NSCCDetail = () => (
  <motion.div
    transition={{ type: "spring" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col gap-[1.62rem]"
  >
    <h2 className="ExperienceCardHeader dark:text-white900 xl:text-[3rem] xl:leading-[3.45rem] xl:tracking-[-0.03rem]">
      Software{" "}
      <span className="relative inline-block">
        <span className="absolute top-[1.8325rem] h-[0.93256rem] w-[9.75rem] shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
        <h1 className="relative ">Developer</h1>
      </span>
    </h2>
    <div className="flex flex-col gap-4">
      <p className="smallRegular leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
        5 Weeks work tem placement at NSCC. I worked on a team of 4 to develop a
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          web application{" "}
        </span>
        for the{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          Nova Scotia Community College{" "}
        </span>
        to help them manage their{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          IT assets{" "}
        </span>
        and{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          tickets{" "}
        </span>
        .
      </p>
      <p className="smallRegular leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
        I worked on the{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          front-end{" "}
        </span>
        of the application using{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          JavaScript{" "}
        </span>
        . I also worked on the{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          back-end{" "}
        </span>
        using{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          Laravel{" "}
        </span>
        and{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          MySQL{" "}
        </span>
        .
      </p>
    </div>
  </motion.div>
);

export default NSCCDetail;
