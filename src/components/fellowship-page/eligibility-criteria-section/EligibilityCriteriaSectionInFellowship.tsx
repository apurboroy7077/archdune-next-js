import SectionType1 from "@/components/global/section/SectionType1";
import TitleText1 from "@/components/global/text/TitleText1";
import TitleText2 from "@/components/global/text/TitleText2";
import TitleTextContainer from "@/components/global/text/TitleTextContainer";
import myId from "@/functions/utils/myId";
import React from "react";

const EligibilityCriteriaSectionInFellowship = () => {
  return (
    <SectionType1>
      <TitleTextContainer>
        <TitleText2>Eligibility</TitleText2>
      </TitleTextContainer>
      <div>
        <div className="md:flex md:items-center">
          <div className="md:w-[30%]">
            <div className="flex items-center justify-center">
              <img
                src="/images/fellowship/eligibility.png"
                alt=""
                className="max-w-[90%]"
              />
            </div>
          </div>
          <div className="md:w-[70%]">
            <div className="bg-[#E6E7E8] px-7 md:px-10 py-10 rounded md:border-l-[3px] md:border-l-[#9C9C9C]">
              <ul className="flex flex-col gap-5">
                {Array.from({ length: 5 }).map(() => {
                  return (
                    <li key={myId()}>
                      <span className="font-bold opacity-[0.7]">01.</span>{" "}
                      <span className="opacity-[0.7]">
                        Must be an enrolled student in your institution.
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionType1>
  );
};

export default EligibilityCriteriaSectionInFellowship;
