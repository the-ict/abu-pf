import play from "../assets/icons/play.png";
import PremierPro from "../assets/icons/premier.png";
import Davinci from "../assets/icons/davinci.png";
import Photoshop from "../assets/icons/photoshop.png";
import After from "../assets/icons/after-effects.png";
import Capcut from "../assets/icons/capcut.png";
import { motion } from "framer-motion";

interface IService {
  icon: string;
  title: string;
  description: string;
  bg_color: string;
}

function getExperienc(experience: string) {
  return "Ushbu dasturdagi ish tajribasi " + experience;
}

const services: IService[] = [
  {
    icon: PremierPro,
    title: "Premiere Pro",
    description: getExperienc("70/100"),
    bg_color: "bg-[#F04037]/10",
  },
  {
    icon: Photoshop,
    title: "Photoshop",
    description: getExperienc("30/100"),
    bg_color: "bg-[#F04037]/10",
  },
  {
    icon: After,
    title: "After Effects",
    description: getExperienc("40/100"),
    bg_color: "bg-[#F04037]/10",
  },
  {
    icon: Capcut,
    title: "CapCut",
    description: getExperienc("90/100"),
    bg_color: "bg-[#F04037]/10",
  },
  {
    icon: Davinci,
    title: "Davinci Resolve",
    description: getExperienc("30/100"),
    bg_color: "bg-[#FEDC5A]/10",
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2 }}
    >
      <div id="services" className="relative in-view">
        <div className="padding-30 container items-center mx-auto px-4">
          <div className="bg-[#5454D4]/10 h-[200px] w-[300px] lg:w-[400px] absolute -left-20 top-20 blur-[150px] pointer-events-none"></div>
          <div className="text-center mb-16 relative z-10">
            <img src={play} alt="play" className="mx-auto mb-6 opacity-50" />
            <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-[700px] mx-auto leading-tight">
              Men nimalarni bilaman ?
            </h1>
          </div>

          <div className="flex items-center flex-wrap justify-center max-md:flex-col max-md:items-center gap-8 md:gap-12 lg:gap-[100px] mt-10 md:mt-[100px] mx-auto place-items-center">
              {services.map((s, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex flex-col items-center justify-center gap-4 w-full max-w-[360px] p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10 group"
                >
                  <div
                    className={
                      "rounded-full p-6 transition-transform duration-300 group-hover:scale-110 " +
                      s.bg_color
                    }
                  >
                    <img
                      src={s.icon}
                      alt={s.title}
                      className="w-8 h-8 md:w-10 md:h-10"
                    />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold">{s.title}</h2>
                  <p className="w-full max-w-[300px] text-center text-white/60 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
