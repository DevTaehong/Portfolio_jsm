"use client";

import BulletPoint from "./BulletPoint";

const BulletPoints = ({
  bulletPoints,
  challengesOrLearnings,
  icon,
}: {
  bulletPoints: string[];
  challengesOrLearnings: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-col gap-6">
      {bulletPoints?.map((bulletPoint: string, index) => (
        <BulletPoint
          bulletPoint={bulletPoint}
          challengesOrLearnings={challengesOrLearnings}
          index={index}
          icon={icon}
          key={bulletPoint}
        />
      ))}
    </div>
  );
};
export default BulletPoints;
