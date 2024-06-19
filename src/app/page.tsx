import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HeroParallaxDemo from "@/components/Projects";
import Aproch from "@/components/Aproch";
import Experince from "@/components/Experince";
import Tech from "@/components/tech";
import Footer from "../components/footer"
Tech
Experince

Aproch
HeroParallaxDemo

Navbar

export default function Home() {
  return (
    <main>
      <Hero />
      <Tech />
      <HeroParallaxDemo />
      <Experince />
      <Aproch />
      <div className="md:mt-[190px] mt-[800px]">
        <Footer />
      </div>
      
    </main>
  );
}
