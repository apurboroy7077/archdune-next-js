import React, { ReactNode } from "react";
import SectionType1 from "./SectionType1";
type propsType = {
  children: ReactNode;
  className?: string;
};

const SectionType2 = (props: propsType) => {
  const { children, className } = props;
  return (
    <SectionType1
      className={` bg-[#ECECEC] py-5 lg:py-7  px-3 lg:px-7 rounded ${className}`}
    >
      {children}
    </SectionType1>
  );
};

export default SectionType2;
