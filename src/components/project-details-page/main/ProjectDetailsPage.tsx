"use client";
import MyHeader from "@/components/global/header/MyHeader";
import useBasic from "@/hooks/zustand/basicZustandHooks";
import React from "react";
import SmallScreenProjectDetails from "../small-screen/SmallScreenProjectDetails";
import LargeScreenProjectDetails from "../large-screen/LargeScreenProjectDetails";
import MyFooter from "@/components/global/footer/MyFooter";

const ProjectDetailsPage = () => {
  const screenSize = useBasic((state) => state.screenSize);
  return (
    <>
      <MyHeader />
      {screenSize === "SMALL_SCREEN" && <SmallScreenProjectDetails />}
      {(screenSize === "MEDIUM_SCREEN" || screenSize === "LARGE_SCREEN") && (
        <LargeScreenProjectDetails />
      )}
      <MyFooter />
    </>
  );
};

export default ProjectDetailsPage;
