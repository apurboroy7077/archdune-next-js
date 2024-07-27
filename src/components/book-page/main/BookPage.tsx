"use client";

import MyFooter from "@/components/global/footer/MyFooter";
import MyHeader from "@/components/global/header/MyHeader";
import SectionType1 from "@/components/global/section/SectionType1";
import React from "react";
import BookPageCarousel from "../book-carousel/BookPageCarousek";
import myId from "@/functions/utils/myId";

const BookPage = () => {
  return (
    <>
      <MyHeader />
      <SectionType1 className="px-2 max-w-[75rem]">
        <div className="flex justify-between items-center">
          <div className="lg:text-4xl">CHASHI BARI</div>
          <div className="text-xs font-medium opacity-[0.7] lg:text-lg">
            24 July, 2024
          </div>
        </div>
        <hr className="border-[black] mt-3 lg:mt-7" />
        <div>
          <BookPageCarousel />
        </div>
        <div className="flex justify-center mt-5">
          <div className="max-w-[49rem] ">
            <div className="aktiv-grotesk-w06-light lg:text-lg">
              Introducing our exclusive sketchbook &quot;CHASHI BARI&quot;,
              sized at 7.25&quot; x 7.25&quot;, with a sturdy cover made from
              300gsm Art Card featuring lovely illustrations. Inside,
              you&apos;ll find 120 pages (60 sheets) made of high-quality 110gsm
              Cartridge Paper, perfect for sketches. It&apos;s a delightful
              blend of charm and durability, ideal for anyone who loves books.
            </div>
            <div className="aktiv-grotesk-w06-light lg:text-lg mt-5">
              Please note that while we strive for accuracy, slight variations
              in product color may occur due to photographic lighting sources or
              monitor settings.
            </div>
            <div className="mt-10">
              <span className="font-bold aktiv-grotesk-w06-regular lg:text-lg">
                Design Team:
              </span>
              <span className="lg:text-lg ml-1 aktiv-grotesk-w06-light">
                Ar. Md Ehsanul Hoque & Ar. Anamika Moontaha
              </span>
            </div>
            <div className="mt-3">
              <span className="font-bold aktiv-grotesk-w06-regular lg:text-lg">
                Photographs:
              </span>
              <span className="lg:text-lg ml-1 aktiv-grotesk-w06-light">
                Jeba Ferdousi & Anamika Moontaha
              </span>
            </div>
            <div className="mt-3">
              <span className="font-bold aktiv-grotesk-w06-regular lg:text-lg">
                Price:
              </span>
              <span className="lg:text-lg ml-1 aktiv-grotesk-w06-light">
                320tk [Single Sketchbook]
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-16">
          <div className="opacity-[0.8] lg:text-lg">Share</div>
          <div className="mt-3 flex gap-2">
            {Array.from({ length: 5 }).map(() => {
              return (
                <div
                  key={myId()}
                  className="border-[2px] border-[black] flex items-center justify-center w-[2.2rem] h-[2.2rem] rounded-full opacity-[0.7] hover:opacity-[1] transition-all duration-500"
                >
                  <i className="fa-brands fa-facebook text-[1.3rem]"></i>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="border-[black] mt-5" />
        <div className="mt-10 text-xl lg:text-4xl">Delivery Info</div>
        <div className="flex justify-center mt-10 lg:mt-24">
          <img
            src="/images/icons/delivery-man.png"
            alt=""
            className="w-[70%] max-w-[17rem] grayscale-[100%] hover:grayscale-[0%] transition-all duration-700"
          />
        </div>
        <div>
          <ul className="mt-10 lg:flex lg:justify-between  lg:gap-10">
            <div className="lg:w-[50%]">
              <li className="aktiv-grotesk-w06-light lg:text-lg">
                <span className="font-bold">Delivery Charge :</span>
                <span className="ml-2">
                  40 Taka for single book (Dhaka City & Outside Dhaka)
                </span>
              </li>
              <li className="aktiv-grotesk-w06-light mt-5 lg:text-lg">
                <span className="font-bold">Payment :</span>
                <span className="ml-2">
                  Bkash & Rocket account no.{" "}
                  <span className="font-bold">01616 728989</span> or Nagad
                  account no. <span className="font-bold">01716 728989</span>
                </span>
              </li>
            </div>
            <div className="lg:w-[50%]">
              <li className="aktiv-grotesk-w06-light mt-5 lg:mt-0 lg:text-lg">
                <span className="font-bold">Delivery Time :</span>
                <span className="ml-2">
                  2-4 Days (Dhaka City) & 3-5 Days (Outside Dhaka)
                </span>
              </li>
              <li className="aktiv-grotesk-w06-light mt-5 lg:text-lg">
                <span className="font-bold">Home Delivery :</span>
                <span className="ml-2">
                  (Dhaka City) & Sundarban Courier Branch Office (Outside Dhaka)
                </span>
              </li>
            </div>
          </ul>
          <div className="aktiv-grotesk-w06-light mt-10 lg:text-lg">
            Note: Please check all the specifications before you confirm your
            order.
          </div>
          <div className="text-center mt-10 lg:mt-20">
            <button className="border-[1px] border-[black] w-[3rem] rounded active:scale-[0.95]">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="border-[1px] border-[black] w-[3rem] rounded active:scale-[0.95]">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </SectionType1>
      <MyFooter />
    </>
  );
};

export default BookPage;
