"use client";

import React from "react";
type propsType = {
  imageSrc: string;
  buttonText: string;
  firstSectionClassName?: string;
  secondSectionClassName?: string;
};
const DoubleSectionButton = (props: propsType) => {
  const {
    imageSrc,
    buttonText,
    firstSectionClassName,
    secondSectionClassName,
  } = props;
  return (
    <button className="flex w-[7rem] h-[2.5rem] lg:h-[2.5rem] rounded overflow-hidden border-[1px] border-[grey]">
      <div className={`w-[50%] h-full ${firstSectionClassName}`}>
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className={`bg-[#E5E5E5]  h-full w-[50%]  flex items-center justify-center ${secondSectionClassName} lg:text-base`}
      >
        {buttonText}
      </div>
    </button>
  );
};

export default DoubleSectionButton;
