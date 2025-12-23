import editing from "../assets/icons/editing.png";
import graphicDesigner from "../assets/icons/graphic-designer.png";
import videograph from "../assets/icons/videograph.png";
import play from "../assets/icons/play.png";

interface IService {
    icon: string;
    title: string;
    description: string;
    bg_color: string;
}

const services: IService[] = [
    {
        icon: videograph,
        title: "Videography",
        description: "Create a platform with the best and coolest quality from us.",
        bg_color: "bg-[#F04037]/10"
    },
    {
        icon: graphicDesigner,
        title: "Graphik Designer",
        description: "We provide Graphic Design services, with the best designers",
        bg_color: "bg-[#FEDC5A]/10"
    },
    {
        icon: editing,
        title: "Editing",
        description: "We provide Editing services, with the best editors",
        bg_color: "bg-[#F04037]/10"
    }
];

export default function Services() {
    return (
        <div id="services" className="relative">
            <div className="padding-30 container items-center mx-auto px-4">
                <div className="bg-[#5454D4]/10 h-[200px] w-[300px] lg:w-[400px] absolute -left-20 top-20 blur-[150px] pointer-events-none"></div>
                <div className="text-center mb-16 relative z-10">
                    <img src={play} alt="play" className="mx-auto mb-6 opacity-50" />
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-[700px] mx-auto leading-tight">
                        The services we provide for you!
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[100px] mt-10 md:mt-[100px]">
                    {services.map((s, index) => (
                        <div key={index} className="cursor-pointer flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10 group">
                            <div className={"rounded-full p-6 transition-transform duration-300 group-hover:scale-110 " + s.bg_color}>
                                <img src={s.icon} alt={s.title} className="w-8 h-8 md:w-10 md:h-10" />
                            </div>
                            <h2 className="text-xl md:text-2xl font-bold">{s.title}</h2>
                            <p className="w-full max-w-[300px] text-center text-white/60 leading-relaxed">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
