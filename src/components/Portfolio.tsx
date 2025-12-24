import { PRODUCT_INFO } from "../constants/data";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from 'framer-motion';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Portfolio() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      <div id="portfolio" className="container mx-auto mt-[150px] min-h-[calc(100vh-130px)] px-4 padding-30">
        <div className="text-center mb-10 md:mb-14 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase ">
            Nega meni tanlashingiz kerak ?
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
		Har bir loyiha — mening ijodiy yondashuvim va tajribamning namunasidir.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            loop
            pagination={{ clickable: true }}
            navigation={{
              prevEl,
              nextEl,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 15,
                navigation: {
                  enabled: false,
                },
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
                navigation: {
                  enabled: false,
                },
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24,
                navigation: {
                  enabled: true,
                },
              },
            }}
            onSlideChange={() => setPlayingIndex(null)}
          >
            {PRODUCT_INFO.portfolio.map((videoUrl, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl h-[calc(100vh-300px)] md:h-[350px] lg:h-[600px]">
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


          <motion.button
            ref={setPrevEl}
            className="hidden lg:flex items-center justify-center
          absolute left-[-70px] top-1/2 -translate-y-1/2
          w-14 h-14 rounded-full bg-white/10 hover:bg-white/20
          backdrop-blur text-white cursor-pointer z-10 text-2xl font-bold"
            whileHover={{
              scale: 1.15,
              rotate: -5,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            ←
          </motion.button>

          <motion.button
            ref={setNextEl}
            className="hidden lg:flex items-center justify-center
          absolute right-[-70px] top-1/2 -translate-y-1/2
          w-14 h-14 rounded-full bg-white/10 hover:bg-white/20
          backdrop-blur text-white cursor-pointer z-10 text-2xl font-bold"
            whileHover={{
              scale: 1.15,
              rotate: 5,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
