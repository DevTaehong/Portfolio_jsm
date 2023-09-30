import CaseStudiesDetailHeadings from "../CaseStudiesDetailHeadings";
import MyProcessIcons from "./MyProcessIcons";

const MyProcess = () => {
  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col gap-6 px-6 py-9 sm:gap-10 xl:px-[17.5rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-6 ">
          <CaseStudiesDetailHeadings
            smallText="Way of work"
            headingText="My Process"
          />
        </div>
        <MyProcessIcons />
      </div>
    </section>
  );
};

export default MyProcess;
