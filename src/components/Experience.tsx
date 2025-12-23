import resume from "../assets/docs/Akbarov.ads RESUME.pdf.pdf"
import { motion } from "framer-motion";

interface IExperience {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
}

interface IEducation {
    title: string;
    institution: string;
    period: string;
    description: string;
}

const experiences: IExperience[] = [
    {
        title: "Videograf va montaj ustasi",
        company: "Madaniyat va Ma'rifat telekanali, MTRK",
        period: "2023-yil (6-7 oy)",
        responsibilities: [
            "Norasmiy tarzda video operator va montaj ustasi sifatida faoliyat yuritgan.",
            "Konsertlar, spektakllar va madaniy tadbirlarni suratga olishda ishtirok etgan.",
            "Televideniya talablari asosida videomateriallarni professional darajada montaj qilgan.",
            "Sahnadagi syomkalarni kreativ burchakdan yoritish va sifatli ko'rsatishga e'tibor qaratgan.",
            "Tezkor va aniqlik talab qiluvchi muhitda samarali ishlash ko'nikmasini rivojlantirgan."
        ]
    },
    {
        title: "Videograf",
        company: "Mehrigiyo kompaniyasi",
        period: "2022-yil",
        responsibilities: [
            "Reklama roliklari ustida ishlagan, 3-4 ta telekanal uchun efirga chiqadigan videolarni suratga olib, montaj qilgan.",
            "Mahsulot va kompaniya imidjiga mos vizual yechimlar ishlab chiqqan, syomkadan montajgacha bo'lgan jarayonni mustaqil bajargan."
        ]
    }
];

const educations: IEducation[] = [
    {
        title: "Core Digital tomonidan",
        institution: "@SINCERELYABROR",
        period: "01.11.2024 - 11.02.2025",
        description: "SMM bu kelajak - ijtimoiy tarmoqlarni yuritish va rivojlantirish kursining VIP tarifini muvaffaqiyatli tamomlagan."
    },
    {
        title: "YOSH JURNALISTLAR MAKTABI",
        institution: "«Mening yurtim yosh jurnalistlar» maktabi",
        period: "2024",
        description: "«Teleradio jurnalistika» uch oylik o'quv kursini tamomlaganligini tasdiqlovchi 1-darajali DIPLOM bilan taqdirlandi."
    }
];

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 2 }}
        >
            <section id="experience" className="relative py-12 md:py-20 px-4">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="bg-linear-to-r from-[#5454D4] to-[#5454D4] h-[300px] w-[500px] absolute right-[-100px] top-1/2 -translate-y-1/2 blur-[180px] opacity-10 pointer-events-none"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                <span className="w-10 h-1 bg-[#5454D4] inline-block"></span>
                                Ish Tajribasi
                            </h2>
                            <div className="space-y-12">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-[#5454D4]/30 hover:border-[#5454D4] transition-colors duration-300">
                                        <div className="absolute w-4 h-4 bg-[#5454D4] rounded-full -left-[9px] top-2 shadow-[0_0_10px_#5454D4]"></div>
                                        <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                                        <div className="text-[#5454D4] font-medium mb-3">{exp.company} | {exp.period}</div>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((res, i) => (
                                                <li key={i} className="text-[#ffffff]/60 flex gap-2">
                                                    <span className="text-[#5454D4]">•</span>
                                                    {res}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                <span className="w-10 h-1 bg-[#5454D4] inline-block"></span>
                                Ta'lim
                            </h2>
                            <div className="space-y-12">
                                {educations.map((edu, index) => (
                                    <div key={index} className="bg-[#ffffff]/5 p-8 rounded-2xl border border-white/10 hover:border-[#5454D4]/50 transition-all duration-300">
                                        <div className="text-sm text-[#5454D4] font-bold mb-2 uppercase tracking-wider">{edu.period}</div>
                                        <h3 className="text-2xl font-semibold mb-2">{edu.title}</h3>
                                        <div className="text-[#ffffff]/80 font-medium mb-4 italic">{edu.institution}</div>
                                        <p className="text-[#ffffff]/60">{edu.description}</p>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center">
                    <div className="mt-16">
                        <a href={resume} download className="flex items-center gap-3 bg-[#5454D4] hover:bg-[#4444c4] px-8 py-4 cursor-pointer text-[#ffffff] rounded-xl transition-all duration-300 shadow-lg shadow-[#5454D4]/20 group">
                            <span className="font-bold">Rezyumeni yuklab olish</span>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:translate-y-1 transition-transform duration-300"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
