import { getCaseStudiesProjects } from "@/sanity/sanity-utils";
import CaseStudiesProject from "./CaseStudiesProject";
// import { caseStudyProjects } from "@/constants";
import { CaseStudiesProjectsType } from "@/types";

const CaseStudiesProjects = async () => {
  const caseStudyProjectData: CaseStudiesProjectsType[] =
    await getCaseStudiesProjects();
  return (
    <section className="bg-white900 dark:bg-black200">
      <div
        className="flex flex-col items-center justify-center justify-items-center gap-5 px-6 py-12 sm:grid sm:grid-cols-2 md:gap-9 
        xl:flex xl:flex-row xl:flex-wrap xl:px-[5.31rem] 2xl:mx-auto 2xl:max-w-[90rem]"
      >
        {caseStudyProjectData.map((project) => (
          <CaseStudiesProject project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesProjects;
