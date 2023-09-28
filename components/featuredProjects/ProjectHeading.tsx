const ProjectHeading = ({
  project,
}: {
  project: { name: string; description: string; techStack: string[] };
}) => {
  return (
    <div className="flex flex-col gap-[1.88rem] xl:gap-[1.44rem]">
      <h2 className="projectName xl:max-w-[31.1875rem] xl:text-[3rem] xl:tracking-[-0.03rem]">
        {project.name} {" - "} <br className="block xl:hidden" />
        {project.description}
      </h2>
      <div className="flex flex-row gap-1 truncate xl:gap-5">
        {project.techStack.map((tech) => (
          <div
            key={tech}
            className="smallRegular techStack flex items-start text-white900"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHeading;
