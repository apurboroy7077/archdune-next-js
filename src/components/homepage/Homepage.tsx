"use client";
import React from "react";

import MyHeader from "../global/header/MyHeader";
import BannerSection from "./BannerSection";
import MyFooter from "../global/footer/MyFooter";
import SketchBookSection from "./SketchBookSection";
import SkillDevelopmentCourseSection from "./SkillDevelopmentCourseSection";

const Homepage = () => {
  return (
    <>
      <MyHeader />
      <BannerSection />
      <SketchBookSection />
      <SkillDevelopmentCourseSection />
      <MyFooter />
    </>
  );
};

export default Homepage;
