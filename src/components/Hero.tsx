import circle from "../assets/icons/circle.png";
import plus from "../assets/icons/plus.png";
import line from "../assets/icons/line.png";
import play from "../assets/icons/play.png";
import { PRODUCT_INFO } from "../constants/data";

export default function Hero() {
  return (
    <div className="padding-30 container grid grid-cols-1 lg:grid-cols-2 lg:items-center mx-auto min-h-[calc(100vh-100px)] gap-10 lg:gap-0 bg-[#04040c] relative">
      {/* Blurred purple background - positioned outside animated content */}
      <div className="bg-[#5454D4]/30 absolute -left-40 top-10 lg:-left-120 w-[300px] h-[300px] lg:w-[1000px] lg:h-[500px] rounded-full lg:rounded-3xl lg:rotate-35 z-0 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 z-10 w-full in-view">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-[100px] leading-tight z-5">
          akbarov.ads
        </h1>
        <p className="font-normal text-white/70 text-lg md:text-xl leading-relaxed max-w-[600px] z-5">
          Salom! Men Akbarov Abdulloh, SMM mutaxassisi, mobilograf va kreativ
          loyihalar yaratuvchisiman. Ushbu sayt orqali mening portfolioim,
          tajribam va yaratuvchi ishlanmalarim bilan tanishishingiz mumkin.
        </p>
        <button className="flex items-center gap-2 bg-[#5454D4] hover:bg-[#4444c4] px-8 py-4 cursor-pointer text-white rounded-[5px] transition-all duration-300 z-5 shadow-lg shadow-[#5454D4]/20">
          <span
            className="font-semibold text-lg"
            onClick={() =>
              window.open(
                "https://www.instagram.com/abuchamniki?igsh=MXE2emgyeHQwdm53aQ%3D%3D&utm_source=qr",
                "_blank"
              )
            }
          >
            Bizni kuzatib boring
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.30956 4.64584C5.30956 4.27929 5.6067 3.98215 5.97325 3.98215L11.2828 3.98215C11.6493 3.98215 11.9465 4.27929 11.9465 4.64584V9.95536C11.9465 10.3219 11.6493 10.6191 11.2828 10.6191C10.9162 10.6191 10.6191 10.3219 10.6191 9.95536V6.24813L5.11517 11.752C4.85598 12.0112 4.43576 12.0112 4.17657 11.752C3.91738 11.4929 3.91738 11.0726 4.17657 10.8134L9.68048 5.30953L5.97325 5.30953C5.6067 5.30953 5.30956 5.01238 5.30956 4.64584Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-350px)] w-full">
        <img
          src={line}
          alt="LINE"
          className="absolute top-0 right-0 w-16 md:w-auto go-and-down"
        />
        <img
          src={circle}
          alt="CIRCLE"
          className="absolute bottom-0 left-0 w-16 md:w-auto go-and-down"
        />
        <img
          src={play}
          alt="PLAY"
          className="absolute bottom-0 right-0 w-16 md:w-auto opacity-50 lg:opacity-100 go-and-down"
        />
        <img
          src={plus}
          alt="PLUS"
          className="absolute top-0 left-0 w-10 md:w-auto go-and-down"
        />

        <div className="w-full flex items-center justify-center h-full relative">
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 rotate-25 z-50">
            {/* ASOSIY CONTAINER */}
            <div className="absolute inset-0 rounded-2xl bg-[#5454D4] overflow-hidden">
              {/* O'NG BORDER (PASTKI) — RASM ICHIDA */}
              <div className="absolute inset-0 border-2 border-white rounded-2xl clip-right z-10" />

              {/* RASM — O'RTADA */}
              <img
                src={PRODUCT_INFO.picture}
                alt={PRODUCT_INFO.picture}
                className="absolute inset-0 w-full h-full object-contain z-15 -rotate-20 top-5"
              />

              {/* CHAP BORDER (TEPADA) — RASM TASHQARIDA */}
              <div className="absolute inset-0 border-2 border-white rounded-2xl clip-left z-20" />
            </div>
          </div>

          {/* ORQA SHADOW BOX */}
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-2xl border-2 border-white rotate-25 absolute top-[30%] opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
