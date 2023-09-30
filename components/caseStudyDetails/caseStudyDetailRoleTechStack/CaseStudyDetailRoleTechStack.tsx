import MyRoleOrDates from "./MyRoleOrDates";
import ProjectTechStack from "./ProjectTechStack";
import { CaseStudiesDetailType } from "@/types";

const CaseStudyDetailRoleTechStack = ({
  project,
}: {
  project: CaseStudiesDetailType;
}) => {
  const myRoleOrDates = [
    { text: "My Role", value: project?.myRole },
    { text: "Start Date", value: project?.startDate },
    { text: "End Date", value: project?.endDate },
  ];

  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col px-6 xl:px-[17.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-9 py-10 sm:flex-row sm:justify-between xl:pb-[2.69rem] xl:pt-[3.31rem]">
          {myRoleOrDates.map((myRoleOrDate) => (
            <MyRoleOrDates
              key={myRoleOrDate?.text}
              text={myRoleOrDate?.text}
              myRoleOrDates={myRoleOrDate?.value}
            />
          ))}
        </div>
        <ProjectTechStack projectDetail={project} />
      </div>
    </section>
  );
};

export default CaseStudyDetailRoleTechStack;
