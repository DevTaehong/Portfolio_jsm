import { projectDetails } from "@/constants";
import MyRoleOrDates from "./MyRoleOrDates";
import ProjectTechStack from "./ProjectTechStack";

const CaseStudyDetailRoleTechStack = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];

  const myRoleOrDates = [
    { text: "My Role", value: projectDetail?.myRole },
    { text: "Start Date", value: projectDetail?.startDate },
    { text: "End Date", value: projectDetail?.endDate },
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
        <ProjectTechStack projectDetail={projectDetail} />
      </div>
    </section>
  );
};

export default CaseStudyDetailRoleTechStack;
