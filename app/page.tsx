import FeaturedProjects from "@/components/featuredProjects/FeaturedProjects";
import Hero from "@/components/hero/Hero";
import MySkills from "@/components/mySkills/MySkills";
import ServiceIProvide from "@/components/myServices/ServiceIProvide";
import Testimonials from "@/components/testimonials/Testimonials";
import WorkExperience from "@/components/workExperience/WorkExperience";

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
