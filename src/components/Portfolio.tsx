import { PRODUCT_INFO } from "../constants/data";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Portfolio() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <div id="portfolio" className="container mx-auto mt-[150px] min-h-[calc(100vh-130px)] px-4">
      <div className="text-center mb-10 md:mb-14 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Why Enver Is The Best Choice?
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          Watch these short demos to see how our product works in real life.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides
          loop
          pagination={{ clickable: true }}
          navigation={{
            prevEl,
            nextEl,
          }}
          breakpoints={{
            0: {
              navigation: {
                enabled: false,
              },
            },
            1024: {
              navigation: {
                enabled: true,
              },
            },
          }}
          onSlideChange={() => setPlayingIndex(null)}
        >
          {PRODUCT_INFO.portfolio.map((videoUrl, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl">
                <ReactPlayer
                  src={videoUrl}
                  width="100%"
                  height="100%"
                  playing={playingIndex === index}
                  controls={playingIndex === index}
                />

                {playingIndex !== index && (
                  <button
                    onClick={() => setPlayingIndex(index)}
                    className="absolute inset-0 flex items-center justify-center
                    bg-black/40 hover:bg-black/60 transition"
                  >
                    <div className="w-20 h-20 rounded-full bg-white
                    flex items-center justify-center text-black text-3xl shadow-xl cursor-pointer">
                      ▶
                    </div>
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          ref={setPrevEl}
          className="hidden lg:flex items-center justify-center
          absolute left-[-70px] top-1/2 -translate-y-1/2
          w-14 h-14 rounded-full bg-white/10 hover:bg-white/20
          backdrop-blur text-white transition cursor-pointer z-10"
        >
          ←
        </button>

        <button
          ref={setNextEl}
          className="hidden lg:flex items-center justify-center
          absolute right-[-70px] top-1/2 -translate-y-1/2
          w-14 h-14 rounded-full bg-white/10 hover:bg-white/20
          backdrop-blur text-white transition cursor-pointer z-10"
        >
          →
        </button>
      </div>
    </div>
  );
}
