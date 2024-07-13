import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";

const SmallScreenListOfTypesOfProjects = () => {
  return (
    <div>
      <div>PROJECT</div>
      <hr />
      <div>
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
      </div>
      <hr className="mt-3" />
      <div>
        <ul className="flex flex-wrap mt-3 gap-3">
          {Array.from({ length: 10 }).map((data, index) => {
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
        <div className="mt-5">
          <button className="text-xs border-[1px] border-[black] text-[black] px-2 py-1 rounded active:scale-[0.95]">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenListOfTypesOfProjects;
