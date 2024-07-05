import React from "react";
import SectionType1 from "../global/section/SectionType1";
import TitleTextContainer from "../global/text/TitleTextContainer";
import TitleText1 from "../global/text/TitleText1";
import TitleText2 from "../global/text/TitleText2";
import JuryPanelCarousel from "./JuryPanelCarousel";

const JuryPanelSection = () => {
  return (
    <SectionType1>
      <TitleTextContainer>
        <TitleText1>Expert</TitleText1>
        <TitleText2>Jury Panel</TitleText2>
      </TitleTextContainer>
      <JuryPanelCarousel />
    </SectionType1>
  );
};

export default JuryPanelSection;
