"use client";
import SectionType1 from "@/components/global/section/SectionType1";
import React from "react";
import ProjectsList from "../projects-list/ProjectsList";
import RecentUpdates from "../recent-updates/RecentUpdates";
import MostVisitedList from "../most-visited/MostVisitedList";
import ProjectList1BigScreen from "@/components/global/projects/ProjectList1BigScreen";
import ProjectList2BigScreen from "@/components/global/projects/ProjectList2BigScreen";

const BigScreen = () => {
  return (
    <SectionType1 className="lg:mt-5">
      <div className="flex justify-between max-h-[100vh] overflow-y-auto">
        <div className="w-[15%]">
          <div className="w-full border-r-[0.7rem]">
            <div>PROJECT</div>
            <hr />
            <ProjectList1BigScreen />
            <hr className="mt-2" />
            <ProjectList2BigScreen />
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
