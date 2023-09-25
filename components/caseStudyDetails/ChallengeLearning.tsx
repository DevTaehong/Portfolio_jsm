import { Card } from "@nextui-org/card";
import BulletPoints from "./BulletPoints";

const ChallengeLearning = ({
  challengesOrLearnings,
  bulletPoints,
  icon,
}: {
  challengesOrLearnings: string;
  bulletPoints: string[];
  icon: string;
}) => {
  return (
    <Card className="challengesLearnings border-0 shadow-none dark:bg-black300 sm:gap-[1.88rem] sm:px-10 sm:py-9">
      <h6
        className={`bodyBold ${
          challengesOrLearnings === "CHALLENGES"
            ? "text-challenges"
            : "text-learnings"
        }  sm:text-[1.25rem] sm:leading-[1.625rem]`}
      >
        {challengesOrLearnings}
      </h6>
      <BulletPoints
        bulletPoints={bulletPoints}
        icon={icon}
        challengesOrLearnings={challengesOrLearnings}
      />
    </Card>
  );
};

export default ChallengeLearning;
