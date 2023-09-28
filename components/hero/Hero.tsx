import { HeroImage } from "@/components/svg/HeroImage";
import HeroTexts from "./HeroTexts";
import HeroLinks from "./HeroLinks";

function Hero() {
  return (
    <section className="bg-white800 dark:bg-black300">
      <div className="flex flex-col justify-start pb-8 md:flex-row xl:pb-0 min-[1440px]:items-end 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="w-full px-6 pt-12 xl:pl-[5.31rem] xl:pr-0 xl:pt-[4.6875rem]">
          <HeroTexts />
          <HeroLinks />
        </div>
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
