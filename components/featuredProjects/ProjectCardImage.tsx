import { FeaturedProjectsType } from "@/types";
import Image from "next/image";

const ProjectCardImage = ({
  project,
  index,
}: {
  project: FeaturedProjectsType;
  index: number;
}) => {
  return (
    <div
      className={`flex justify-center xl:absolute xl:inset-0 xl:mb-[3.31rem] xl:mt-[3.87rem] xl:overflow-hidden
                      ${
                        (index + 1) % 2 === 0
                          ? "xl:mr-[40.32rem]"
                          : "xl:ml-[37.27rem]"
                      }`}
    >
      <Image
        className={`sm:h-full sm:w-full xl:h-[20.56731rem] ${
          (index + 1) % 2 === 0
            ? "xl:translate-x-[-3.72rem]"
            : "xl:translate-x-[1.17rem]"
        } `}
        src={project?.image.url}
        width={320}
        height={155}
        alt={`Project ${project?.name}`}
      />
    </div>
  );
};

export default ProjectCardImage;
