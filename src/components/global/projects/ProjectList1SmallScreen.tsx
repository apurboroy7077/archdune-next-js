"use client";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";

const ProjectList1SmallScreen = () => {
  return (
    <ul className="flex flex-wrap mt-3 gap-3">
      {Array.from({ length: 3 }).map((data, index) => {
        return (
          <li key={myId()}>
            <Link href={""}>
              <button className="text-xs border-[1px] border-[black] text-[#337AB7] px-2 py-1 rounded active:scale-[0.95]">
                Student Works
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList1SmallScreen;
