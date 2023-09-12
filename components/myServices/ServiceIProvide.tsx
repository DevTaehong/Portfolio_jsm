import ServiceCard from "@/components/myServices/ServiceCard";

const ServiceIProvide = () => {
  return (
    <section className="flex flex-col items-center gap-10 bg-white900 py-12 dark:bg-black300 sm:bg-white800 xl:px-[5.31rem] xl:pb-[8.9375rem] xl:pt-[4.5rem]">
      <h1 className="mySkills relative dark:text-white900 xl:text-[3rem] xl:tracking-[-0.03rem]">
        {"What "}
        <span className="relative inline-block">
          <span className="absolute top-[1.6rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
          <span className="relative">service</span>
        </span>
        <br className="block sm:hidden" /> do I provide
      </h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid xl:grid-cols-4 xl:gap-[2.51rem]">
        <ServiceCard />
      </div>
    </section>
  );
};

export default ServiceIProvide;
