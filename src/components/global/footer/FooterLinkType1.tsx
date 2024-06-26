import Link from "next/link";
import React from "react";
type propsType = {
  name: string;
  link: string;
};
const FooterLinkType1 = (props: propsType) => {
  const { name, link } = props;
  return (
    <li>
      <Link
        href={link}
        className="text-sm block mt-2 text-white opacity-[0.8] transition-all duration-500 hover:text-[#e48300]"
      >
        {name}
      </Link>
    </li>
  );
};

export default FooterLinkType1;
