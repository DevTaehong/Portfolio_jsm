import Image from "next/image";
import { Link } from "@nextui-org/link";

import { projectDetails } from "@/constants";
import {
  CaseStudyArrow,
  CaseStudyGitHubIcon,
  DemoSiteIcon,
} from "../svg/caseStudyDetails";

const CaseStudyDetailHero = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];

  const HeroLinks = [
    { text: "Demo Site", href: projectDetail.demoSite, Icon: DemoSiteIcon },
    {
      text: "Source Code",
      href: projectDetail.sourceCode,
      Icon: CaseStudyGitHubIcon,
    },
  ];

  return (
    <section className="bg-white800 px-6 py-12 dark:bg-black300">
      <div className="flex flex-col items-center gap-6 text-center sm:gap-[3.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-[0.62rem] sm:gap-[1.88rem]">
          <p className="text-sm font-semibold uppercase not-italic leading-[1.1375rem] tracking-[0.2625rem] text-primaryLight dark:text-primaryDark xl:text-[1.25rem]">
            {projectDetail.type}
          </p>
          <h1 className="mobileHeading1 dark:text-white900 xl:text-[4rem] xl:leading-[5.2rem] xl:tracking-[-0.04rem]">
            <span className="relative inline-block">
              <span className="absolute top-[1.88rem] h-[1.1875rem] w-full shrink-0 bg-accentSecondary xl:top-[3.3rem] xl:h-[1.757rem]" />
              <span className="relative">{projectDetail.name}</span>
            </span>
            {" - "}
            {projectDetail.description}
          </h1>
        </div>
        <Image
          className="sm:h-full sm:max-h-[21.875rem] sm:w-full sm:max-w-[46.375rem]"
          width={345}
          height={163}
          src={projectDetail.image}
          alt={`An image of ${projectDetail.name}`}
        />
        <div className="flex flex-row gap-[2.56rem] sm:mt-[1.13rem]  sm:gap-[6.81rem]">
          {HeroLinks.map(({ text, href, Icon }) => (
            <HeroLink key={text} Icon={Icon} href={href} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroLink = ({
  Icon,
  href,
  text,
}: {
  Icon: React.FC;
  href: string;
  text: string;
}) => (
  <div className="flex flex-row items-center gap-[0.19rem]">
    <Icon />
    <Link
      href={href}
      className="smallBold text-primaryLight dark:text-primaryDark sm:text-[1.25rem] sm:leading-[1.625rem]"
    >
      {text}
    </Link>
    <CaseStudyArrow />
  </div>
);

export default CaseStudyDetailHero;
