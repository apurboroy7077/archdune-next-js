"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
type activeStatusType = "ACTIVE" | "INACTIVE";
type propsType = {
  mainName: string;
  properties: {
    name: string;
    link: string;
  }[];
};
const BigScreenLinkType2 = (props: propsType) => {
  const pathName = usePathname();
  const { mainName, properties } = props;
  const [activeStatus, setActiveStatus] = useState(
    "INACTIVE" as activeStatusType
  );
  const handleMouseEnter = () => {
    setActiveStatus("ACTIVE");
  };
  const handleMouseLeave = () => {
    setActiveStatus("INACTIVE");
  };
  const handleMarkCurrentPath = () => {
    if (pathName === "/" && mainName === "Home") {
      setActiveStatus("ACTIVE");
    }
  };
  useEffect(() => {
    handleMarkCurrentPath();
  }, []);
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <div className=" h-[3rem] w-[5rem] flex flex-col justify-between items-center">
          <div
            className={`${activeStatus === "ACTIVE" ? "text-[#f86d1c]" : ""}`}
          >
            {mainName}
          </div>
          <div className="w-full">
            <hr
              className={`border-[3px] border-[#f86d1c] transition-all duration-500  ${
                activeStatus === "ACTIVE" ? "w-full" : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>
        {activeStatus === "ACTIVE" && (
          <div className="absolute top-[3rem] z-[2] bg-[white]  w-fit text-nowrap">
            {properties.map((data) => {
              const { name, link } = data;
              return (
                <Link
                  key={Math.random().toString()}
                  href={link}
                  className="block text-sm px-3 py-2 hover:bg-[#505050] hover:text-[white]"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default BigScreenLinkType2;
