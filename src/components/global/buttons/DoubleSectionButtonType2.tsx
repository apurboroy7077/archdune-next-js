"use client";
import React, { useState } from "react";
type propsType = {
  imageSrc: string;
  buttonText: string;
  className?: string;
};
type hoverStatusType = "HOVERING" | "NOT_HOVERING";
const DoubleSectionButtonType2 = (props: propsType) => {
  const { imageSrc, buttonText, className } = props;
  const [hoverStatus, setHoverStatus] = useState(
    "NOT_HOVERING" as hoverStatusType
  );
  const handleMouseEnter = () => {
    setHoverStatus("HOVERING");
  };
  const handleMouseLeave = () => {
    setHoverStatus("NOT_HOVERING");
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex w-[13rem] h-[2.5rem] lg:h-[2.5rem] rounded overflow-hidden border-[1px] border-[grey] active:scale-[0.95] ${className}`}
    >
      <div className={`w-[25%] h-full overflow-hidden`}>
        <img
          src={imageSrc}
          alt=""
          className={`w-full h-full object-cover object-center transition-all duration-500 ${
            hoverStatus === "HOVERING" ? "scale-[1.1]" : ""
          }`}
        />
      </div>
      <div
        className={`  h-full w-[75%]  flex items-center justify-center text-sm px-1 py-1 lg:text-base hover:bg-[#E5E5E5] transition-all duration-300`}
      >
        {buttonText}
      </div>
    </button>
  );
};

export default DoubleSectionButtonType2;
