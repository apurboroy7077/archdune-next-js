import PhotographsPage from "@/components/photographs-page/main/PhotographsPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Photographs | Archdune",
  description: "Archdune",
  icons: "/images/images-1/archdune-title-logo.ico",
};
const page = () => {
  return (
    <>
      <PhotographsPage />
    </>
  );
};

export default page;
