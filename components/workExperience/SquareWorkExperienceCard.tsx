import { Card } from "@nextui-org/card";

import LineDecoration from "../svg/workExperience/LineDecoration";

const SquareWorkExperienceCard = () => {
  return (
    <Card
      className="mainWorkExperienceCard flex flex-none grow flex-col justify-center gap-[0.86rem] dark:bg-white800 
              xl:w-[37.9375rem] xl:pb-[6.56rem] xl:pl-[6.56rem] xl:pr-[8.94rem] xl:pt-[9.5rem]"
    >
      <div className="flex flex-col gap-[1.49rem]">
        <h2 className="ExperienceCardHeader dark:text-black200 xl:text-[3rem] xl:tracking-[-0.03rem]">
          Work
          <span className="relative inline-block">
            <span className="absolute top-[1.9rem] h-[0.93256rem] w-[9.75rem] shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
            <h1 className="relative ">Experience</h1>
          </span>
        </h2>
        <div className="smallRegular leading-[1.8rem] text-white800 dark:text-white500 xl:text-[1.125rem]">
          Progress and milestones: A simple walkthrough of roles, projects, and
          achievements in my career.
        </div>
      </div>
      <LineDecoration />
    </Card>
  );
};

export default SquareWorkExperienceCard;
