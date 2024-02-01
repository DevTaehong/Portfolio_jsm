import { Link } from "@nextui-org/link";

import { CaseStudyArrow } from "../../svg/caseStudyDetails";
const HeroLink = ({
  Icon,
  href,
  text,
}: {
  Icon: React.FC;
  href: string;
  text: string;
}) => (
  <Link
    href={href}
    isExternal
    className="smallBold group inline-flex gap-x-[0.19rem] text-primaryLight group-hover:opacity-80 group-hover:transition-opacity dark:text-primaryDark sm:text-[1.25rem] sm:leading-[1.625rem]"
  >
    <Icon />
    {text}
    <CaseStudyArrow />
  </Link>
);

export default HeroLink;
