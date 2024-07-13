import Homepage from "@/components/homepage/Homepage";
import ProjectsPage from "@/components/projects-page/main/ProjectsPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Projects | Archdune",
  description: "Archdune",
  icons: "/images/images-1/archdune-title-logo.ico",
};
const page = () => {
  return (
    <>
      <ProjectsPage />
    </>
  );
};

export default page;
