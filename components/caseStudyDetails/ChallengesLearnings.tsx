import { projectDetails } from "@/constants";
import { challengeImage, tick } from "@/public";
import ChallengeLearning from "./ChallengeLearning";
import CaseStudiesDetailHeadings from "./CaseStudiesDetailHeadings";

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
          <CaseStudiesDetailHeadings
            smallText="Problem"
            headingText="Challenges & Learnings"
          />
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
