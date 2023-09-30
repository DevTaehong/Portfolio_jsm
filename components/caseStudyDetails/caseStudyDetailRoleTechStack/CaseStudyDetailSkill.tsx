"use client";

import { motion } from "framer-motion";

const CaseStudyDetailSkill = ({
  Tech,
}: {
  Tech: React.FC<{ isCaseDetailPage: boolean }>;
}) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Tech isCaseDetailPage={true} />
    </motion.div>
  );
};

export default CaseStudyDetailSkill;
