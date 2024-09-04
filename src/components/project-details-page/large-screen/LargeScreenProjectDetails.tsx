import SectionType1 from "@/components/global/section/SectionType1";
import MostVisitedList from "@/components/projects-page/most-visited/MostVisitedList";
import ProjectsList from "@/components/projects-page/projects-list/ProjectsList";
import RecentUpdates from "@/components/projects-page/recent-updates/RecentUpdates";
import { greenTypeColor } from "@/data/data-1/colors";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";
import DetailsOfProject from "../details/DetailsOfProject";
import SimilarPosts from "@/components/global/similar-posts/SimilarPosts";
import ProjectVideoSection from "../video-section/ProjectVideoSection";
import PreviousAndNextProjectButtons from "../buttons-previous-next-project/PreviousAndNextProjectButtons";
import BigScreenUniversityList from "@/components/global/university/BigScreenUniversityList";

const LargeScreenProjectDetails = () => {
  return (
    <SectionType1 className="lg:mt-5">
      <div className="flex justify-between max-h-[100vh] overflow-y-auto">
        <div className="w-[15%]">
          <div className="w-full border-r-[0.7rem]">
            <div>PROJECT</div>
            <hr />
            <BigScreenUniversityList />
          </div>
        </div>
        <div className="w-[58%] ">
          <div className="max-h-[100%] overflow-y-auto no-scrollbar">
            <DetailsOfProject />
            <div className="mt-10">
              <ProjectVideoSection />
            </div>
            <hr className="mt-10" />
            <div className="mt-5">
              <PreviousAndNextProjectButtons />
            </div>
            <hr className="mt-5" />
            <div className="mt-10">
              <SimilarPosts />
            </div>
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

export default LargeScreenProjectDetails;
