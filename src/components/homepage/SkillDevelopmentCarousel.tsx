"use client";
import skillDevelopmentCarouselData from "@/data/data-1/skill-development-data";
import myId from "@/functions/utils/myId";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const SkillDevelopmentCarousel = () => {
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
      <div>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          {skillDevelopmentCarouselData.map((data) => {
            const { title, description, imageSrc } = data;
            return (
              <SwiperSlide key={myId()}>
                <div
                  className="bg-[#ECECEC] rounded overflow-hidden text-center pb-5 h-[23rem] md:h-[27rem] mx-3 my-2"
                  style={{ boxShadow: "1px 1px 3px black" }}
                >
                  <div>
                    <img src={imageSrc} alt="" className="w-full" />
                  </div>
                  <div className="px-3 mt-5">{title}</div>
                  <div className="px-3 mt-3 mb-3 text-xs">{description}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="text-center mt-7">
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
      </div>
    </div>
  );
};

export default SkillDevelopmentCarousel;
