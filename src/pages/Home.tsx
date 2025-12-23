import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="bg-[#04040c] text-white overflow-x-hidden">
      <div className="relative z-10 font-monsterrat">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Experience />
      </div>
    </div>
  );
}
