import myId from "@/functions/utils/myId";
import React from "react";

const ProjectVideoSection = () => {
  const numberOfVideos = 2;
  return (
    <div>
      <div className="text-sm font-bold">Videos :</div>
      <ul className="flex flex-col gap-5 mt-2">
        {Array.from({ length: numberOfVideos }).map((_, index) => {
          return (
            <li key={myId()}>
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/cTRXYlgcBFQ?si=v9h4U89mxPw8rIM5"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              {numberOfVideos > index + 1 && <hr className="mt-5" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectVideoSection;
