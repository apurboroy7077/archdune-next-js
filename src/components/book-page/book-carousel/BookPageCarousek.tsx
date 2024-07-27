"use client";
import skillDevelopmentCarouselData from "@/data/data-1/skill-development-data";
import myId from "@/functions/utils/myId";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import juryData from "@/data/data-1/jury-data";
const BookPageCarousel = () => {
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
      <div className="max-w-[50rem] mx-auto mt-7 lg:mt-10 relative">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {juryData.map((data) => {
            const { name, universityName, imageSrc } = data;
            return (
              <SwiperSlide key={myId()}>
                <div>
                  <img src="/images/sketchbook/sketchbook-1.jpg" alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute top-[50%] lg:top-[20rem] left-[0.5rem] z-50">
          <i
            onClick={handlePrevious}
            className="fa-solid fa-angle-left text-[4rem] opacity-[0.5] active:scale-[0.9]"
          ></i>
        </div>
        <div className="absolute top-[50%] lg:top-[20rem] right-[0.5rem] z-50">
          <i
            onClick={handleNext}
            className="fa-solid fa-angle-right text-[4rem] opacity-[0.5] active:scale-[0.9]"
          ></i>
        </div>
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

export default BookPageCarousel;
