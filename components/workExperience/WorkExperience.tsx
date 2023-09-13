import Companies from "./Companies";
import SquareWorkExperienceCard from "./SquareWorkExperienceCard";

const WorkExperience = () => {
  return (
    <section className="bg-white900 dark:bg-black200">
      <div
        className="flex flex-col justify-center gap-4 px-6 py-12 xl:flex-row xl:gap-[1.63rem] xl:px-[5.31rem] 
          xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]"
      >
        <SquareWorkExperienceCard />
        <div className="grid w-full grow grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-[2.19rem] xl:mr-[1.87rem] xl:w-[37.9375rem] xl:grid-cols-1">
          <Companies />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
