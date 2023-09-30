import { Card } from "@nextui-org/card";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { CaseStudiesDetailType } from "@/types";

const CaseStudyCard = ({
  otherProjects,
}: {
  otherProjects: CaseStudiesDetailType;
}) => {
  return (
    <Card className="otherCaseStudies max-h-[24.06rem] max-w-[21.5625rem] shrink-0 dark:bg-black300 dark:shadow-caseStudyCard lg:max-h-[30.06rem] lg:max-w-[26.875rem]">
      <Image
        className="max-h-[11.66rem] lg:max-h-[14.5rem] lg:w-[30rem] xl:w-[26.86575rem]"
        src={otherProjects.figmaDesignImage}
        alt="Project Image"
        width={344.881}
        height={186.822}
      />
      <div className="flex flex-col gap-[0.97rem] px-[1.19rem] pb-[1.49rem] pt-[1.2rem]">
        <div className="flex flex-col gap-[0.4rem]">
          <p className="paragraphBold text-primaryLight dark:text-primaryDark lg:text-[1.5rem] lg:leading-[1.95rem]">
            {otherProjects.name}
          </p>
          <p className="smallRegular line-clamp-3 text-white500 dark:text-white800 lg:text-[1.125rem] lg:leading-[1.8rem]">
            {otherProjects.detail}
          </p>
        </div>
        <Button
          as={Link}
          href={`/case-studies/${otherProjects.name.toLowerCase()}`}
          className="seeCaseStudyButton h-[2.5625rem] hover:transition-opacity dark:bg-primaryDark lg:h-12 lg:text-[0.875rem]"
        >
          See Case Study
        </Button>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
