"use client";
import myId from "@/functions/utils/myId";
import React from "react";
import { SwiperSlide } from "swiper/react";
type propsType = {
  data: {
    imageSrc: string;
    title: string;
    description: string;
  };
};
const HomePageCarouselSlide1 = (props: propsType) => {
  const { data } = props;
  const { imageSrc, title, description } = data;

  return (
    <SwiperSlide key={myId()}>
      <div
        className="bg-[#ECECEC] rounded overflow-hidden text-center pb-5   md:h-[27rem] min-h-fit mx-3 my-2 hover:shadow-lg cursor-pointer"
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
};

export default HomePageCarouselSlide1;
