"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DropdownList1 from "../navbar/DropdownListType1";
import DropdownList2 from "../navbar/DropDownListType2";
import SmallScreenNavbar from "../navbar/SmallScreenNavbar";

type stickyType = "STICKY" | "NOT_STICKY";
type dropDownOpenStatus = "OPENED" | "CLOSED";
const SmallScreenHeader = () => {
  const [isSticky, setIsSticky] = useState("NOT_STICKY" as stickyType);
  const handleScroll = () => {
    const myScrollYCordinates = window.scrollY;
    if (myScrollYCordinates > 300) {
      setIsSticky("STICKY");
    } else {
      setIsSticky("NOT_STICKY");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`bg-[white] ${isSticky === "STICKY" ? " sticky top-0" : ""}`}
      >
        <SmallScreenNavbar />
      </header>
    </>
  );
};

export default SmallScreenHeader;
