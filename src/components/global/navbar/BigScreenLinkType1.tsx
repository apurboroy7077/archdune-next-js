"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
type activeStatusType = "ACTIVE" | "INACTIVE";
type isCurrentPageType = "YES" | "NO";
type propsType = {
  name: string;
  link: string;
};
const BigScreenLinkType1 = (props: propsType) => {
  const pathName = usePathname();
  const { name, link } = props;
  const [activeStatus, setActiveStatus] = useState(
    "INACTIVE" as activeStatusType
  );
  const [isCurrentPage, setIsCurrentPage] = useState("NO" as isCurrentPageType);
  const handleMouseEnter = () => {
    setActiveStatus("ACTIVE");
  };
  const handleMouseLeave = () => {
    if (isCurrentPage === "NO") {
      setActiveStatus("INACTIVE");
    }
  };
  const handleMarkCurrentPath = () => {
    if (pathName === "/" && name === "Home") {
      setIsCurrentPage("YES");
      setActiveStatus("ACTIVE");
    } else if (pathName === link) {
      setIsCurrentPage("YES");
      setActiveStatus("ACTIVE");
    }
  };
  useEffect(() => {
    handleMarkCurrentPath();
  }, []);
  console.log(pathName, link);
  return (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={link}
    >
      <div className=" h-[3rem] w-[5rem] flex flex-col justify-between items-center">
        <div className={`${activeStatus === "ACTIVE" ? "text-[#f86d1c]" : ""}`}>
          {name}
        </div>
        <div className="w-full">
          <hr
            className={`border-[3px] border-[#f86d1c] transition-all duration-500  ${
              activeStatus === "ACTIVE" ? "w-full" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>
    </Link>
  );
};

export default BigScreenLinkType1;
