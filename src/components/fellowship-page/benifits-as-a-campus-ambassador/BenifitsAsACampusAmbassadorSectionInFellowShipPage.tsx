import SectionType1 from "@/components/global/section/SectionType1";
import TitleText1 from "@/components/global/text/TitleText1";
import TitleText2 from "@/components/global/text/TitleText2";
import TitleTextContainer from "@/components/global/text/TitleTextContainer";
import React from "react";

const BenifitsAsACampusAmbassadorSectionInFellowShipPage = () => {
  return (
    <SectionType1>
      <TitleTextContainer>
        <TitleText1>Benifits as a</TitleText1>
        <TitleText2>Campus Ambassador</TitleText2>
        <div className="opacity-[0.7] text-sm mt-5 md:text-base">
          We will provide the following benefits for our campus ambassadors.
        </div>
      </TitleTextContainer>
      <div className="mt-10">
        <div className="bg-[#E6E7E8] px-5 md:px-16 py-10 md:py-16 rounded">
          <div className="md:flex md:flex-row-reverse md:gap-10 md:items-center">
            <div className="md:w-[40%]">
              <div className="flex items-center justify-center ">
                <img
                  src="/images/fellowship/some-boys-handshaking.png"
                  alt=""
                  className="w-full lg:w-[80%]"
                />
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-[60%]">
              <ul className="flex flex-col gap-7">
                {Array.from({ length: 6 }).map(() => {
                  return (
                    <li key={Math.random()}>
                      <div>
                        <div className="font-bold">
                          01. Learn Outside the Box
                        </div>
                        <div className="pl-6 opacity-[0.7]">
                          Get a competitive edge over your peers by exploring
                          topics outside your conventional curriculum.
                        </div>
                      </div>
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

export default BenifitsAsACampusAmbassadorSectionInFellowShipPage;
