"use client";
import React, { useEffect } from "react";

import useBasic from "@/hooks/zustand/basicZustandHooks";
import SmallScreenNavbar from "../navbar/SmallScreenNavbar";
import MediumAndBigScreenNavbar from "../navbar/MediumAndBigScreenNavbar";
import SmallScreenHeader from "./SmallScreenHeader";
import MediumAndBigScreenHeader from "./MediumAndBigScreenHeader";

const MyHeader = () => {
  const screenSize = useBasic((state) => state.screenSize);
  return (
    <>
      {screenSize === "SMALL_SCREEN" && <SmallScreenHeader />}
      {screenSize === "MEDIUM_SCREEN" && <MediumAndBigScreenHeader />}
      {screenSize === "LARGE_SCREEN" && <MediumAndBigScreenHeader />}
    </>
  );
};

export default MyHeader;
