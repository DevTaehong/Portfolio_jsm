import Companies from "./Companies";
import SquareWorkExperienceCard from "./SquareWorkExperienceCard";

const WorkExperience = () => {
  return (
    <section className="bg-white900 dark:bg-black200">
      <div
        className="flex flex-col items-center justify-center gap-4 px-6 py-12 xl:flex-row xl:gap-[1.63rem] 
          xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]"
      >
        <SquareWorkExperienceCard />
        <div className="flex w-full max-w-[37.9375rem] flex-col gap-4 xl:gap-[2.19rem]">
          <Companies />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
