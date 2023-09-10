import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import ServiceIProvide from "@/components/ServiceIProvide";

export default function Home() {
  return (
    <main className="bg-white800 dark:bg-black300">
      <Hero />
      <MySkills />
      <ServiceIProvide />
    </main>
  );
}
