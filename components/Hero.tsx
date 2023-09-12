import Image from "next/image";
import Link from "next/link";

import { contactIcon } from "@/public";
import { HeroImage } from "./icons";

const Hero = () => {
  return (
    <section className="bg-white800 dark:bg-black300">
      <div className="flex flex-col justify-start pb-8 md:flex-row xl:items-center xl:pb-0 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="w-full px-6 pt-12 xl:pl-[5.31rem] xl:pr-0 xl:pt-[6rem]">
          <p className="text-sm font-semibold uppercase not-italic leading-[1.1375rem] tracking-[0.2625rem] text-primaryLight dark:text-primaryDark xl:text-[1.25rem]">
            HI, I AM TAEHONG
          </p>
          <h1 className="heading1 pt-5 xl:pt-[1.69rem]">
            Professional
            <br />
            <span className="relative inline-block">
              <span className="absolute top-[1.88rem] h-[1.1875rem] w-full shrink-0 bg-accentSecondary xl:top-[3.3rem] xl:h-[1.757rem]" />
              <span className="relative">Web Developer</span>
            </span>
            <br />
            based in Canada
          </h1>
          <p className="w-full max-w-[32rem] pb-5 pt-[0.87rem] text-xs font-normal not-italic leading-[1.1625rem] text-white500 dark:text-white800 xl:pb-9 xl:pt-[0.63rem] xl:text-[1.125rem] xl:leading-[1.8rem]">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </p>
          <div className="gap-[1.13rem] xl:flex xl:max-w-[32rem] xl:flex-row xl:items-baseline">
            <Link
              rel="noreferrer"
              href="#featuredProject"
              className="primaryButton primaryButtonText dark:bg-primaryDark xl:h-[4.3rem] xl:max-w-[11.625rem] xl:px-3 xl:py-5 xl:text-[1.125rem] xl:leading-[1.8rem]"
            >
              My Work
            </Link>
            <Link
              href="mailto:minth1123@icloud.com"
              className="contactButton contactButtonText mb-[1.69rem] mt-[0.88rem] dark:bg-black200 dark:text-white900 xl:mb-[6.06rem] xl:h-[4.3rem] xl:max-w-[19.06rem] xl:px-6 xl:py-5 xl:text-[1.125rem] xl:leading-[1.8rem]"
            >
              <span>minth1123@icloud.com</span>
              <Image
                className="xl:h-[1.3125rem] xl:w-[1.3125rem]"
                src={contactIcon}
                alt="contact icon"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
