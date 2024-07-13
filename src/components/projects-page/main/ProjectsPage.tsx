"use client";
import MyHeader from "@/components/global/header/MyHeader";
import SectionType1 from "@/components/global/section/SectionType1";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import MyFooter from "@/components/global/footer/MyFooter";
import useBasic from "@/hooks/zustand/basicZustandHooks";
import SmallScreenProjects from "../small-screen/SmallScreenProjects";
import BigScreen from "../big-screen/BigScreen";

const ProjectsPage = () => {
  const screenSize = useBasic((state) => state.screenSize);
  return (
    <>
      <MyHeader />
      {(screenSize === "SMALL_SCREEN" || screenSize === "MEDIUM_SCREEN") && (
        <SmallScreenProjects />
      )}
      {screenSize === "LARGE_SCREEN" && <BigScreen />}
      <MyFooter />
    </>
  );
};

export default ProjectsPage;
