import CaseStudyDetailHero from "@/components/caseStudyDetails/CaseStudyDetailHero";
import CaseStudyDetailRoleTechStack from "@/components/caseStudyDetails/CaseStudyDetailRoleTechStack";

const ProjectPage = ({ params }: { params: { project: string } }) => {
  const project = params.project;
  return (
    <main>
      <CaseStudyDetailHero project={project} />
      <CaseStudyDetailRoleTechStack project={project} />
    </main>
  );
};

export default ProjectPage;
