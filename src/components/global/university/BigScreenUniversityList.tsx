import { greenTypeColor } from "@/data/data-1/colors";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";

const BigScreenUniversityList = () => {
  return (
    <ul className=" mt-3">
      {Array.from({ length: 25 }).map(() => {
        return (
          <li key={myId()}>
            <Link href={""} className={`text-sm text-[${greenTypeColor}]`}>
              AIUB
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BigScreenUniversityList;
