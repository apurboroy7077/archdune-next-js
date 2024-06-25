"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import DropdownList1 from "./DropdownListType1";
import DropdownList2 from "./DropDownListType2";
import DropDownMenu from "./DropDownMenu";
type stickyType = "STICKY" | "NOT_STICKY";
type dropDownOpenStatusType = "OPENED" | "CLOSED";
const SmallScreenNavbar = () => {
  const [dropDownOpenStatus, setDropDownOpenStatus] = useState(
    "CLOSED" as dropDownOpenStatusType
  );
  const handleClickOnMenuIcon = () => {
    setDropDownOpenStatus("OPENED");
  };
  const handleClickOnCloseMenuIcon = () => {
    setDropDownOpenStatus("CLOSED");
  };
  return (
    <nav>
      <div className="px-2 py-3">
        <div className="flex justify-between items-center">
          <div className=" flex items-center">
            <div>
              <img
                src="/images/images-1/archdune-logo-1.png"
                alt="archdune logo"
                className="w-[4rem]"
              />
            </div>
            <div className="font-medium text-lg">ArchDune</div>
          </div>
          <div>
            {dropDownOpenStatus === "CLOSED" && (
              <img
                src="/images/images-1/menubar-logo-black.svg"
                alt=""
                onClick={handleClickOnMenuIcon}
                className="w-[1.8rem] active:scale-[0.95]"
              />
            )}
            {dropDownOpenStatus === "OPENED" && (
              <img
                src="/images/images-1/xmark-solid-black.svg"
                alt=""
                onClick={handleClickOnCloseMenuIcon}
                className="w-[1.8rem] active:scale-[0.95]"
              />
            )}
          </div>
        </div>
      </div>
      <DropDownMenu dropDownOpenStatus={dropDownOpenStatus} />
    </nav>
  );
};

export default SmallScreenNavbar;
