import { projectDetails } from "@/constants";
import CaseStudyDetailSkill from "./CaseStudyDetailSkill";

const CaseStudyDetailRoleTechStack = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];

  const myRoleOrDates = [
    { text: "My Role", value: projectDetail.myRole },
    { text: "Start Date", value: projectDetail.startDate },
    { text: "End Date", value: projectDetail.endDate },
  ];

  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col px-6 xl:px-[17.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-9 py-10 sm:flex-row sm:justify-between xl:pb-[2.69rem] xl:pt-[3.31rem]">
          {myRoleOrDates.map((myRoleOrDate) => (
            <MyRoleOrDates
              key={myRoleOrDate.text}
              text={"My Role"}
              myRoleOrDates={myRoleOrDate.value}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6 py-[2.62rem] sm:gap-[2.75rem] xl:py-[4.5rem]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[0.56rem] sm:gap-[0.62rem]">
              <p className="technologiesUsed dark:text-primaryDark sm:text-[0.875rem] sm:leading-[1.26875rem]">
                Technologies used
              </p>
              <h6 className="caseStudyDetailTechStack dark:text-white900 sm:text-[2rem] sm:leading-[2.1rem]">
                Tech Stack
              </h6>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-x-5 gap-y-[2.06rem] xl:grid xl:grid-cols-7 xl:gap-x-[2.32rem] xl:gap-y-[2.1rem]">
            {projectDetail.techStack.map((Tech) => (
              <CaseStudyDetailSkill Tech={Tech} key={Tech.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MyRoleOrDates = ({
  text,
  myRoleOrDates,
}: {
  text: string;
  myRoleOrDates: string;
}) => {
  return (
    <div className="flex flex-col gap-[0.62rem]">
      <p className="smallBold text-black400 dark:text-white500 sm:text-[1.125rem] sm:leading-[1.26875rem]">
        {text}
      </p>
      <p className="paragraphBold text-black200 dark:text-white900 sm:text-[1.5rem] sm:leading-[1.95rem]">
        {myRoleOrDates}
      </p>
    </div>
  );
};

export default CaseStudyDetailRoleTechStack;
