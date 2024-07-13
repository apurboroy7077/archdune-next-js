import SectionType1 from "@/components/global/section/SectionType1";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import SmallScreenListOfTypesOfProjects from "../small-screen-list-of-types-of-projects/SmallScreenListOfTypesOfProjects";
import ProjectsList from "../projects-list/ProjectsList";
import RecentUpdates from "../recent-updates/RecentUpdates";
import MostVisitedList from "../most-visited/MostVisitedList";

const SmallScreenProjects = () => {
  return (
    <>
      <SectionType1 className="mt-5">
        <SmallScreenListOfTypesOfProjects />
      </SectionType1>
      <hr className="mt-5 border-[0.4rem]" />
      <SectionType1 className="mt-5">
        <ProjectsList />
      </SectionType1>
      <SectionType1 className="mt-5">
        <RecentUpdates />
        <hr className="mt-10" />
        <MostVisitedList />
      </SectionType1>
    </>
  );
};

export default SmallScreenProjects;
