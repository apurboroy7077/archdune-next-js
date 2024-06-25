"use client";
import useBasic from "@/hooks/zustand/basicZustandHooks";
import React, { useEffect } from "react";

const StartupFunctions1 = () => {
  const setScreenSize = useBasic((state) => state.setScreenSize);

  const handleResize = () => {
    const screendWidth = window.innerWidth;
    setScreenSize(screendWidth);
  };
  const setScreenSizeForTheFirstTime = () => {
    const screendWidth = window.innerWidth;
    setScreenSize(screendWidth);
  };
  useEffect(() => {
    setScreenSizeForTheFirstTime();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <></>;
};

export default StartupFunctions1;
