import { projectDetails } from "@/constants";
import { challengeImage, tick } from "@/public";
import ChallengeLearning from "./ChallengeLearning";

const ChallengesLearnings = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];

  const challengesOrLearnings = [
    {
      text: "CHALLENGES",
      value: projectDetail?.challenges,
      icon: challengeImage,
    },
    { text: "LEARNINGS", value: projectDetail?.learnings, icon: tick },
  ];

  return (
    <section className="bg-white900 dark:bg-black200">
      <div className="flex flex-col gap-6 px-6 py-9 sm:gap-[1.88rem] xl:px-[17.5rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-[0.56rem] sm:gap-[0.62rem]">
            <p className="technologiesUsed dark:text-primaryDark sm:text-[0.875rem] sm:leading-[1.26875rem]">
              Problem
            </p>
            <h6 className="caseStudyDetailTechStack dark:text-white900 sm:text-[2rem] sm:leading-[2.1rem]">
              Challenges & Learnings
            </h6>
          </div>
        </div>
        {challengesOrLearnings.map(({ text, value, icon }) => (
          <ChallengeLearning
            key={text}
            challengesOrLearnings={text}
            bulletPoints={value}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ChallengesLearnings;
