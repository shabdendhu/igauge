"use client";
import { getInstitutionsByType } from "@/utils/getInstitution";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import InstitutionSelection from "@/app/(app)/components/v1/Home/InstitutionSelection";
import { IconButton } from "@mui/material";
const FrameComponent5 = ({ pageData }: any) => {
  const scrollContainerRef = useRef<any>(null);
  const handleScroll = (direction: string) => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      if (direction === "left") {
        scrollContainer.scrollLeft -= 200; // Adjust the scroll amount as needed
      } else if (direction === "right") {
        scrollContainer.scrollLeft += 200; // Adjust the scroll amount as needed
      }
    }
  };
  return (
    <section className="w-full h-[923px] flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-[115%] shrink-0 text-left text-5xl text-white font-red-hat-display">
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end py-[91px] pr-0 pl-[157px] box-border relative max-w-full mq900:pl-5 mdm:pt-[130px] mdm:self-auto mq900:pb-[59px] mq900:box-border mq1275:pl-[78px] mq1275:box-border mdm:pl-5">
        <div
          ref={scrollContainerRef}
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          className="w-full h-[530px] overflow-x-auto shrink-0 flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[23px] max-w-full z-[2] no-scrollbar"
        >
          {pageData.content[6].categories.map((e: any, i: number) => (
            <div
              key={i}
              style={{ scrollSnapAlign: "start" }}
              className="collection-university-card self-stretch w-[390px] shrink-0 flex flex-row items-end justify-start p-[31px] box-border relative max-w-full cursor-pointer scrollItem inline-block  transition-transform duration-300 transform-origin-left relative"
            >
              {/* <div className="bg-gradient-to-b from-darkgray to-black w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover bg-gradient-to-t from-black  to-transparent" /> */}
              <div className="absolute h-full  z-[2] w-full left-0 top-0 inset-0 bg-gradient-to-t from-black to-transparent" />

              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src={e.category.image.url}
              />
              <div className="relative font-semibold z-[1] mq450:text-lgi z-[3]">
                {e.category.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex z-[99] w-[300px] self-center mt-[50px] mdm:w-[182px] md:hidden">
          <IconButton
            className="h-full w-[45%]"
            onClick={() => handleScroll("left")}
          >
            <img className="h-full w-full" alt="" src="/arrow-left.webp" />
          </IconButton>
          <IconButton
            className="h-full w-[45%]"
            onClick={() => handleScroll("right")}
          >
            <img className="h-full w-full" alt="" src="/arrow-right.webp" />
          </IconButton>
        </div>
        <div className="w-full !m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-36xl text-black font-libre-baskerville">
          <img
            className="h-[604px] w-[618px] absolute !m-[0] bottom-[-280px] left-[-258px] z-[1]"
            alt=""
            src="/frame-49.svg"
          />
          <div className="w-[334px] !m-[0] absolute top-[-53px] right-[0px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full mdm:hidden">
            <div className="h-[388px] w-[388px] relative shrink-0 [debug_commit:1de1738] max-w-[117%]">
              <div className=" top-[0px] left-[0px] rounded-[50%] bg-orange-200 w-full h-full z-[1]" />
              <IconButton
                className="absolute top-[195px] left-[72px]   h-[14.7px] z-[5] cursor-pointer"
                onClick={() => handleScroll("left")}
              >
                <img alt="" src="/arrow-left.webp" />
              </IconButton>
              <IconButton
                className="absolute top-[195px] left-[140px]   h-[14.7px] z-[5] cursor-pointer"
                onClick={() => handleScroll("right")}
              >
                <img alt="" src="/arrow-right.webp" />
              </IconButton>
            </div>
          </div>
          <div className="flex-1 bg-blanchedalmond flex flex-col items-start justify-start pt-[74px] px-[157px] pb-[675px] box-border min-h-[883px] max-w-full mdm:pt-[30px] mdm:px-5">
            <div className="w-full flex flex-row items-start justify-center max-w-full mdm:w2/3">
              <div className="w-[538px] flex flex-row items-start justify-end pt-[58px] px-[85px] pb-[53px] box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[1]"></div>
            </div>
            <h1 className="m-0 w-full flex flex-wrap items-center gap-[10px] justify-start relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block max-w-full z-[2] mt-[-97px] mq450:text-[25px] mq900:text-[30px] mq1440:text-[45px] ">
              Collections
              <InstitutionSelection bgImage={"/untitled-design-3-1@2x.png"} />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
