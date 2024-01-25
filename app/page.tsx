import { HoverProvider } from "@/context/HoverContext";

import FeaturedProjects from "@/components/featuredProjects/FeaturedProjects";
import Hero from "@/components/hero/Hero";
import MySkills from "@/components/mySkills/MySkills";
import ServiceIProvide from "@/components/myServices/ServiceIProvide";
import Testimonials from "@/components/testimonials/Testimonials";
import WorkExperience from "@/components/workExperience/WorkExperience";

export default async function Home() {
  return (
    <main>
      <Hero />
      <MySkills />
      <ServiceIProvide />
      <HoverProvider>
        <WorkExperience />
      </HoverProvider>
      <FeaturedProjects />
      <Testimonials />
    </main>
  );
}
