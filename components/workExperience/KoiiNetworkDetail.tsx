import { motion } from "framer-motion";

const KoiiNetworkDetail = () => (
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
        <h1 className="relative">Developer</h1>
      </span>
    </h2>
    <div className="flex flex-col gap-4">
      <p className="smallRegular leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
        {`Refined my skills through various projects. These experiences haven't
        only strengthened my technical abilities but also improved my`}{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          communication{" "}
        </span>
        and{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          time management{" "}
        </span>
        skills.
      </p>
      <p className="smallRegular leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
        I focused on full-stack development using
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          JavaScript{" "}
        </span>
        for a user-friendly interface. I also handled back-end tasks, employing
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          Node.js{" "}
        </span>
        and
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          {" "}
          MongoDB
        </span>{" "}
        for effective server-side functionality and database management.
      </p>
    </div>
  </motion.div>
);

export default KoiiNetworkDetail;
