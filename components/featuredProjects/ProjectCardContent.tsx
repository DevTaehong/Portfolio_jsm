import ProjectHeading from "./ProjectHeading";
import ProjectLink from "./ProjectLink";
import ProjectCardImage from "./ProjectCardImage";
import { FeaturedProjectsType } from "@/types";

const ProjectCardContent = ({
  project,
  index,
}: {
  project: FeaturedProjectsType;
  index: number;
}) => {
  return (
    <div
      className={`flex flex-col gap-6  ${
        (index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div
        className={`flex flex-col gap-[1.88rem] xl:gap-[3.13rem] ${
          (index + 1) % 2 === 0 && "md:pl-0 md:pr-6 xl:pr-0"
        } pl-6 pr-[1.63rem] sm:pr-0 xl:pl-0`}
      >
        <ProjectHeading project={project} />
        <ProjectLink project={project} />
      </div>
      <ProjectCardImage project={project} index={index} />
    </div>
  );
};

export default ProjectCardContent;
