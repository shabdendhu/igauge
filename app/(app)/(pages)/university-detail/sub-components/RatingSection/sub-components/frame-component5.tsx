import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type FrameComponent5Type = {
  rectangle204?: string;
  rectangle205?: string;
  gOLD?: string;
  facultyQuality?: string;

  /** Style props */
  propPadding?: CSSProperties['padding'];
  propColor?: CSSProperties['color'];
  propDisplay?: CSSProperties['display'];
  propMinWidth?: CSSProperties['minWidth'];
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({
  rectangle204,
  rectangle205,
  gOLD,
  facultyQuality,
  propPadding,
  propColor,
  propDisplay,
  propMinWidth
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding
    };
  }, [propPadding]);

  const gOLDStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor
    };
  }, [propColor]);

  const facultyQualityStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className="w-[157px] flex flex-col items-start justify-start gap-[11px] text-left text-sm text-black font-red-hat-text"
      style={frameDivStyle}>
      <div className="self-stretch h-[34px] relative">
        <img
          className="absolute top-[0px] left-[0px] rounded-[1.79px] w-full h-full"
          alt=""
          src={rectangle204}
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1.8px] left-[2.7px] w-[152.1px] h-[30.4px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[1.79px] w-full h-full z-[1]"
            alt=""
            src={rectangle205}
          />
          <div
            className="absolute top-[8px] left-[46.5px] text-smi-3 uppercase font-inter text-black text-center inline-block w-[59.1px] h-[15px] z-[2]"
            style={gOLDStyle}>
            {gOLD}
          </div>
        </button>
      </div>
      <div
        className="relative font-medium inline-block min-w-[100px]"
        style={facultyQualityStyle}>
        {facultyQuality}
      </div>
    </div>
  );
};

export default FrameComponent5;
