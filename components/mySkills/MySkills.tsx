import Skill from "@/components/mySkills/Skill";

const MySkills = () => {
  return (
    <section className="bg-white900 py-12 dark:bg-black200">
      <div className="flex flex-col items-center gap-10  xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <span className="relative inline-block">
          <span className="absolute top-[1.6rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
          <h1 className="mobileHeading2 relative dark:text-white900 xl:text-[3rem] xl:tracking-[-0.03rem]">
            My Skills
          </h1>
        </span>
        <div className="grid grid-cols-4 gap-[2.59rem] md:flex md:flex-wrap md:justify-center lg:gap-[4rem] xl:gap-[2.73rem]">
          <Skill />
        </div>
      </div>
    </section>
  );
};

export default MySkills;
