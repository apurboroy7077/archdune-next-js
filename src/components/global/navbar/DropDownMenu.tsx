import React from "react";
import DropdownListType1 from "./DropdownListType1";
import DropdownListType2 from "./DropDownListType2";
type dropDownOpenStatusType = "OPENED" | "CLOSED";
type propsType = {
  dropDownOpenStatus: dropDownOpenStatusType;
};

const DropDownMenu = (props: propsType) => {
  const { dropDownOpenStatus } = props;
  return (
    <div
      className={`mt-1 border-t-[1px] border-t-[black] transition-all duration-[0.7s] overflow-hidden h-0 ${
        dropDownOpenStatus === "OPENED" ? "h-[15rem]" : ""
      }`}
    >
      <ul>
        <DropdownListType1 name="Home" link="/" />
        <DropdownListType1 name="Project" link="/projects" />
        <DropdownListType2
          mainName="Learn"
          subProperties={[
            { name: "Join Live Sessions", link: "/live-sessions" },
            { name: "Buy Recorded Classes", link: "/buy-recorded-class" },
          ]}
        />
        <DropdownListType1 name="Competition" link="/competition" />
        <DropdownListType1 name="Fellowship" link="/fellowship" />
      </ul>
    </div>
  );
};

export default DropDownMenu;
