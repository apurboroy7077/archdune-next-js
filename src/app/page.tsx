import Homepage from "@/components/homepage/Homepage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Home | Archdune",
  description: "Archdune",
  icons: "/images/images-1/archdune-title-logo.ico",
};
const page = () => {
  return (
    <>
      <Homepage />
    </>
  );
};

export default page;
