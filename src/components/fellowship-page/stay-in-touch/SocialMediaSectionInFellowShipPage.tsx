import SectionType1 from "@/components/global/section/SectionType1";
import TitleText1 from "@/components/global/text/TitleText1";
import TitleText2 from "@/components/global/text/TitleText2";
import TitleTextContainer from "@/components/global/text/TitleTextContainer";
import Link from "next/link";
import React from "react";

const SocialMediaSectionInFellowShipPage = () => {
  return (
    <SectionType1>
      <TitleTextContainer>
        <TitleText1>Stay in</TitleText1>
        <TitleText2>Touch</TitleText2>
      </TitleTextContainer>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <Link href={"https://facebook.com"}>
              <div className="bg-[#3C5898] py-5 rounded grayscale hover:grayscale-0 duration-500 transition-all">
                <div className="text-center">
                  <i className="fa-brands fa-square-facebook text-[white] text-4xl"></i>
                </div>
                <div className="text-center mt-2 text-xl text-[white]">
                  1.8K
                </div>
                <div className="text-[white] text-center mt-2">Followers</div>
              </div>
            </Link>
          </div>

          <div>
            <Link href={"https://linkedin.com"}>
              <div className="bg-[#0077B5] py-5 rounded grayscale hover:grayscale-0 duration-500 transition-all">
                <div className="text-center">
                  <i className="fa-brands fa-linkedin text-[white] text-4xl"></i>
                </div>
                <div className="text-center mt-2 text-xl text-[white]">
                  2.3K
                </div>
                <div className="text-[white] text-center mt-2">Fans</div>
              </div>
            </Link>
          </div>

          <div>
            <Link href={"https://youtube.com"}>
              <div className="bg-[#FF0000] py-5 rounded grayscale hover:grayscale-0 duration-500 transition-all">
                <div className="text-center">
                  <i className="fa-brands fa-youtube text-[white] text-4xl"></i>
                </div>
                <div className="text-center mt-2 text-xl text-[white]">
                  3.5K
                </div>
                <div className="text-[white] text-center mt-2">Subscribers</div>
              </div>
            </Link>
          </div>

          <div>
            <Link href={"https://pinterest.com"}>
              <div className="bg-[#E60023] py-5 rounded grayscale hover:grayscale-0 duration-500 transition-all">
                <div className="text-center">
                  <i className="fa-brands fa-pinterest text-[white] text-4xl"></i>
                </div>
                <div className="text-center mt-2 text-xl text-[white]">
                  1.2K
                </div>
                <div className="text-[white] text-center mt-2">Followers</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </SectionType1>
  );
};

export default SocialMediaSectionInFellowShipPage;
