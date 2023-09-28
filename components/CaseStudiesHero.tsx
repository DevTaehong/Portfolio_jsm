import CaseStudiesHeroTexts from "./CaseStudiesHeroTexts";

function CaseStudiesHero() {
  return (
    <section className="flex flex-col items-center gap-5 bg-white800 px-6 py-12 text-center dark:bg-black300 lg:gap-[1.8rem]">
      <CaseStudiesHeroTexts />
    </section>
  );
}

export default CaseStudiesHero;
