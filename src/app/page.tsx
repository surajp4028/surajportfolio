import { SiteNavbar } from "@/components/sections/site-navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Featured } from "@/components/sections/featured";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-clip">
      <SiteNavbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Featured />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
