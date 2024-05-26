import React from "react";
import { useCalculateFontSize } from "../../../hooks/use-calculate-font-size";

const PageHeader = ({ header, path }) => {
  const fontSize = useCalculateFontSize();

  return (
    <div className="flex w-full  justify-between items-center  bg-orange-100/30  border border-orange-200 px-6 md:px-[150px] aspect-[1920/130] min-h-[57px]">
      <div
        style={{
          fontSize: fontSize(36, 15, 1920, 400),
        }}
        className="font-libre-baskerville font-semibold "
      >
        {header}
      </div>
      <div className="">
        <p
          style={{
            fontSize: fontSize(20, 12, 1920, 400),
          }}
          className=""
        >
          {path}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
