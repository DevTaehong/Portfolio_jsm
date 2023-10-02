import { Link } from "@nextui-org/link";
import Image from "next/image";

import { arrow } from "@/public";

const ProjectLink = ({ project }: { project: { name: string } }) => {
  return (
    <Link
      href={`/case-studies/${project.name.toLowerCase()}`}
      className="bodyBold group inline-flex gap-[0.47rem] text-white900"
    >
      See Case Study
      <Image
        className="transition group-hover:translate-x-[0.47rem]"
        src={arrow}
        alt="Case Study Arrow"
        width={35}
        height={0}
      />
    </Link>
  );
};

export default ProjectLink;
