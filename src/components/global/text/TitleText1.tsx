import React, { ReactNode } from "react";
type propsType = {
  children: string;
};
const TitleText1 = (props: propsType) => {
  const { children } = props;
  return (
    <span className="text-2xl md:text-4xl poppins-thin font-bold mr-3">
      {children}
    </span>
  );
};

export default TitleText1;
