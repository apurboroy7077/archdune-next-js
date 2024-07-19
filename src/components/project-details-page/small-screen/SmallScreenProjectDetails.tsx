"use client";

import SectionType1 from "@/components/global/section/SectionType1";
import MostVisitedList from "@/components/projects-page/most-visited/MostVisitedList";
import ProjectsList from "@/components/projects-page/projects-list/ProjectsList";
import RecentUpdates from "@/components/projects-page/recent-updates/RecentUpdates";
import React from "react";
import DetailsOfProject from "../details/DetailsOfProject";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import SimilarPosts from "@/components/global/similar-posts/SimilarPosts";
import ProjectVideoSection from "../video-section/ProjectVideoSection";
import PreviousAndNextProjectButtons from "../buttons-previous-next-project/PreviousAndNextProjectButtons";

const SmallScreenProjectDetails = () => {
  return (
    <>
      <SectionType1 className="mt-5">
        <DetailsOfProject />
      </SectionType1>
      <SectionType1 className="mt-7">
        <SimilarPosts />
      </SectionType1>

      <SectionType1 className="mt-7">
        <hr />
      </SectionType1>
      {/* THIS VIDEO SECTION CAUSING A LITTLE LOADING PROBLEM */}
      <SectionType1 className="mt-7">
        <ProjectVideoSection />
      </SectionType1>
      <SectionType1 className="mt-7">
        <hr />
      </SectionType1>
      <SectionType1 className="mt-5">
        <PreviousAndNextProjectButtons />
      </SectionType1>
      <SectionType1 className="mt-5">
        <hr />
      </SectionType1>
      <SectionType1 className="mt-5">
        <RecentUpdates />
        <hr className="mt-10" />
        <MostVisitedList />
      </SectionType1>
    </>
  );
};

export default SmallScreenProjectDetails;
