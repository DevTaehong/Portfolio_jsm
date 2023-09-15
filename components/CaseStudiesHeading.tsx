const CaseStudiesHeading = ({ text }: { text: string }) => {
  return (
    <>
      <span className="relative inline-block">
        <span
          className={`${
            text === "Case" && "sm:w-[15rem]"
          } absolute top-[1.88rem] h-[0.8125rem] w-full shrink-0 bg-accentSecondary 
        lg:top-[3.6rem] lg:h-[1.68963rem]`}
        />
        <span className="relative">{text}</span>
      </span>{" "}
    </>
  );
};

export default CaseStudiesHeading;
