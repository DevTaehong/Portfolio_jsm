import Image from "next/image";

import { ExperienceType } from "@/types";

const CompanyLogo = ({ company }: { company: ExperienceType }) => {
  // NOTE - Regarding TailwindCSS dynamic classes, it cannot be exportable.
  const imageSources = [
    {
      src: company?.logo?.url,
      className: `brightness-0 dark:brightness-100 block group-hover:hidden dark:group-hover:hidden`,
    },
    {
      src: company?.logo?.srcLightHover?.url,
      className: `hidden group-hover:block dark:hidden dark:group-hover:hidden group-hover:dark:hidden`,
    },
    {
      src: company?.logo?.srcDarkHover?.url,
      className: `hidden dark:hidden dark:group-hover:block`,
    },
  ];

  return (
    <>
      {imageSources.map(
        (imageSource: { src: string; className: string }, index: number) => (
          <Image
            key={index}
            src={imageSource?.src}
            className={imageSource?.className}
            width={58}
            height={58}
            alt={company?.logo?.alt}
          />
        )
      )}
    </>
  );
};

export default CompanyLogo;
