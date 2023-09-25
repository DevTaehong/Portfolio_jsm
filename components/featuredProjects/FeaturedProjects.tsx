import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";
import SeeMoreCaseStudiesButton from "./SeeMoreCaseStudiesButton";

const FeaturedProjects = () => {
  return (
    <section id="featuredProjects" className="bg-white900 dark:bg-black200">
      <div className="flex flex-col gap-9 px-6 py-12 lg:gap-12 lg:px-[5.31rem] lg:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <h1 className="mobileHeading2 relative dark:text-white900 xl:text-[3rem] xl:tracking-[-0.03rem]">
          {"Featured "}
          <span className="relative inline-block">
            <span className="absolute top-[1.6rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary xl:top-[2.3rem] xl:h-[0.9375rem]" />
            <span className="relative">Projects</span>
          </span>
        </h1>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
        <SeeMoreCaseStudiesButton />
      </div>
    </section>
  );
};

export default FeaturedProjects;
