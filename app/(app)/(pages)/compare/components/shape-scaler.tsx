import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ShapeScalerType = {
  /** Style props */
  propLeft?: CSSProperties["left"];
};

const ShapeScaler: NextPage<ShapeScalerType> = ({ propLeft }) => {
  const shapeScaler1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button
      className="cursor-pointer [border:none] pt-[17.9px] pb-[18.1px] pr-5 pl-[21px] bg-orange-200 absolute top-[2742px] left-[407px] rounded-[3.89px] w-[361px] flex flex-row items-start justify-center box-border gap-[13.9px] max-w-full z-[1]"
      style={shapeScaler1Style}
    >
      <div className="h-[67px] w-[361px] relative rounded-[3.89px] bg-orange-200 hidden max-w-full" />
      <input className="m-0 h-[24.2px] w-[15.6px]" type="checkbox" />
      <div className="relative text-4xl-4 font-red-hat-text text-black text-left inline-block min-w-[93px] z-[1] mq450:text-lgi">
        Visit Site
      </div>
    </button>
  );
};

export default ShapeScaler;
