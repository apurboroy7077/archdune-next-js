"use client";
import React from "react";
import SectionType2 from "../global/section/SectionType2";
import SectionType1 from "../global/section/SectionType1";
import TitleTextContainer from "../global/text/TitleTextContainer";
import TitleText1 from "../global/text/TitleText1";
import TitleText2 from "../global/text/TitleText2";
import { badamiColor1 } from "@/data/data-1/colors";
import { instructorImages } from "@/data/data-1/instructor";
import myId from "@/functions/utils/myId";

const InstructorSection = () => {
  return (
    <SectionType1>
      <TitleTextContainer>
        <TitleText1>Want to become an </TitleText1>
        <TitleText2>Instructor?</TitleText2>
      </TitleTextContainer>
      <div className={`bg-[${badamiColor1}] px-2 py-7 lg:py-16 rounded`}>
        <div className="flex flex-col gap-5 lg:flex-col-reverse">
          <div className="flex justify-center items-center mt-5">
            <div className="lg:max-w-[75%] flex justify-center lg:justify-between items-center flex-wrap">
              {instructorImages.map((data) => {
                return (
                  <div key={myId()} className="w-[7rem] lg:w-[27%]">
                    <img src={data.imageSrc} alt="" className="w-full" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center lg:max-w-[60%] text-sm lg:text-xl aktiv-grotesk-w06-light opacity-[0.7]">
              It sounds like you’re interested in becoming an instructor. That’s
              great! Becoming an instructor for an architectural software course
              can be an exciting. Ensure you have a strong command of the
              architectural software you want to teach. This could be programs
              like AutoCAD, Revit, SketchUp, Illustration or others depending on
              your specialization. If you want to establish yourself as a
              knowledgeable and effective instructor in architectural software.
              Please upload you resume.
            </div>
          </div>
        </div>
        <div className="text-center mt-7 ">
          <button className="bg-[#FFCE55] text-xs lg:text-lg border-[black] border-[1px] px-5 lg:px-10 py-1 rounded active:scale-[0.95] hover:shadow-lg">
            Upload Resume
          </button>
        </div>
      </div>
    </SectionType1>
  );
};

export default InstructorSection;
