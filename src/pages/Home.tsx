import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-monsterrat bg-[#19191B] text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
