import ProjectList1SmallScreen from "@/components/global/projects/ProjectList1SmallScreen";
import ProjectList2SmallScreen from "@/components/global/projects/ProjectList2SmallScreen";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";

const SmallScreenListOfTypesOfProjects = () => {
  return (
    <div>
      <div>PROJECT</div>
      <hr />
      <div>
        <ProjectList1SmallScreen />
      </div>
      <hr className="mt-3" />
      <div>
        <ProjectList2SmallScreen />
      </div>
    </div>
  );
};

export default SmallScreenListOfTypesOfProjects;
