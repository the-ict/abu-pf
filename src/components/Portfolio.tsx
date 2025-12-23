import { PRODUCT_INFO } from "../constants/data";
import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type IPlay = {
  [key: number]: boolean;
};

export default function Portfolio() {
  const [play, setPlay] = useState<IPlay>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="padding-30 mt-[130px] min-h-[calc(100vh-130px)] container mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl md:text-5xl mb-4">
          Why Enver Is The Best Choice?
        </h1>
        <p className="text-lg text-[#ffffff]/60 max-w-2xl mx-auto">
          Watch these videos to understand why you should use our services!
        </p>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="portfolio-slider">
          {PRODUCT_INFO.portfolio.map((video, index) => (
            <div key={index} className="px-2 outline-none">
              <div className="relative pt-[56.25%] rounded-xl overflow-hidden">
                <ReactPlayer
                  url={video}
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                  playing={play[index] || false}
                  controls
                  onPlay={() => setPlay({ ...play, [index]: true })}
                  onPause={() => setPlay({ ...play, [index]: false })}
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-8 space-x-2">
          {PRODUCT_INFO.portfolio.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}