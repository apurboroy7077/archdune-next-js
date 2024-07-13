import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";

const ProjectsList = () => {
  return (
    <ul className="flex flex-col gap-10 ">
      {Array.from({ length: 7 }).map(() => {
        return (
          <li key={myId()}>
            <div className="text-lg font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
              voluptates?
            </div>
            <div className="mt-5">
              <div className="relative">
                <img src="/images/project/neuroscape/01_Top View.jpg" alt="" />
                <div className=" absolute bottom-5 left-0 bg-white bg-opacity-[0.7] px-2 lg:px-5 py-2  w-fit">
                  <ul className="flex flex-col gap-1">
                    {Array.from({ length: 4 }).map((data, index) => {
                      return (
                        <li key={myId()} className=" text-xs text-[#337AB7]">
                          Student Name: Shoumique Hasan
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="mt-5 aktiv-grotesk-w06-regular text-xs text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut a
                dignissimos quod debitis necessitatibus dolor maxime,
                voluptatibus eaque hic aspernatur doloribus quasi eveniet,
                magnam ipsum!
              </div>
              <div className="mt-2 text-end">
                <Link href={""}>
                  <button className="text-xs text-[#337AB7] active:scale-95">
                    Read More [+]
                  </button>
                </Link>
              </div>
            </div>
            <hr className="mt-2" />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectsList;
