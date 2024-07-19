"use client";

import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";

const MostVisitedList = () => {
  return (
    <div className="mt-10">
      <div>MOST VISITED </div>
      <ul className="flex flex-col gap-10 mt-2">
        {Array.from({ length: 7 }).map(() => {
          return (
            <li key={myId()}>
              <Link href={""}>
                <div className="text-sm font-bold opacity-[0.8]">
                  Design of a Commercial High-rise Building
                </div>
                <div className="text-xs mt-1 opacity-[0.7]">
                  19 November, 2023 || Total Views: 28
                </div>
                <div className="mt-3">
                  <img
                    src="/images/project/neuroscape/01_Top View.jpg"
                    alt=""
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MostVisitedList;
