import Link from "next/link";
import React from "react";
type propsType = {
  name: string;
  link: string;
};
const DropdownListType1 = (props: propsType) => {
  const { name, link } = props;

  return (
    <li>
      <Link
        href={link}
        className="py-3 px-4 block hover:bg-[#505050] hover:text-[white]"
      >
        {name}
      </Link>
    </li>
  );
};

export default DropdownListType1;
