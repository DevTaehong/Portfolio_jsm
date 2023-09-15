import CaseStudiesProject from "./CaseStudiesProject";
import {
  morrentLaptop,
  jobitLaptop,
  hipnodeLaptop,
  filmpireLaptop,
} from "@/public";

const projects = [
  {
    name: "Morrent",
    description: "Car Rental Application",
    image: morrentLaptop,
    color: "bg-morrentLight",
  },
  {
    name: "Jobit",
    description: "Job Finding Application",
    image: jobitLaptop,
    color: "bg-jobit",
  },
  {
    name: "HipNode",
    description: "Social Platform for Developers",
    image: hipnodeLaptop,
    color: "bg-hipnode",
  },
  {
    name: "Filmpire",
    description: "AI-Powered Movie Application",
    image: filmpireLaptop,
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
          <CaseStudiesProject project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesProjects;
