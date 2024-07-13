import SectionType1 from "@/components/global/section/SectionType1";
import { greenTypeColor } from "@/data/data-1/colors";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";
import ProjectsList from "../projects-list/ProjectsList";
import RecentUpdates from "../recent-updates/RecentUpdates";
import MostVisitedList from "../most-visited/MostVisitedList";

const BigScreen = () => {
  return (
    <SectionType1 className="lg:mt-5">
      <div className="flex justify-between max-h-[100vh] overflow-y-auto">
        <div className="w-[15%]">
          <div className="w-full border-r-[0.7rem]">
            <div>PROJECT</div>
            <hr />
            <ul className=" mt-3">
              {Array.from({ length: 3 }).map(() => {
                return (
                  <li key={myId()}>
                    <Link
                      href={""}
                      className={`text-sm text-[${greenTypeColor}]`}
                    >
                      Student Work
                    </Link>
                  </li>
                );
              })}
            </ul>
            <hr className="mt-2" />
            <ul className=" mt-3">
              {Array.from({ length: 20 }).map(() => {
                return (
                  <li key={myId()}>
                    <Link
                      href={""}
                      className={`text-sm text-[${greenTypeColor}]`}
                    >
                      Student Work
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-[58%] ">
          <div className="max-h-[100%] overflow-y-auto no-scrollbar">
            <ProjectsList />
          </div>
        </div>
        <div className="w-[22%] ">
          <div className="max-h-[100%] overflow-y-auto styled-scrollbar pr-3">
            <RecentUpdates />
            <MostVisitedList />
          </div>
        </div>
      </div>
    </SectionType1>
  );
};

export default BigScreen;
