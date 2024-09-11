import SectionType1 from "@/components/global/section/SectionType1";
import React from "react";

const FellowshipLargeScreenBannerSection = () => {
  return (
    <SectionType1 className="mt-5 ">
      <div className="flex">
        <div className="w-[30%]">
          <img
            src="/images/fellowship/banner-of-fellowship.png"
            alt=""
            className="max-w-full"
          />
        </div>
        <div className="w-[30%]">
          <div className="bg-[#E3E2D6] h-full flex items-center border-l-[1px] border-l-[black]">
            <div>
              <div className=" bg-[#58595b] w-fit text-[#ffce1f] px-5 py-3 text-xl font-thin rounded-tr rounded-br pl-10 poppins-regular">
                Apply Now
              </div>
              <div className=" mt-1 ml-10 text-lg  poppins-regular">
                Connect with Creativity
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="bg-[#E3E2D6]  h-full flex items-center pr-10">
            <div className="w-full">
              <div className="  py-10  w-full">
                <div className="mt-10 text-lg lg:text-xl opacity poppins-regular text-end">
                  ArchDune Fellowship Program
                </div>
                <div className="mt-3 lg:mt-5  text-[#6d6e71] text-lg lg:text-xl poppins-bold text-end">
                  2023-2024
                </div>

                <div className="mt-3 lg:mt-5 poppins-bold text-[#6d6e71] text-4xl lg:text-5xl text-end">
                  Campus Ambassador
                </div>
                <div className="text-lg mt-3 lg:mt-5 opacity-[0.7] poppins-regular text-end">
                  Be our face in your campus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionType1>
  );
};

export default FellowshipLargeScreenBannerSection;
