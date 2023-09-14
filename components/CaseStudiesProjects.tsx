import CaseStudiesProject from "./CaseStudiesProject";
import { morrent, jobit, hipnode, filmpire } from "@/public";

const projects = [
  {
    name: "Morrent",
    description: "Car Rental Application",
    image: morrent,
    color: "bg-morrentLight",
  },
  {
    name: "Jobit",
    description: "Job Finding Application",
    image: jobit,
    color: "bg-jobit",
  },
  {
    name: "HipNode",
    description: "Social Platform for Developers",
    image: hipnode,
    color: "bg-hipnode",
  },
  {
    name: "Filmpire",
    description: "AI-Powered Movie Application",
    image: filmpire,
    color: "bg-filmpire",
  },
];

const CaseStudiesProjects = () => {
  return (
    <section className="bg-white900 dark:bg-black200">
      <div
        className="flex flex-col items-center justify-center justify-items-center gap-5 px-6 py-12 sm:grid sm:grid-cols-2 md:gap-9 
        xl:flex xl:flex-row xl:flex-wrap xl:px-[5.31rem] 2xl:mx-auto 2xl:max-w-[90rem]"
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className="max-w-[21.5625rem] lg:max-w-[34.375rem]"
          >
            <CaseStudiesProject project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesProjects;
