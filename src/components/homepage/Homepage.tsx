"use client";
import React from "react";

import MyHeader from "../global/header/MyHeader";
import BannerSection from "./BannerSection";
import MyFooter from "../global/footer/MyFooter";

const Homepage = () => {
  return (
    <>
      <MyHeader />
      <BannerSection />
      <MyFooter />
    </>
  );
};

export default Homepage;
