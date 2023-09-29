import { Link } from "@nextui-org/link";

import { CaseStudyArrow } from "../svg/caseStudyDetails";
const HeroLink = ({
  Icon,
  href,
  text,
}: {
  Icon: React.FC;
  href: string;
  text: string;
}) => (
  <div className="group flex flex-row items-center gap-[0.19rem]">
    <Icon />
    <Link
      href={href}
      className="smallBold  text-primaryLight dark:text-primaryDark sm:text-[1.25rem] sm:leading-[1.625rem]"
    >
      {text}
    </Link>
    <CaseStudyArrow />
  </div>
);

export default HeroLink;
