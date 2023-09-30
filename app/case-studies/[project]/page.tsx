import AboutProject from "@/components/caseStudyDetails/AboutProject";
import CaseStudyDetailHero from "@/components/caseStudyDetails/caseStudyDetailsHero/CaseStudyDetailHero";
import CaseStudyDetailRoleTechStack from "@/components/caseStudyDetails/caseStudyDetailRoleTechStack/CaseStudyDetailRoleTechStack";
import ChallengesLearnings from "@/components/caseStudyDetails/caseStudyLearnings/ChallengesLearnings";
import FigmaDesign from "@/components/caseStudyDetails/FigmaDesign";
import MyProcess from "@/components/caseStudyDetails/myProcess/MyProcess";
import OtherCaseStudies from "@/components/caseStudyDetails/otherCaseStudies/OtherCaseStudies";
import ProblemStatement from "@/components/caseStudyDetails/ProblemStatement";
import { getCaseStudiesDetail } from "@/sanity/sanity-utils";
import { CaseStudiesDetailType } from "@/types";

const ProjectPage = async ({ params }: { params: { project: string } }) => {
  const projectParam = params.project;
  const caseStudiesDetail: CaseStudiesDetailType[] =
    await getCaseStudiesDetail();

  const projectDetail = caseStudiesDetail.find(
    (caseStudiesDetail) => caseStudiesDetail.name.toLowerCase() === projectParam
  );

  return (
    <main>
      {projectDetail && (
        <>
          <CaseStudyDetailHero projectDetail={projectDetail} />
          <CaseStudyDetailRoleTechStack project={projectDetail} />
          <AboutProject project={projectDetail} />
          <ProblemStatement project={projectDetail} />
          <FigmaDesign project={projectDetail} />
          <MyProcess />
          <ChallengesLearnings project={projectDetail} />
          <OtherCaseStudies
            projects={caseStudiesDetail}
            projectParam={projectParam}
          />
        </>
      )}
    </main>
  );
};

export default ProjectPage;
