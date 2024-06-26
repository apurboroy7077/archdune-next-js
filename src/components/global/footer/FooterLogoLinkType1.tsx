import React from "react";
type logoCategoryType = "brands" | "regular";
type nameType =
  | "envelope"
  | "facebook"
  | "twitter"
  | "instagram"
  | "youtube"
  | "pinterest"
  | "linkedin"
  | "email";

type propsType = {
  name: nameType;
  link: string;
};
const FooterLogoLinkType1 = (props: propsType) => {
  let logoCategory: logoCategoryType;
  let { name, link } = props;
  if (name === "email") {
    name = "envelope";
    logoCategory = "regular";
  } else {
    name = name;
    logoCategory = "brands";
  }
  return (
    <a href={link}>
      <i
        className={`fa-${logoCategory} fa-${name} fa-envelope text-2xl text-[white] opacity-[0.65] hover:scale-[1.1] hover:text-[#DB7C00] transition-all duration-300 `}
      ></i>
    </a>
  );
};

export default FooterLogoLinkType1;
