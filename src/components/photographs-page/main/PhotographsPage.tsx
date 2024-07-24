"use client";

import DoubleSectionButton from "@/components/global/buttons/DoubleSectionButton";
import DoubleSectionButtonType2 from "@/components/global/buttons/DoubleSectionButtonType2";
import MyFooter from "@/components/global/footer/MyFooter";
import MyHeader from "@/components/global/header/MyHeader";
import SectionType1 from "@/components/global/section/SectionType1";

const PhotographsPage = () => {
  return (
    <>
      <MyHeader />
      <SectionType1 className="bg-[#DDDDDD] mx-0 mt-0 py-10 lg:py-20 px-2">
        <div className="text-center  text-2xl lg:text-5xl font-bold ">
          PHOTOGRAPHY
        </div>
        <div className="text-center mt-3 lg:mt-7 text-sm lg:text-xl">
          Photography is the art of capturing moments through a camera's lens.
        </div>
      </SectionType1>

      <SectionType1 className="px-2">
        <div>
          <input
            type="text"
            className="border-[black] border-[1px] px-2 py-1 rounded outline-none"
          />
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <DoubleSectionButton
            imageSrc="/images/icons/gallery.jpg"
            buttonText="test"
            secondSectionClassName="text-sm"
          />
          <DoubleSectionButtonType2
            imageSrc="/images/jury/06_Md Hashinur Reza.jpg"
            buttonText="Lionel Messi"
          />
          <DoubleSectionButtonType2
            imageSrc="/images/jury/06_Md Hashinur Reza.jpg"
            buttonText="Md Hashinur Reza"
          />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {Array.from({ length: 10 }).map(() => {
            const lottery = Math.floor(Math.random() * 2);
            console.log(lottery);
            return (
              <>
                <div
                  className={`col-span-1 ${
                    lottery === 1 ? "row-span-1" : "row-span-2"
                  }`}
                >
                  <img
                    src="/images/jury/06_Md Hashinur Reza.jpg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </>
            );
          })}
        </div>
      </SectionType1>

      <MyFooter />
    </>
  );
};

export default PhotographsPage;
