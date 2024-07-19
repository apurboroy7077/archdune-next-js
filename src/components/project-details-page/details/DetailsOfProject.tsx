"use client";
import myId from "@/functions/utils/myId";
import Link from "next/link";
import React from "react";

const DetailsOfProject = () => {
  return (
    <>
      <div>
        <div className="text-lg font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          voluptates?
        </div>
        <div className="mt-5">
          <div className="relative">
            <img src="/images/project/neuroscape/01_Top View.jpg" alt="" />
          </div>
          <div className="text-center aktiv-grotesk-w06-light mt-3 text-xs">
            @Diptenu Saha | PUST
          </div>
          <hr className="mt-2" />
          <div className="mt-2">
            <ul className="flex flex-col">
              {Array.from({ length: 15 }).map(() => {
                return (
                  <li key={myId()}>
                    <span className="text-xs aktiv-grotesk-w06-light">
                      Student Name:{" "}
                    </span>
                    <span className="font-bold text-xs ml-1">Diptenu Saha</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-2">
            <button className="bg-[#F1F1F1] text-xs w-full py-3 rounded active:scale-[0.97]">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* <hr className="mt-2" /> */}
      <ul className="flex flex-col gap-5 mt-7">
        {Array.from({ length: 7 }).map(() => {
          return (
            <li key={myId()}>
              <div className="text-sm font-bold">Location :</div>
              <div className="mt-1 aktiv-grotesk-w06-light text-xs text-justify leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut a
                dignissimos quod debitis necessitatibus dolor maxime,
                voluptatibus eaque hic aspernatur doloribus quasi eveniet,
                magnam ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas nihil harum ut in, eveniet incidunt dolores eum iste
                quisquam sunt, odit aperiam aliquid magnam quidem illo dolorem.
                Sapiente obcaecati quidem debitis molestias culpa dolorum
                facilis corporis cum perspiciatis aspernatur reprehenderit non
                mollitia dolores sit praesentium impedit, dignissimos dolorem
                omnis tempore.
              </div>
              <div className="mt-5 flex flex-col gap-5">
                {Array.from({ length: 3 }).map(() => {
                  return (
                    <div key={myId()}>
                      <div>
                        <img
                          src="/images/project/neuroscape/01_Top View.jpg"
                          alt=""
                        />
                      </div>
                      <div className="mt-3 text-xs aktiv-grotesk-w06-light text-center">
                        Location Map @ Diptenu Saha | PUST
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr className="mt-5" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DetailsOfProject;
