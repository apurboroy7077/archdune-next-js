import Link from "next/link";
import React from "react";
import BigScreenLinkType1 from "./BigScreenLinkType1";
import BigScreenLinkType2 from "./BigScreenLinkType2";
const MediumAndBigScreenNavbar = () => {
  return (
    <>
      <nav>
        <div className="mx-auto max-w-[100rem] mt-3 px-3">
          <div className="flex justify-between">
            <div>
              <span>
                <i className="fa-regular fa-envelope "></i>
                <a
                  href="mailto:contact@archdune.com"
                  className="ml-2 hover:text-[#db7c00] transition-all duration-300"
                >
                  contact@archdune.com
                </a>
              </span>
              <span className="mx-2">|</span>
              <span>
                <i className="fa-solid fa-phone"></i>
                <a
                  href="tel:+8801716728989"
                  className="ml-2  hover:text-[#db7c00] transition-all duration-300"
                >
                  +880 1716-728989
                </a>
              </span>
              <span className="mx-2">|</span>
              <span>
                <i className="fa-regular fa-closed-captioning"></i>
                <a
                  href="/"
                  className="ml-2 hover:text-[#db7c00] transition-all duration-300"
                >
                  Submit
                </a>
              </span>
            </div>
            <div>
              <a href="/">
                <i className="fa-brands fa-facebook text-2xl text-[#6E6E6E] hover:scale-[1.1] hover:text-[#DB7C00] transition-all duration-300 "></i>
              </a>
              <a href="/" className="ml-4">
                <i className="fa-brands fa-instagram text-2xl text-[#6E6E6E] hover:scale-[1.1] hover:text-[#DB7C00] transition-all duration-300 "></i>
              </a>
              <a href="/" className="ml-4">
                <i className="fa-brands fa-pinterest text-2xl text-[#6E6E6E] hover:scale-[1.1] hover:text-[#DB7C00] transition-all duration-300 "></i>
              </a>
              <a href="/" className="ml-4">
                <i className="fa-brands fa-youtube text-2xl text-[#6E6E6E] hover:scale-[1.1] hover:text-[#DB7C00] transition-all duration-300 "></i>
              </a>
              <a href="/" className="ml-4">
                <i className="fa-brands fa-linkedin text-2xl text-[#6E6E6E] hover:scale-[1.1] hover:text-[#DB7C00] transition-all duration-300 "></i>
              </a>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <img
                src="/images/images-1/archdune-logo-1.png"
                alt=""
                className="w-[5rem] inline-block"
              />
              <span className=" text-lg font-medium">ArchDune</span>
            </div>
            <div className="flex gap-9 pt-5">
              <BigScreenLinkType1 name="Home" link="/" />
              <BigScreenLinkType1 name="Projects" link="/projects" />
              <BigScreenLinkType2
                mainName="Learn"
                properties={[
                  { name: "Join Live Sessions", link: "/live-sessions" },
                  { name: "Buy Recorded Class", link: "/recorded-class" },
                ]}
              />
              <BigScreenLinkType1 name="Competition" link="/competition" />
              <BigScreenLinkType1 name="Fellowship" link="/fellowship" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MediumAndBigScreenNavbar;
