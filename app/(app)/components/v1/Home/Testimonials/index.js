"use client";
import React, { useRef } from "react";
import BarChart from "../../../BarChart";
import Logarithmic from "../../../Logarithmic";

const Testimonial = () => {
  const scrollContainerRef = useRef(null);
  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      if (direction === "left") {
        scrollContainer.scrollLeft -= 400; // Adjust the scroll amount as needed
      } else if (direction === "right") {
        scrollContainer.scrollLeft += 400; // Adjust the scroll amount as needed
      }
    }
  };
  return (
    <section className="w-full bg-blanchedalmond pl-10 pt-10 pb-20 flex flex-col gap-[60px] mq900:px-5  mq1440:px-5 relative md:pl-[130px] min-h-[800px] justify-center overflow-hidden">
      <BarChart />
      <div
        id="movile-component"
        className="md:hidden z-[5] flex flex-row gap-[40px] ml-[20px] overflow-auto"
        ref={scrollContainerRef}
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        <Logarithmic />
        <Logarithmic />
        <Logarithmic />
        <Logarithmic />
        <Logarithmic />
      </div>
      <div
        ref={scrollContainerRef}
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        id="desktop-component"
        className="flex flex-row gap-[10px] overflow-auto mdm:hidden z-[5] no-scrollbar"
      >
        {Array(5)
          .fill("")
          .map((e, i) => (
            <Logarithmic key={i} />
          ))}
      </div>
      <div className="flex self-center md:absolute md:right-20 md:top-20 z-[5]">
        <img
          onClick={() => handleScroll("left")}
          src="/arrow-left.webp"
          className="cursor-pointer"
        />
        <img
          onClick={() => handleScroll("right")}
          src="/arrow-right.webp"
          className="cursor-pointer"
        />
      </div>
      <img
        className="w-[300px] h-[604px] absolute !m-[0] bottom-[-100px] left-[-100px] z-[1]"
        alt=""
        src="/frame-49.svg"
      />
      <img
        className="absolute h-full top-[-100px] bottom-[0px] left-[90%] max-h-full w-[300px] z-[1]"
        loading="lazy"
        alt=""
        src="/frame-56.svg"
      />
    </section>
  );
};

export default Testimonial;
