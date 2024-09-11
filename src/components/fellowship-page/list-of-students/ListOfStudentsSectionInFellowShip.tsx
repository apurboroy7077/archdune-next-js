import SectionType1 from "@/components/global/section/SectionType1";
import myId from "@/functions/utils/myId";
import React from "react";

const ListOfStudentsSectionInFellowShip = () => {
  return (
    <SectionType1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  justify-center">
        {Array.from({ length: 10 }).map(() => {
          return (
            <div key={myId()} className="">
              <div>
                <img
                  src="/images/fellowship/tamima-rashid.jpg"
                  alt=""
                  className="w-full border-[5px] border-[#FFCB0E] grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-3 px-2 flex flex-col gap-1">
                <div className="font-bold">Tamima Rashid</div>
                <div className="text-sm aktiv-grotesk-w06-light opacity-[0.8]">
                  Dept of Architecture
                </div>
                <div className="text-sm aktiv-grotesk-w06-light opacity-[0.8]">
                  Rajshahi University of Science and Technology
                </div>
                <div className="text-sm aktiv-grotesk-w06-light opacity-[0.8]">
                  Dhaka, Bangladesh
                </div>
                <div className="text-sm aktiv-grotesk-w06-light opacity-[0.8]">
                  Dept of Architecture
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionType1>
  );
};

export default ListOfStudentsSectionInFellowShip;
