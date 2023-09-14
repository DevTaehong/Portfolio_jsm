import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import Image from "next/image";

const CaseStudiesProject = ({
  project,
}: {
  project: { name: string; description: string; image: string; color: string };
}) => {
  return (
    <>
      <Card
        as={Link}
        href={`/case-studies/${project.name.toLowerCase()}`}
        className={`${project.color} items-center rounded-[0.62725rem] px-[1.54rem] pt-[2.73rem] xl:rounded-2xl xl:px-[3.75rem] xl:pt-[4.35rem]`}
      >
        <Image
          className="lg:h-[15.8rem] lg:w-[26.8rem]"
          src={project.image}
          width={278.486}
          height={165.054}
          alt={project.description}
        />
      </Card>
      <div className="ml-[2.08rem] flex flex-col xl:ml-[3.8rem]">
        <Link
          href={`/case-studies/${project.name.toLowerCase()}`}
          className="paragraphBold mt-[1.3rem] text-black200 dark:text-white900 xl:mt-[2.04rem] xl:text-[2rem] xl:leading-[2.1rem] xl:tracking-[-0.01rem]"
        >
          {project.name}
        </Link>
        <p className="smallRegular mt-[0.39rem] text-white500 xl:mt-[0.62rem] xl:text-[1.25rem] xl:leading-[1.875rem]">
          {project.description}
        </p>
      </div>
    </>
  );
};

export default CaseStudiesProject;
