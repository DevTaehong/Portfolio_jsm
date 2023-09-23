import Image from "next/image";

import { projectDetails } from "@/constants";

const ProblemStatement = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];
  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col gap-6 px-6 py-9 xl:px-[17.5rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-[0.56rem] sm:gap-[0.62rem]">
            <p className="technologiesUsed dark:text-primaryDark sm:text-[0.875rem] sm:leading-[1.26875rem]">
              Problem
            </p>
            <h6 className="caseStudyDetailTechStack dark:text-white900 sm:text-[2rem] sm:leading-[2.1rem]">
              Problem Statement
            </h6>
          </div>
        </div>
        <p className="smallRegular whitespace-pre-line text-white500 sm:text-[1.25rem] sm:leading-[1.875rem]">
          {projectDetail?.problemStatement}
        </p>
        <Image
          className="sm:h-full sm:w-full"
          src={projectDetail?.problemStatementImage}
          alt="Problem Statement Image"
          width={348}
          height={363.836}
        />
      </div>
    </section>
  );
};

export default ProblemStatement;
