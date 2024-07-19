"use client";
const PreviousAndNextProjectButtons = () => {
  return (
    <div className="flex justify-between">
      <button className="text-[#337AB7] text-xs aktiv-grotesk-w06-light active:scale-[0.95]">
        <i className="fa-solid fa-chevron-left"></i>
        <i className="fa-solid fa-chevron-left"></i>
        <span className="ml-1">Previous Project</span>
      </button>
      <button className="text-[#337AB7] text-xs aktiv-grotesk-w06-light active:scale-[0.95]">
        <span className="mr-1">Next Project</span>
        <i className="fa-solid fa-chevron-right"></i>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default PreviousAndNextProjectButtons;
