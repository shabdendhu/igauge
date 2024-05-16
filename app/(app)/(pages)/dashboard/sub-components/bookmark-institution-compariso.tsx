"use client";
import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import { Button } from "@mui/material";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type BookmarkInstitutionComparisoType = {
  historyYellowOval1?: string;
  bookmarkInstitutions?: string;
  viewFavorite?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
};

const BookmarkInstitutionCompariso: NextPage<
  BookmarkInstitutionComparisoType
> = ({
  historyYellowOval1,
  bookmarkInstitutions,
  viewFavorite,
  propPadding,
  propWidth,
  propMaxHeight,
  propHeight,
  propMinWidth,
}) => {
  const igaugeinvertedRGBGaugeTwiStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const historyYellowOval1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      maxHeight: propMaxHeight,
      height: propHeight,
    };
  }, [propWidth, propMaxHeight, propHeight]);

  const viewFavoriteStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);
  const fontSize = useCalculateFontSize();
  return (
    <div className="flex rounded-8xs bg-white box-border flex flex-col items-start justify-start p-6  max-w-full text-left text-29xl text-black font-red-hat-text border-[1px] border-solid border-whitesmoke-200 aspect-square overflow-hidden 2xl:gap-[90px] xl:gap-[60px] md:gap-[40px] justify-around">
      <div
        className="self-stretch flex flex-row items-start justify-center max-w-full"
        style={igaugeinvertedRGBGaugeTwiStyle}
      >
        <img
          className="w-1/2 overflow-hidden shrink-0 max-w-full "
          loading="lazy"
          alt=""
          src={historyYellowOval1}
          style={historyYellowOval1IconStyle}
        />
      </div>
      <div className=" flex flex-col items-center justify-center gap-3 w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[14px]">
          <div className="self-stretch flex flex-row items-start justify-center  pl-5">
            <h1
              style={{
                fontSize: fontSize(48, 21, 1920, 400),
              }}
              className="m-0 relative  font-normal font-inherit z-[1] text-center"
            >
              {bookmarkInstitutions}
            </h1>
          </div>
          <div
            style={{
              fontSize: fontSize(20, 12, 1920, 400),
            }}
            className="self-stretch relative  text-darkslategray-300 text-center "
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <Button className="md:w-1/2 aspect-[441/82] cursor-pointer py-[10px] px-5 bg-orange-200 w-auto rounded-8xs box-border flex flex-row items-center justify-center whitespace-nowrap max-w-full z-[1] border-[1px] border-solid border-whitesmoke-200 hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray-200 rounded-[0]">
            <div
              className="relative text-sm md:text-xl font-semibold font-red-hat-text text-black text-center inline-block min-w-[250px] z-[1]"
              style={viewFavoriteStyle}
            >
              {viewFavorite}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkInstitutionCompariso;
