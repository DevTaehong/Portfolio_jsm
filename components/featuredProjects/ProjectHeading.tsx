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
      <div className="flex flex-row gap-[0.31rem] truncate xl:gap-[0.625rem]">
        {project.techStack.map((tech, index) => (
          <div
            key={tech}
            className={`smallRegular techStack items-start text-white900 ${
              index >= 3 ? "hidden xl:flex" : "flex"
            }`}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHeading;
