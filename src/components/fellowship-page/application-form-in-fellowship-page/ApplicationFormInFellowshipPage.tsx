import SectionType1 from "@/components/global/section/SectionType1";
import TitleText1 from "@/components/global/text/TitleText1";
import TitleText2 from "@/components/global/text/TitleText2";
import TitleTextContainer from "@/components/global/text/TitleTextContainer";
import myId from "@/functions/utils/myId";
import React from "react";

const ApplicationFormInFellowshipPage = () => {
  return (
    <SectionType1>
      <TitleTextContainer>
        <TitleText1>Application</TitleText1>
        <TitleText2>Form</TitleText2>
      </TitleTextContainer>
      <div className="mt-10 md:mt-16">
        <div className="md:flex md:justify-center md:items-center">
          <div className="md:w-[40%]">
            <div className="flex items-center justify-center">
              <img
                src="/images/fellowship/application-icon.png"
                alt=""
                className="w-[70%] "
              />
            </div>
          </div>
          <div className="md:w-[60%] mt-10 md:mt-0">
            <form>
              <div className="border-[1px] px-5 md:px-7 lg:px-10 py-10 md:py-16 rounded-lg flex flex-col gap-5 lg:gap-7">
                {Array.from({ length: 7 }).map(() => {
                  return (
                    <div key={myId()}>
                      <div>
                        <label className="opacity-[0.7]">
                          <span>Your Name</span>{" "}
                          <span className="text-[red] opacity-[0.8]">*</span>
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          className="bg-[#FAFAFA] border-[1px] w-full px-2 py-2 outline-none rounded"
                        />
                      </div>
                    </div>
                  );
                })}
                <div>
                  <span>
                    <input type="checkbox" />
                  </span>
                  <span className="ml-3 opacity-[0.7]">
                    I agree to the{" "}
                    <span className="text-[green]">Terms of use</span> and the
                    <span className="text-[green]"> Privacy Policy</span>
                  </span>
                </div>
                <div>
                  <button className="bg-[#3D8DD3] text-[white] px-5 py-2 rounded active:scale-[0.95]">
                    Apply
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionType1>
  );
};

export default ApplicationFormInFellowshipPage;
