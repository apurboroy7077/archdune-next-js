"use client";
import SectionType1 from "@/components/global/section/SectionType1";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import AutoPlay from "embla-carousel-autoplay";
const EmblaTest = () => {
  const slideNumber = 6;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      slidesToScroll: 3,
    },
    [AutoPlay({ delay: 1000 })]
  );
  const slides = Array.from(Array(slideNumber).keys());

  return (
    <SectionType1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((index) => {
            return (
              <div className="embla__slide " key={Math.random().toString()}>
                <div className="bg-[red]">{index}</div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionType1>
  );
};

export default EmblaTest;
