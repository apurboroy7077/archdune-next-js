"use client";
import Link from "next/link";
import React from "react";
import FooterLinkType1 from "./FooterLinkType1";
import FooterLogoLinkType1 from "./FooterLogoLinkType1";

const MyFooter = () => {
  return (
    <footer>
      <div className="bg-[#3A3A3A] px-2 py-3 pb-5 mt-16 lg:mt-20">
        <div className="md:flex md:justify-between md:gap-5">
          <div className=" md:w-[25%] md:flex md:justify-center md:items-center">
            <div className="text-[white] text-[2rem] tracking-widest cursor-pointer hover:text-[#e48300] transition-all duration-500">
              ArchDune
            </div>
          </div>
          <div className="md:w-[40%]">
            <div className="text-[#818181de] text-xs mt-3 aktiv-grotesk-w06-regular text-justify">
              Hello and welcome to the ArchDune.
            </div>
            <div className="text-[#818181de] text-xs mt-3 aktiv-grotesk-w06-regular text-justify">
              ArchDune is an initiative which is dedicated to promoting the
              innovative thoughts of emerging design enthusiasts. Our goal is to
              help aspiring architects by connecting them with professionals and
              seasoned graduates.
            </div>
            <div className="text-[#818181de] text-xs mt-3 aktiv-grotesk-w06-regular text-justify">
              We introduce requisite programmes to engage and inspire ambitious
              architects as well as undergrads from across the world. Every
              design is selected through a process based on some categories. The
              projects are praised for their originality and the unparalleled,
              vivid imagination behind it. We look forward to emphasizing the
              architect&apos;s fundamental beliefs including the laborious
              journey of transforming a vision into reality. Our aim is to raise
              a platform for promising architects so they can spread their
              ingenious ideas being our companion.
            </div>
            <div className="text-[#818181de] text-xs mt-3 aktiv-grotesk-w06-regular text-justify">
              contact@archdune.com || +880 1716-728989
            </div>
            <div className="text-[#818181de] text-xs mt-3 aktiv-grotesk-w06-regular ">
              Collaboration and Advertisement:{" "}
              <span className="text-[white] font-bold opacity-[0.75]">
                contact@archdune.com
              </span>
            </div>
          </div>
          <div className=" md:w-[25%] mt-5 md:mt-0">
            <ul>
              <FooterLinkType1 name="Competition" link="/competition" />
              <FooterLinkType1
                name="Skill Development Course"
                link="/skill-development-course"
              />
              <FooterLinkType1
                name="Fellowship Program"
                link="/fellowship-program"
              />
              <FooterLinkType1 name="Publication" link="/publication" />
              <FooterLinkType1 name="Submit" link="/submit" />
              <FooterLinkType1 name="FAQ" link="/faq" />
              <FooterLinkType1
                name="Terms and Condition"
                link="/terms-and-conditions"
              />
            </ul>
          </div>
        </div>
        <div className="mt-10 lg:mt-16">
          <div className=" flex justify-center gap-4">
            <FooterLogoLinkType1 name="facebook" link="/" />
            <FooterLogoLinkType1 name="instagram" link="/" />
            <FooterLogoLinkType1 name="pinterest" link="/" />
            <FooterLogoLinkType1 name="youtube" link="/" />
            <FooterLogoLinkType1 name="linkedin" link="/" />
            <FooterLogoLinkType1 name="email" link="/" />
          </div>
          <div className="text-center mt-2">
            <span className="text-[white] opacity-[0.9] poppins-thin">
              Copyright &copy; 2022-2024
            </span>
            <span className="text-[white]"> ArchDune</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
