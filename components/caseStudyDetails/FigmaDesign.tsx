import Image from "next/image";

import { CaseStudiesDetailType } from "@/types";

const FigmaDesign = ({ project }: { project: CaseStudiesDetailType }) => {
  return (
    <section className="flex flex-col dark:bg-black200">
      <div className="figmaDesign figmaDesignText h-[2.47812rem] dark:bg-primaryDark sm:text-[2rem] sm:leading-[2.1rem] sm:tracking-[-0.01rem] md:h-[6.625rem]">
        High-Fidelity Figma Design
      </div>
      <Image
        className="h-full w-full"
        src={project?.figmaDesignImage}
        alt="Problem Statement Image"
        width={393}
        height={209.327}
        unoptimized
      />
    </section>
  );
};

export default FigmaDesign;
