"use client";

import MyFooter from "@/components/global/footer/MyFooter";
import MyHeader from "../../global/header/MyHeader";
import FellowshipBannerSection from "../banner/FellowshipBannerSection";
import ListOfStudentsSectionInFellowShip from "../list-of-students/ListOfStudentsSectionInFellowShip";
import EnrollmentProcessSectionFellowshipPage from "../enrollment-process-section/EnrollmentProcessSectionFellowshipPage";
import EligibilityCriteriaSectionInFellowship from "../eligibility-criteria-section/EligibilityCriteriaSectionInFellowship";
import BenifitsAsACampusAmbassadorSectionInFellowShipPage from "../benifits-as-a-campus-ambassador/BenifitsAsACampusAmbassadorSectionInFellowShipPage";
import ResponsibilitiesAsACampusAmbassadorSectionInFellowShipPage from "../responsibilities-as-a-campus-ambassador/ResponsibilitiesAsACampusAmbassadorSectionInFellowShipPage";
import ApplicationFormInFellowshipPage from "../application-form-in-fellowship-page/ApplicationFormInFellowshipPage";
import SocialMediaSectionInFellowShipPage from "../stay-in-touch/SocialMediaSectionInFellowShipPage";

const FellowshipPageClientSide = () => {
  return (
    <>
      <MyHeader />
      <FellowshipBannerSection />
      <ListOfStudentsSectionInFellowShip />
      <EnrollmentProcessSectionFellowshipPage />
      <EligibilityCriteriaSectionInFellowship />
      <BenifitsAsACampusAmbassadorSectionInFellowShipPage />
      <ResponsibilitiesAsACampusAmbassadorSectionInFellowShipPage />
      <ApplicationFormInFellowshipPage />
      <SocialMediaSectionInFellowShipPage />
      <MyFooter />
    </>
  );
};

export default FellowshipPageClientSide;
