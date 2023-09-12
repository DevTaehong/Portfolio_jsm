import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section className="bg-white800 dark:bg-black300">
      <div className="flex flex-col px-6 py-12 xl:gap-[4.5rem] xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <h1 className="mySkills relative dark:text-white900 xl:text-[3rem] xl:tracking-[-0.03rem]">
          {"What "}
          <span className="relative inline-block">
            <span className="absolute top-[1.6rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
            <span className="relative">they say</span>
          </span>
          <br className="block sm:hidden" /> about me
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[1.62rem]">
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
