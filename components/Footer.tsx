import { Link } from "@nextui-org/link";

import { FooterCard, MobileFooterCard } from "@/components/svg/footer";
import { links } from "@/constants";

function Footer() {
  return (
    <footer className="bg-white900 dark:bg-black200">
      <div
        className="flex flex-col items-center gap-[6rem] px-6 py-12 md:items-stretch xl:px-[5.31rem]
        xl:pb-14 xl:pt-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]"
      >
        <MobileFooterCard />
        <FooterCard />
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:border-t md:border-white800 md:pt-8 dark:md:border-black300">
          <p className="bodyRegular text-black400 dark:text-white800">{`© ${new Date().getFullYear()} Taehong. All rights reserved.`}</p>
          <div className="flex flex-row justify-center gap-6">
            {links.map((link) => (
              <Link key={link.link} isExternal href={link.link}>
                <link.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
