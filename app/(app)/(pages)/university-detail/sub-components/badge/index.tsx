import RatingBadge from "@/app/(app)/components/v1/RatingBadge";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent6Type = {
  rectangle204?: string;
  rectangle205?: string;
  diamond?: string;
  teachingLearning?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Badge = ({
  rectangle204,
  rectangle205,
  diamond,
  teachingLearning,
  propTextAlign,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  value,
}: any) => {
  console.log(value);

  const diamondStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      minWidth: propMinWidth,
    };
  }, [propTextAlign, propMinWidth]);

  const teachingLearningStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  return (
    <div className="w-[165px] flex flex-col items-start justify-start gap-[9.199999999999818px] text-left text-sm text-black font-red-hat-text">
      <div className="self-stretch h-[120px] relative">
        {/* <img
          className="absolute top-[0px] left-[0px] rounded-[1.89px] w-full h-full"
          alt=""
          src={rectangle204}
        /> */}
        {/* <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1.9px] left-[2.8px] w-[160.3px] h-[32.1px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[1.89px] w-full h-full z-[1]"
            loading="lazy"
            alt=""
            src={rectangle205}
          />
          <div
            className="absolute top-[8.5px] left-[49.1px] text-smi-9 uppercase font-inter text-black text-left inline-block w-[62.2px] h-4 min-w-[62.2px] z-[2]"
            style={diamondStyle}
          >
            {diamond}
          </div>
        </button> */}
        {/* <img src={value?.category_rating?.badges_image?.url} /> */}
        {/* <div className="h-full bg-[#272761] aspect-[170/120]">d</div> */}
        <RatingBadge
          // key={i}
          badgeName={value?.category_rating?.badges_name}
          ratedBy={value?.category_rating?.rated_by}
          ratingName={value?.category_name?.category_name}
        />
      </div>
      {/* <div className="relative font-medium" style={teachingLearningStyle}>
        {value?.category_name?.category_name}
      </div> */}
    </div>
  );
};

export default Badge;
