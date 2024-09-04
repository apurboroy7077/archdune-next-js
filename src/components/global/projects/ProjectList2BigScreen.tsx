import { greenTypeColor } from "@/data/data-1/colors";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";

const ProjectList2BigScreen = () => {
  return (
    <ul className=" mt-3">
      {Array.from({ length: 20 }).map(() => {
        return (
          <li key={myId()}>
            <Link href={""} className={`text-sm text-[${greenTypeColor}]`}>
              Student Work
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList2BigScreen;
