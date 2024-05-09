import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type FrameComponent4Type = {
  employability?: string;

  /** Style props */
  propWidth?: CSSProperties['width'];
  propPadding?: CSSProperties['padding'];
  propAlignSelf?: CSSProperties['alignSelf'];
  propWidth1?: CSSProperties['width'];
  propDisplay?: CSSProperties['display'];
  propMinWidth?: CSSProperties['minWidth'];
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({
  employability,
  propWidth,
  propPadding,
  propAlignSelf,
  propWidth1,
  propDisplay,
  propMinWidth
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding
    };
  }, [propWidth, propPadding]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1
    };
  }, [propAlignSelf, propWidth1]);

  const employabilityStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className="w-[162px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border gap-[7px] text-left text-sm text-black font-red-hat-text"
      style={frameDiv1Style}>
      <div className="self-stretch h-[34px] relative" style={frameDiv2Style}>
        <img
          className="absolute top-[0px] left-[0px] rounded-[1.79px] w-full h-full"
          alt=""
          src="/rectangle-204-2.svg"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1.8px] left-[2.7px] w-[152.1px] h-[30.4px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[1.79px] w-full h-full z-[1]"
            alt=""
            src="/rectangle-205-2.svg"
          />
          <div className="absolute top-[8.2px] left-[44.8px] text-smi-3 uppercase font-inter text-white text-left inline-block w-16 h-[15px] min-w-[64px] z-[2]">
            Platinum
          </div>
        </button>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[3px]">
        <div
          className="relative font-medium inline-block min-w-[90px]"
          style={employabilityStyle}>
          {employability}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
