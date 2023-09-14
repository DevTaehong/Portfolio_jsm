import { projectDetails } from "@/constants";

const CaseStudyDetailRoleTechStack = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];

  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col px-6 xl:px-[17.5rem]">
        <div className="flex flex-col gap-9 py-10 sm:flex-row sm:justify-between xl:pb-[2.69rem] xl:pt-[3.31rem]">
          <MyRoleOrDates
            text={"My Role"}
            myRoleOrDates={projectDetail.myRole}
          />
          <MyRoleOrDates
            text={"Start Date"}
            myRoleOrDates={projectDetail.startDate}
          />
          <MyRoleOrDates
            text={"End Date"}
            myRoleOrDates={projectDetail.endDate}
          />
        </div>
        <div className="flex flex-col gap-6 py-[2.62rem] sm:gap-[2.75rem] xl:py-[4.5rem]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[0.56rem] sm:gap-[0.62rem]">
              <p className="technologiesUsed sm:text-[0.875rem] sm:leading-[1.26875rem]">
                Technologies used
              </p>
              <h6 className="caseStudyDetailTechStack sm:text-[2rem] sm:leading-[2.1rem]">
                Tech Stack
              </h6>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-x-5 gap-y-[2.06rem] xl:grid xl:grid-cols-7 xl:gap-x-[2.32rem] xl:gap-y-[2.1rem]">
            {projectDetail.techStack.map((Tech) => (
              <Tech key={Tech.name} isCaseDetailPage={true} />
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
      <p className="smallBold text-black400 sm:text-[1.125rem] sm:leading-[1.26875rem]">
        {text}
      </p>
      <p className="paragraphBold text-black200 sm:text-[1.5rem] sm:leading-[1.95rem]">
        {myRoleOrDates}
      </p>
    </div>
  );
};

export default CaseStudyDetailRoleTechStack;
