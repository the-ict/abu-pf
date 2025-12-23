import circle from "../assets/icons/circle.png";
import plus from "../assets/icons/plus.png";
import line from "../assets/icons/line.png";
import play from "../assets/icons/play.png";

export default function Hero() {
  return (
    <div className="padding-30 container grid grid-cols-2 items-center">
      <div className="grid-cols-1 space-y-5">
        <div className="bg-linear-to-r from-[#5454D4]/40 to-[5454D4]/42 absolute top-0 w-[1400px] h-[500px] -left-120 rounded-3xl rotate-35 z-1 blur-3xl"></div>
        <h1 className="font-bold text-[100px] z-5">
          Build Your Awesome Platform
        </h1>
        <p className="font-normal text-[#ffffff]/70 leading-9 w-[600px] z-5">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
        <button className="flex items-center gap-2 bg-[#5454D4] px-6 py-3 cursor-pointer text-[#ffffff] rounded-[5px]">
          <span>Our Services</span>
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
      <div className="grid-cols-1 relative h-[calc(100vh-350px)]">
        <img src={line} alt="LINE" className="absolute top-0 right-0" />
        <img src={circle} alt="CIRCLE" className="absolute bottom-0 left-0" />
        <img src={play} alt="PLAY" className="absolute bottom-0 right-0" />
        <img src={plus} alt="PLUS" className="absolute top-0 left-0" />

        <div className="w-full flex items-center justify-center h-full relative">
          <div className="w-50 h-50 rounded-2xl border-2 border-white rotate-25 absolute top-[40%] bg-[#5454D4] z-10"></div>
          <div className="w-50 h-50 rounded-2xl border-2 border-white rotate-25 absolute top-[30%]"></div>
        </div>
      </div>
    </div>
  );
}
