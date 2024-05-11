import { FunctionComponent, useState } from "react";

const TopRatedCollection: FunctionComponent = ({
  activeTab,
  setActiveTab,
  handleTabClick,
  handleScroll,
}: any) => {
  // State to keep track of the active tab

  return (
    <div className="self-stretch flex flex-row items-end justify-start relative [row-gap:20px] max-w-full text-left text-36xl text-black font-libre-baskerville mq1600:flex-wrap">
      <div className="w-[1036px] flex flex-col items-start justify-start gap-[79px] min-w-[1036px] max-w-full mq900:gap-[20px_79px] mq1275:gap-[39px_79px] mq1275:min-w-full mq1600:flex-1">
        <h1 className="m-0 self-stretch relative text-inherit font-semibold text-[55px] z-[1] mq450:text-14xl mq900:text-25xl mq1440:text-[38.5px] mq1440:text-[45px]">
          Top Rated Collections Section
        </h1>

        <div
          id="tab"
          className="flex flex-row justify-around w-2/3 mq1275:w-full"
        >
          <div
            onClick={() => handleTabClick("university")}
            className={`cursor-pointer flex items-center justify-center text-10xl font-red-hat-text text-black text-left inline-block min-w-[103px] z-[1] mq450:text-4xl mq1440:text-[20px] text-center w-[280px] h-[80px]  smm:text-[10px] smm:h-[60px] ${
              activeTab == "university" ? "bg-orange-100" : ""
            }`}
          >
            University
          </div>
          <div
            onClick={() => handleTabClick("college")}
            className={`cursor-pointer flex items-center justify-center text-10xl font-red-hat-text text-black text-left inline-block min-w-[103px] z-[1] mq450:text-4xl mq1440:text-[20px] text-center w-[280px] h-[80px] smm:text-[10px] smm:h-[60px] ${
              activeTab == "college" ? "bg-orange-100" : ""
            }`}
          >
            Colleges
          </div>
          <div
            onClick={() => handleTabClick("school")}
            className={`cursor-pointer flex items-center justify-center text-10xl font-red-hat-text text-black text-left inline-block min-w-[103px] z-[1] mq450:text-4xl mq1440:text-[20px] text-center w-[280px] h-[80px] smm:text-[10px] smm:h-[60px]  ${
              activeTab == "school" ? "bg-orange-100" : ""
            }`}
          >
            Schools
          </div>
        </div>
      </div>
      <div className="w-[516px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border min-w-[516px] max-w-full ml-[-24px] mq900:min-w-full mq1600:flex-1 mq1600:ml-0 smm:hidden">
        <div className="self-stretch flex flex-row items-end justify-start gap-[35px] max-w-full mq900:flex-wrap mq900:gap-[35px_17px]">
          <img
            className="h-[325px] flex-1 absolute right-[15px] max-w-full overflow-hidden object-cover min-w-[274px] mq1275:hidden"
            loading="lazy"
            alt=""
            src="/image-7@2x.png"
          />
          <div
            onClick={() => handleScroll("left")}
            className="cursor-pointer w-[60px] flex flex-col items-start justify-end pt-0 px-0 pb-[22.300000000000185px] box-border smm:hidden"
          >
            <img
              className="self-stretch h-[14.7px] absolute right-[70px] max-w-full overflow-hidden shrink-0 object-contain"
              alt=""
              src="/arrow-8.svg"
            />
          </div>
        </div>
      </div>
      <img
        onClick={() => handleScroll("right")}
        className="cursor-pointer h-[14.7px] w-[60px] absolute !m-[0] right-[0px] bottom-[29.3px] smm:hidden"
        alt=""
        src="/arrow-9.svg"
      />
    </div>
  );
};

export default TopRatedCollection;
