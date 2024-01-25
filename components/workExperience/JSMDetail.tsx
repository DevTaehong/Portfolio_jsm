import { motion } from "framer-motion";

const JSMDetail = () => (
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
        Refined my skills through various projects. These experiences have not
        only strengthened my technical abilities but also improved my{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          communication{" "}
        </span>
        and deadline{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          management{" "}
        </span>
        skills.
      </p>
      <p className="smallRegular flex flex-col leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
        Built 3 web applications in teams with an average size of 6 members.
        <ul className="list-disc ">
          <li>A social media forum</li>
          <li>A car-renting web application</li>
          <li>A job finder web app </li>
        </ul>
      </p>
    </div>
  </motion.div>
);

export default JSMDetail;
