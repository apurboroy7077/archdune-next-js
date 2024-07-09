import React, { ReactNode } from "react";
type propsType = {
  children: string;
};
const TitleText2 = (props: propsType) => {
  const { children } = props;
  return (
    <span className=" text-2xl md:text-4xl font-bold mr-2 ">{children}</span>
  );
};

export default TitleText2;
