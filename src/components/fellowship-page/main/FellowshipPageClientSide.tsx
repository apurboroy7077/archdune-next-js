"use client";

import MyFooter from "@/components/global/footer/MyFooter";
import MyHeader from "../../global/header/MyHeader";
import FellowshipBannerSection from "../banner/FellowshipBannerSection";
import ListOfStudentsSectionInFellowShip from "../list-of-students/ListOfStudentsSectionInFellowShip";
import EnrollmentProcessSectionFellowshipPage from "../enrollment-process-section/EnrollmentProcessSectionFellowshipPage";
import EligibilityCriteriaSectionInFellowship from "../eligibility-criteria-section/EligibilityCriteriaSectionInFellowship";

const FellowshipPageClientSide = () => {
  return (
    <>
      <MyHeader />
      <FellowshipBannerSection />
      <ListOfStudentsSectionInFellowShip />
      <EnrollmentProcessSectionFellowshipPage />
      <EligibilityCriteriaSectionInFellowship />
      <MyFooter />
    </>
  );
};

export default FellowshipPageClientSide;
