"use client";
import React from "react";

const SketchBookSection = () => {
  return (
    <>
      <section>
        <div className="flex justify-center">
          <div className="mx-3 my-16 lg:my-20 max-w-[100rem]">
            <div className="text-center">
              <span className="text-3xl poppins-thin font-bold">Our</span>{" "}
              <span className=" text-3xl font-bold ml-2">Sketchbook</span>
            </div>
            <div className=" bg-[#ECECEC] mt-5 px-5 lg:px-16 py-10 lg:py-20 rounded md:flex md:flex-row-reverse md:justify-around md:items-center">
              <div className=" md:max-w-[30%]">
                <img
                  src="/images/sketchbook/sketchbook-1.jpg"
                  alt=""
                  className="border-[5px] border-[#808186] w-full"
                />
              </div>
              <div className="mt-10 md:mt-0 md:max-w-[50%]">
                <div className="flex items-end ">
                  <div>
                    <img
                      src="/images/images-1/black-archdune-image.jpg"
                      alt=""
                      className="w-[3rem] lg:w-[5rem]"
                    />
                  </div>
                  <div className="h-fit font-bold text-lg lg:text-2xl ml-2 lg:ml-4 text-[#818183]">
                    Sketchbook
                  </div>
                </div>
                <div className="mt-5 font-bold text-lg lg:text-3xl">
                  Sketch. Share.
                </div>
                <div className="text-sm lg:text-lg font-thin opacity-[0.7] lg:mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo optio adipisci autem perspiciatis alias expedita
                  sunt illum maxime architecto! Consequatur soluta quasi
                  voluptatum, aliquid voluptatem dignissimos accusamus esse
                  aliquam debitis.
                </div>
                <div className="mt-5 lg:mt-5">
                  <button className="bg-[#FFCE55] text-sm lg:text-lg px-5 lg:px-10 py-1 border-[1px] border-[black] rounded active:scale-[0.95]">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SketchBookSection;
