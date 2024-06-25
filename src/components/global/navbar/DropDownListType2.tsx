"use client";
import Link from "next/link";
import React, { useState } from "react";
type menuStatus = "OPENED" | "CLOSED";
type propsType = {
  mainName: string;
  subProperties: {
    name: string;
    link: string;
  }[];
};

const DropdownListType2 = (props: propsType) => {
  const { mainName, subProperties } = props;
  const [menuStatus, setMenuStatus] = useState("CLOSED" as menuStatus);
  const handleOnMouseEnter = () => {
    setMenuStatus("OPENED");
  };
  const handleOnMouseLeave = () => {
    setMenuStatus("CLOSED");
  };
  return (
    <li>
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className="  block hover:bg-[#505050] hover:text-[white]"
      >
        <div className=" py-3 px-4 ">
          Learn
          {menuStatus === "CLOSED" && (
            <img
              src="/images/images-1/caret-down-solid-black.svg"
              alt=""
              className="inline-block w-[0.65rem] ml-2"
            />
          )}
          {menuStatus === "OPENED" && (
            <img
              src="/images/images-1/caret-down-solid-white.svg"
              alt=""
              className="inline-block w-[0.65rem] ml-2"
            />
          )}
        </div>
        {menuStatus === "OPENED" && (
          <div>
            {subProperties.map((data) => {
              return (
                <Link
                  key={Math.random().toString()}
                  href={data.link}
                  className="block bg-[#B9B9B9] text-white px-7 py-2 hover:bg-[#505050] "
                >
                  {data.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </li>
  );
};

export default DropdownListType2;
