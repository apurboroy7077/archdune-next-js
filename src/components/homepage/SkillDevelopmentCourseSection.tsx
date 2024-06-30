"use client";
import React from "react";
import SectionType1 from "../global/section/SectionType1";
import TitleText1 from "../global/text/TitleText1";
import TitleText2 from "../global/text/TitleText2";
import TitleTextContainer from "../global/text/TitleTextContainer";
import SkillDevelopmentCarousel from "./SkillDevelopmentCarousel";
const SkillDevelopmentCourseSection = () => {
  return (
    <SectionType1 className=" max-w-[101.1rem]">
      <TitleTextContainer>
        <TitleText1>Our</TitleText1>
        <TitleText2>Skill Development</TitleText2>
        <TitleText1>Courses</TitleText1>
      </TitleTextContainer>

      <SkillDevelopmentCarousel />
    </SectionType1>
  );
};

export default SkillDevelopmentCourseSection;
