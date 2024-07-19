"use client";
import myId from "@/functions/utils/myId";
import Link from "next/link";

const RecentUpdates = () => {
  return (
    <div>
      <div>Recent Updates</div>
      <ul className="flex flex-col gap-5 mt-2">
        {Array.from({ length: 7 }).map(() => {
          return (
            <li key={myId()}>
              <Link href={""}>
                <div className="flex gap-2">
                  <div className="w-[35%] h-[6rem] border-[0.3rem]">
                    <img
                      src="/images/project/neuroscape/01_Top View.jpg"
                      alt=""
                      className="h-full w-full object-center object-cover"
                    />
                  </div>
                  <div className="w-[70%] pt-1">
                    <div className="text-xs text-[#337AB7]">
                      Institute for Neurodiverse Empowerment Exploration
                    </div>
                    <div className="text-xs opacity-[0.6] mt-2">
                      25 September, 2023
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentUpdates;
