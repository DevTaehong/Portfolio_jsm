const heroText = ["Case", "Studies"];

function CaseStudiesHero() {
  return (
    <section className="flex flex-col items-center gap-5 bg-white800 px-6 py-12 text-center dark:bg-black300 lg:gap-[1.8rem]">
      <h1 className="mobileHeading1 max-w-[21rem] dark:text-white800 sm:max-w-[41.125rem] lg:text-[4rem] lg:leading-[5.2rem] lg:tracking-[-0.04rem]">
        Recent{" "}
        {heroText.map((text) => (
          <>
            <span key={text} className="relative inline-block">
              <span
                className={`${
                  text === "Case" && "sm:w-[15rem]"
                } absolute top-[1.88rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary 
                lg:top-[3.6rem] lg:h-[1.68963rem]`}
              />
              <span className="relative">{text}</span>
            </span>{" "}
          </>
        ))}
      </h1>
      <p className="smallRegular max-w-[21.125rem] text-white500 dark:text-white800 lg:max-w-[44rem] lg:text-[1.25rem] lg:leading-[1.875rem]">
        {`Dive into my recent success stories and discover how I've helped clients
        overcome challenges, innovate, and achieve their goals`}
      </p>
    </section>
  );
}

export default CaseStudiesHero;
