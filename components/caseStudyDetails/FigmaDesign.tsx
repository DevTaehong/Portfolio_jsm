import Image from "next/image";

import { projectDetails } from "@/constants";

const FigmaDesign = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];

  return (
    <section className="flex flex-col">
      <div className="figmaDesign figmaDesignText h-[2.47812rem] dark:bg-primaryDark sm:text-[2rem] sm:leading-[2.1rem] sm:tracking-[-0.01rem] md:h-[6.625rem]">
        High-Fidelity Figma Design
      </div>
      <Image
        className="h-full max-h-[47.9375rem] w-full max-w-[90rem] 2xl:mx-auto"
        src={projectDetail.figmaDesignImage}
        alt="Problem Statement Image"
        width={393}
        height={209.327}
      />
    </section>
  );
};

export default FigmaDesign;
