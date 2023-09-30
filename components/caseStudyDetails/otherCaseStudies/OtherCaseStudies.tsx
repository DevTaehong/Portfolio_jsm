import CaseStudiesDetailHeadings from "../CaseStudiesDetailHeadings";
import OtherCaseStudyCards from "./OtherCaseStudyCards";
import { CaseStudiesDetailType } from "@/types";

const OtherCaseStudies = ({
  projects,
  projectParam,
}: {
  projects: CaseStudiesDetailType[];
  projectParam: string;
}) => {
  return (
    <section className="bg-white800 dark:bg-black300">
      <div
        className="flex flex-col gap-9 px-6 py-9 sm:gap-10 sm:px-[9rem] md:px-12 min-[1280px]:px-[12rem] 
          min-[1440px]:px-[17.5rem] min-[1440px]:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]"
      >
        <CaseStudiesDetailHeadings
          smallText="Projects"
          headingText="Other Case Studies"
        />
        <OtherCaseStudyCards projects={projects} projectParam={projectParam} />
      </div>
    </section>
  );
};

export default OtherCaseStudies;
