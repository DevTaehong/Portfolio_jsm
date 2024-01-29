import { motion } from "framer-motion";

const DefaultDetail = () => (
  <motion.div
    transition={{ type: "spring" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col gap-[1.62rem]"
  >
    <h2 className="ExperienceCardHeader dark:text-white900 xl:text-[3rem] xl:leading-[3.45rem] xl:tracking-[-0.03rem]">
      Work{" "}
      <span className="relative inline-block">
        <span className="absolute top-[1.8325rem] h-[0.93256rem] w-[9.75rem] shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
        <h1 className="relative ">Experience</h1>
      </span>
    </h2>
    <div className="flex flex-col gap-4">
      <p className="smallRegular leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
        Take a trip through my career, where {`I've`} not only paved the way but
        also reached important goals, taken on different{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          roles
        </span>
        , worked on impressive{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          projects
        </span>
        , and accomplished notable things.
      </p>
      <p className="smallRegular leading-[1.8rem] text-white500 dark:text-white800 xl:text-[1.125rem]">
        {`My professional trajectory has been a dynamic adventure, ranging from
        late-night coding sessions to fruitful collaborations with skilled
        teams. Throughout this multifaceted journey, I've consistently embraced`}{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          growth{" "}
        </span>
        and a{" "}
        <span className="font-semibold text-primaryLight dark:text-primaryDark">
          dedication{" "}
        </span>{" "}
        to fostering innovation.
      </p>
    </div>
  </motion.div>
);

export default DefaultDetail;
