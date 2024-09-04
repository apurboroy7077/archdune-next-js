"use client";
import { projectListData1 } from "@/data/data-3-projects/project-list-2-data";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import React, { useState } from "react";
type showingStatusType = "SHOWING_MORE" | "SHOWING_LESS";

const ProjectList2SmallScreen = () => {
  const [showingStatus, setShowingStatus] = useState(
    "SHOWING_LESS" as showingStatusType
  );

  let processedData: typeof projectListData1;
  if (showingStatus === "SHOWING_LESS") {
    processedData = projectListData1.slice(0, 3);
  } else {
    processedData = projectListData1;
  }

  const handleShowMore = () => {
    setShowingStatus("SHOWING_MORE");
  };
  const handleShowLess = () => {
    setShowingStatus("SHOWING_LESS");
  };
  return (
    <>
      <ul className="flex flex-wrap mt-3 gap-3">
        {processedData.map((data) => {
          const { name, link } = data;
          return (
            <li key={myId()}>
              <Link href={link}>
                <button className="text-xs border-[1px] border-[black] text-[#337AB7] px-2 py-1 rounded active:scale-[0.95]">
                  {name}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-5">
        {showingStatus === "SHOWING_LESS" && (
          <button
            onClick={handleShowMore}
            className="text-xs border-[1px] border-[black] text-[black] px-2 py-1 rounded active:scale-[0.95]"
          >
            Show More
          </button>
        )}
        {showingStatus === "SHOWING_MORE" && (
          <button
            onClick={handleShowLess}
            className="text-xs border-[1px] border-[black] text-[black] px-2 py-1 rounded active:scale-[0.95]"
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
};

export default ProjectList2SmallScreen;
