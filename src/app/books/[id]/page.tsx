import BookPage from "@/components/book-page/main/BookPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Chashi Bari | Archdune",
  description: "Archdune",
  icons: "/images/images-1/archdune-title-logo.ico",
};
const page = () => {
  return (
    <>
      <BookPage />
    </>
  );
};

export default page;
