import AboutProject from "@/components/caseStudyDetails/AboutProject";
import CaseStudyDetailHero from "@/components/caseStudyDetails/CaseStudyDetailHero";
import CaseStudyDetailRoleTechStack from "@/components/caseStudyDetails/CaseStudyDetailRoleTechStack";
import ChallengesLearnings from "@/components/caseStudyDetails/ChallengesLearnings";
import FigmaDesign from "@/components/caseStudyDetails/FigmaDesign";
import MyProcess from "@/components/caseStudyDetails/MyProcess";
import OtherCaseStudies from "@/components/caseStudyDetails/OtherCaseStudies";
import ProblemStatement from "@/components/caseStudyDetails/ProblemStatement";

const ProjectPage = ({ params }: { params: { project: string } }) => {
  const project = params.project;
  return (
    <main>
      <CaseStudyDetailHero project={project} />
      <CaseStudyDetailRoleTechStack project={project} />
      <AboutProject project={project} />
      <ProblemStatement project={project} />
      <FigmaDesign project={project} />
      <MyProcess />
      <ChallengesLearnings project={project} />
      <OtherCaseStudies project={project} />
    </main>
  );
};

export default ProjectPage;
