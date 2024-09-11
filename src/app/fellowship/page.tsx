import FellowshipPageClientSide from "@/components/fellowship-page/main/FellowshipPageClientSide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fellowship | Archdune",
  description: "Archdune",
  icons: "/images/images-1/archdune-title-logo.ico",
};
const page = () => {
  return (
    <>
      <FellowshipPageClientSide />
    </>
  );
};

export default page;
