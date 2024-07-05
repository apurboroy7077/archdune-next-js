"use client";
import React from "react";

import MyHeader from "../global/header/MyHeader";
import BannerSection from "./BannerSection";
import MyFooter from "../global/footer/MyFooter";
import SketchBookSection from "./SketchBookSection";
import SkillDevelopmentCourseSection from "./SkillDevelopmentCourseSection";
import ProjectsSection from "./ProjectsSection";
import JuryPanelSection from "./JuryPanelSection";

const Homepage = () => {
  return (
    <>
      <MyHeader />
      <BannerSection />
      <SketchBookSection />
      <SkillDevelopmentCourseSection />
      <ProjectsSection />
      <JuryPanelSection />
      <MyFooter />
    </>
  );
};

export default Homepage;
