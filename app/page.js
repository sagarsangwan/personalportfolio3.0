import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Aboutme from "@/components/aboutme";
import Experience from "@/components/experience";

import Skills from "@/components/skills";
export default function Home() {
  return (
    <main className="container border-r-2 height-89vh md:h-screen">
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Experience />
    </main>
  );
}
