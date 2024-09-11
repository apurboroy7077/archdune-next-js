"use client";

import MyFooter from "@/components/global/footer/MyFooter";
import MyHeader from "../../global/header/MyHeader";
import FellowshipBannerSection from "../banner/FellowshipBannerSection";
import ListOfStudentsSectionInFellowShip from "../list-of-students/ListOfStudentsSectionInFellowShip";

const FellowshipPageClientSide = () => {
  return (
    <>
      <MyHeader />
      <FellowshipBannerSection />
      <ListOfStudentsSectionInFellowShip />
      <MyFooter />
    </>
  );
};

export default FellowshipPageClientSide;
