"use client";
import skillDevelopmentCarouselData from "@/data/data-1/skill-development-data";
import myId from "@/functions/utils/myId";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import juryData from "@/data/data-1/jury-data";
const JuryPanelCarousel = () => {
  const swiperRef = useRef(null);
  const handlePrevious = useCallback(() => {
    if (swiperRef.current) {
      const swiperElement = swiperRef.current as any;
      swiperElement.swiper.slidePrev();
    }
  }, []);
  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      const swiperElement = swiperRef.current as any;
      swiperElement.swiper.slideNext();
    }
  }, []);
  return (
    <div>
      <div className="max-w-[75rem] mx-auto mt-7 lg:mt-10">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {juryData.map((data) => {
            const { name, universityName, imageSrc } = data;
            return (
              <SwiperSlide key={myId()}>
                <div>
                  <div className="flex items-center justify-center  w-full">
                    <div className="h-[15rem] lg:h-[17rem] w-[15rem] lg:w-[17rem] rounded-full overflow-hidden">
                      <img
                        src={imageSrc}
                        alt=""
                        className="  object-cover object-center grayscale-[100%] hover:grayscale-[0%] hover:scale-[1.1]  transition-all duration-1000  cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="text-center text-lg mt-3 font-bold">
                    {name}
                  </div>
                  <div className="opacity-[0.7] text-center text-sm">
                    {universityName}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="text-center mt-7">
        <button
          onClick={handlePrevious}
          className="border-[2px] border-[black] px-3 md:px-5 py-1 rounded active:scale-[0.95]"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className="text-sm border-[2px] border-[black] px-5 py-2 mx-2 rounded">
          View All Courses <i className="fa-regular fa-circle-right ml-1"></i>
        </button>
        <button
          onClick={handleNext}
          className="border-[2px] border-[black] px-3 md:px-5 py-1 rounded active:scale-[0.95]"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div> */}
    </div>
  );
};

export default JuryPanelCarousel;
