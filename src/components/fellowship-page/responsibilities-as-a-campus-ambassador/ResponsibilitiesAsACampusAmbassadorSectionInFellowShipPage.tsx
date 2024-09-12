import SectionType1 from "@/components/global/section/SectionType1";
import TitleText1 from "@/components/global/text/TitleText1";
import TitleText2 from "@/components/global/text/TitleText2";
import TitleTextContainer from "@/components/global/text/TitleTextContainer";
import myId from "@/functions/utils/myId";
import React from "react";

const ResponsibilitiesAsACampusAmbassadorSectionInFellowShipPage = () => {
  return (
    <SectionType1>
      <TitleTextContainer>
        <TitleText1>Responsibilities as a</TitleText1>
        <TitleText2>Campus Ambassador</TitleText2>
      </TitleTextContainer>
      <div className="mt-10 md:mt-20">
        <div className="flex flex-wrap justify-center gap-16 md:gap-10">
          {Array.from({ length: 4 }).map(() => {
            return (
              <div key={myId()}>
                <div className="max-w-[19rem]">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/fellowship/share-icon.png"
                      alt=""
                      className="hover:scale-[1.1] transition-all duration-500 max-w-[5rem]"
                    />
                  </div>
                  <div className="bg-[#E6E7E8] border-[#9C9C9C] border-[3px] py-10 lg:py-16 px-5 rounded-lg mt-5">
                    <div className="text-center text-2xl font-bold mt-5">
                      Publicity Campaign
                    </div>
                    <div className="  poppins-regular text-center mt-5 opacity-[0.8]">
                      Promote current and future courses, competitions and
                      events to institutional Facebook groups, LinkedIn and your
                      social media profiles.{/*  */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionType1>
  );
};

export default ResponsibilitiesAsACampusAmbassadorSectionInFellowShipPage;
