import ProjectDetailsPage from "@/components/project-details-page/main/ProjectDetailsPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Details | Projects",
  description: "Archdune",
  icons: "/images/images-1/archdune-title-logo.ico",
};
const page = () => {
  return (
    <>
      <ProjectDetailsPage />
    </>
  );
};

export default page;
