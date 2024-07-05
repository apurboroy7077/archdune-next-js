import React from "react";
import SectionType1 from "../global/section/SectionType1";
import TitleTextContainer from "../global/text/TitleTextContainer";
import TitleText1 from "../global/text/TitleText1";
import TitleText2 from "../global/text/TitleText2";
import SectionType2 from "../global/section/SectionType2";
import SkillDevelopmentCarousel from "./SkillDevelopmentCarousel";
import ProjectsCarousel from "./ProjectsCarousel";

const ProjectsSection = () => {
  return (
    <SectionType2>
      <TitleTextContainer>
        <TitleText2>Projects</TitleText2>
      </TitleTextContainer>
      <ProjectsCarousel />
    </SectionType2>
  );
};

export default ProjectsSection;
