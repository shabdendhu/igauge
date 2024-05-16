"use client";
import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import type { NextPage } from "next";

const FeatureSplitter: NextPage = () => {
  const fontSize = useCalculateFontSize();

  return (
    <div className="  h-60 flex  justify-between items-center pr-8 ">
      <div className="flex flex-col gap-y-3">
        <img
          className="w-16 h-16  "
          loading="lazy"
          alt=""
          src="/frame-202.svg"
        />
        <div className="flex flex-col gap-y-2">
          <h2
            style={{
              fontSize: fontSize(28, 22, 1920, 400),
            }}
            className=" font-semibold font-libre-baskerville"
          >
            Lorem Ipsum
          </h2>
          <p
            style={{
              fontSize: fontSize(20, 15, 1920, 400),
            }}
            className="text-darkslategray font-red-hat-text "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            saepe blanditi
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSplitter;

// <div className="max-w-sm mx-[30px] flex flex-col items-start gap-7 text-left font-libre-baskerville">
// <img
//   className="w-24 h-24 relative shrink-0"
//   loading="lazy"
//   alt=""
//   src="/frame-202.svg"
// />
//   <div className="self-stretch flex flex-col items-start gap-4 shrink-0">
//     <h2 className="m-0 text-[20px] font-bold">Lorem Ipsum</h2>
//     <div className="self-stretch text-[14px] text-darkslategray font-red-hat-text sm:text-base">
//       Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//       accusantium doloremque laudantium, totam rem aperiam
//     </div>
//   </div>
// </div>
