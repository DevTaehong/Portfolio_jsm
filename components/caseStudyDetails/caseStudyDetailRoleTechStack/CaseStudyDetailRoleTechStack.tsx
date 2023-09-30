import { myRoleOrDates } from "@/utils";
import MyRoleOrDates from "./MyRoleOrDates";
import ProjectTechStack from "./ProjectTechStack";
import { CaseStudiesDetailType } from "@/types";

const CaseStudyDetailRoleTechStack = ({
  project,
}: {
  project: CaseStudiesDetailType;
}) => {
  const RoleOrDates = myRoleOrDates(project);
  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col px-6 xl:px-[17.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-9 py-10 sm:flex-row sm:justify-between xl:pb-[2.69rem] xl:pt-[3.31rem]">
          {RoleOrDates.map((RoleOrDate) => (
            <MyRoleOrDates
              key={RoleOrDate?.text}
              text={RoleOrDate?.text}
              myRoleOrDates={RoleOrDate?.value}
            />
          ))}
        </div>
        <ProjectTechStack projectDetail={project} />
      </div>
    </section>
  );
};

export default CaseStudyDetailRoleTechStack;
