import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import ServiceIProvide from "@/components/ServiceIProvide";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main>
      <Hero />
      <MySkills />
      <ServiceIProvide />
      <WorkExperience />
      <FeaturedProjects />
      <Testimonials />
    </main>
  );
}
