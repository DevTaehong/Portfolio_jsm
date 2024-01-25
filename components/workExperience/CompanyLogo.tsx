import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { ExperienceType } from "@/types";

const CompanyLogo = ({
  company,
  hasTheBarMoved,
}: {
  company: ExperienceType;
  hasTheBarMoved: boolean;
}) => {
  // NOTE - Regarding TailwindCSS dynamic classes, it cannot be exportable.
  const imageSources: { src: string; className: string }[] = [
    {
      src: company?.logo?.url,
      className: twMerge(
        "brightness-0 dark:brightness-100 group-hover:hidden dark:group-hover:hidden",
        hasTheBarMoved && "hidden"
      ),
    },
    {
      src: company?.logo?.srcLightHover?.url,
      className: twMerge(
        "hidden group-hover:block dark:hidden dark:group-hover:hidden group-hover:dark:hidden",
        hasTheBarMoved && "block"
      ),
    },
    {
      src: company?.logo?.srcDarkHover?.url,
      className: twMerge(
        "hidden dark:hidden dark:group-hover:block",
        hasTheBarMoved && "dark:block"
      ),
    },
  ];

  return (
    <>
      {imageSources.map((imageSource) => (
        <Image
          key={imageSource?.src}
          src={imageSource?.src}
          className={imageSource?.className}
          width={58}
          height={58}
          alt={company?.logo?.alt}
        />
      ))}
    </>
  );
};

export default CompanyLogo;
