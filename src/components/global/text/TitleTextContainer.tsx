import React, { ReactNode } from "react";
type propsType = {
  children: ReactNode;
};
const TitleTextContainer = (props: propsType) => {
  const { children } = props;
  return <div className="text-center mb-5 lg:mb-7">{children}</div>;
};

export default TitleTextContainer;
