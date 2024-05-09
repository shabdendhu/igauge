import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type ShapeScaler1Type = {
  career1?: string;
  employability?: string;

  /** Style props */
  propTop?: CSSProperties['top'];
  propWidth?: CSSProperties['width'];
  propGap?: CSSProperties['gap'];
  propHeight?: CSSProperties['height'];
  propWidth1?: CSSProperties['width'];
  propMinHeight?: CSSProperties['minHeight'];
  propPadding?: CSSProperties['padding'];
  propDisplay?: CSSProperties['display'];
  propMinWidth?: CSSProperties['minWidth'];
};

const ShapeScaler1: NextPage<ShapeScaler1Type> = ({
  career1,
  employability,
  propTop,
  propWidth,
  propGap,
  propHeight,
  propWidth1,
  propMinHeight,
  propPadding,
  propDisplay,
  propMinWidth
}) => {
  const shapeScalerStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop
    };
  }, [propTop]);

  const conditionSequencerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth
    };
  }, [propWidth]);

  const valueCombinerStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap
    };
  }, [propGap]);

  const career1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
      minHeight: propMinHeight
    };
  }, [propHeight, propWidth1, propMinHeight]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding
    };
  }, [propPadding]);

  const employability1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className="absolute top-[407px] left-[1px] bg-whitesmoke-100 w-full overflow-x-auto flex flex-row items-end justify-start py-4 px-[38px] box-border gap-[192.1px] max-w-full z-[1] text-left text-lg text-black font-red-hat-text"
      style={shapeScalerStyle}>
      <div className="h-[79px] w-[1645px] relative bg-whitesmoke-100 shrink-0 hidden" />
      <div
        className="w-[246.9px] shrink-0 flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border"
        style={conditionSequencerStyle}>
        <div
          className="flex flex-row items-start justify-start gap-[17px]"
          style={valueCombinerStyle}>
          <img
            className="h-[26px] w-[26px] relative overflow-hidden shrink-0 min-h-[26px] z-[2]"
            alt=""
            src={career1}
            style={career1IconStyle}
          />
          <div
            className="flex flex-col items-start justify-start pt-px px-0 pb-0"
            style={frameDiv3Style}>
            <div
              className="relative font-medium inline-block min-w-[119px] z-[2]"
              style={employability1Style}>
              {employability}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[47px] w-[229.9px] relative shrink-0">
        <img
          className="absolute top-[0px] left-[0px] rounded-[2.48px] w-[217.9px] h-[47px] z-[2]"
          alt=""
          src="/rectangle-2042.svg"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.5px] left-[3.7px] w-[210.4px] h-[42.1px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[3]"
            alt=""
            src="/rectangle-2052.svg"
          />
          <div className="absolute top-[11.1px] left-[64.4px] text-mid uppercase font-inter text-black text-left inline-block w-[82px] h-[21px] min-w-[82px] z-[4]">
            Diamond
          </div>
        </button>
      </div>
      <div className="h-[47px] w-[217.9px] relative shrink-0">
        <img
          className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[2]"
          alt=""
          src="/rectangle-2042.svg"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.5px] left-[3.7px] w-[210.4px] h-[42.1px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[3]"
            alt=""
            src="/rectangle-2052.svg"
          />
          <div className="absolute top-[11.1px] left-[64.4px] text-mid uppercase font-inter text-black text-left inline-block w-[82px] h-[21px] min-w-[82px] z-[4]">
            Diamond
          </div>
        </button>
      </div>
      <div className="h-[47px] w-[217.9px] relative shrink-0">
        <img
          className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[2]"
          alt=""
          src="/rectangle-2042.svg"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.5px] left-[3.7px] w-[210.4px] h-[42.1px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[3]"
            alt=""
            src="/rectangle-2052.svg"
          />
          <div className="absolute top-[11.1px] left-[64.4px] text-mid uppercase font-inter text-black text-left inline-block w-[82px] h-[21px] min-w-[82px] z-[4]">
            Diamond
          </div>
        </button>
      </div>
    </div>
  );
};

export default ShapeScaler1;
