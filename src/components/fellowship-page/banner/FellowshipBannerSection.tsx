import SectionType1 from "@/components/global/section/SectionType1";
import useBasic from "@/hooks/zustand/basicZustandHooks";
import React from "react";
import FellowshipSmallScreenBannerSection from "./small-screen/FellowshipSmallScreenBannerSection";
import FellowshipLargeScreenBannerSection from "./large-screen/FellowshipLargeScreenBannerSection";

const FellowshipBannerSection = () => {
  const screenSize = useBasic((state) => state.screenSize);
  return (
    <>
      {screenSize === "SMALL_SCREEN" && <FellowshipSmallScreenBannerSection />}
      {(screenSize === "MEDIUM_SCREEN" || screenSize === "LARGE_SCREEN") && (
        <FellowshipLargeScreenBannerSection />
      )}
    </>
  );
};

export default FellowshipBannerSection;
