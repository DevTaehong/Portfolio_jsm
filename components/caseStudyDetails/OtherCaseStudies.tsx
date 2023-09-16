import { Card } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { projectDetails } from "@/constants";

const OtherCaseStudies = ({ project }: { project: string }) => {
  const otherProjects = Object.keys(projectDetails).filter(
    (key) => key !== project
  );

  return (
    <section className="bg-white800 dark:bg-black300">
      <div className="flex flex-col gap-9 px-6 py-9 sm:gap-10 xl:px-[17.5rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-[0.56rem] sm:items-center sm:gap-[0.62rem] md:items-start">
          <p className="technologiesUsed dark:text-primaryDark sm:text-[0.875rem] sm:leading-[1.26875rem]">
            Projects
          </p>
          <h6 className="caseStudyDetailTechStack dark:text-white900 sm:text-[2rem] sm:leading-[2.1rem]">
            Other Case Studies
          </h6>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          {otherProjects.map((otherProject) => (
            <CaseStudyCard key={otherProject} otherProject={otherProject} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({ otherProject }: { otherProject: string }) => {
  return (
    <Card className="otherCaseStudies max-w-[21.5625rem] dark:bg-black300 dark:shadow-caseStudyCard lg:max-w-[26.875rem]">
      <Image
        className="lg:w-[30rem] xl:w-[26.86575rem]"
        src={projectDetails[otherProject].figmaDesignImage}
        alt="Project Image"
      />
      <div className="flex flex-col gap-[0.97rem] px-[1.19rem] pb-[1.49rem] pt-[1.2rem]">
        <div className="flex flex-col gap-[0.4rem]">
          <p className="paragraphBold text-primaryLight dark:text-primaryDark">
            {projectDetails[otherProject].name}
          </p>
          <p className="smallRegular line-clamp-3 text-white500 dark:text-white800">
            {projectDetails[otherProject].detail}
          </p>
        </div>
        <Button
          as={Link}
          href={`/case-studies/${otherProject}`}
          className="seeCaseStudyButton dark:bg-primaryDark"
        >
          See Case Study
        </Button>
      </div>
    </Card>
  );
};

export default OtherCaseStudies;
