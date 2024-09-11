import SectionType1 from "@/components/global/section/SectionType1";
import TitleText1 from "@/components/global/text/TitleText1";
import TitleText2 from "@/components/global/text/TitleText2";
import TitleTextContainer from "@/components/global/text/TitleTextContainer";
import myId from "@/functions/utils/myId";
import React from "react";

const EnrollmentProcessSectionFellowshipPage = () => {
  return (
    <SectionType1>
      <TitleTextContainer>
        <TitleText2>Enrollment</TitleText2>
        <TitleText1>Process</TitleText1>
      </TitleTextContainer>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          {Array.from({ length: 4 }).map(() => {
            return (
              <div key={myId()}>
                <div className="bg-[#E6E7E8] py-10 px-5 border-[#9C9C9C] border-[3px] rounded-lg max-w-[19rem]">
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/fellowship/hand-shake.png"
                      alt=""
                      className="hover:scale-[1.1] transition-all duration-500"
                    />
                  </div>
                  <div className="text-center text-2xl font-bold mt-5">
                    Interview
                  </div>
                  <div className="  poppins-regular text-center mt-5 opacity-[0.8]">
                    Selected candidates will be invited for an online interview.
                    This is an opportunity for us to get to know you better and
                    assess your suitability for the program.
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

export default EnrollmentProcessSectionFellowshipPage;
