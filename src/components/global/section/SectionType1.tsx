import React, { ReactNode } from "react";
type propsType = {
  children: ReactNode;
  className?: string;
};

const SectionType1 = (props: propsType) => {
  const { children, className } = props;
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div
            className={`mx-3 mt-16 lg:mt-36 max-w-[100rem] w-[100%] ${className}`}
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionType1;
