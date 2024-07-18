import myId from "@/functions/utils/myId";
import useBasic from "@/hooks/zustand/basicZustandHooks";
import Link from "next/link";

const SimilarPosts = () => {
  return (
    <>
      <div>Similar Posts</div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        {Array.from({ length: 4 }).map(() => {
          return (
            <li key={myId()}>
              <Link href={""}>
                <div className="">
                  <div className="w-full ">
                    <img
                      src="/images/project/neuroscape/01_Top View.jpg"
                      alt=""
                      className="h-full w-full object-center object-cover"
                    />
                  </div>
                  <div className="w-full mt-2 px-1">
                    <div className="text-xs text-[black]">
                      Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </div>
                    <div className="text-xs aktiv-grotesk-w06-light mt-1">
                      Lorem, ipsum dolor.....
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SimilarPosts;
