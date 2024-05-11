import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent8Type = {
  cMRUniversity?: string;
  delhiIndia?: string;
  vector1?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  cMRUniversity,
  delhiIndia,
  vector1,
  propWidth,
  propMinWidth,
  propDisplay,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const delhiIndiaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div
      className="w-[376.9px] flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] text-left text-11xl text-black font-red-hat-text mt-[20px] mq900:w-full mq1600:mt-[17px]"
      style={frameDiv1Style}
    >
      <div className="flex flex-col items-start justify-start gap-[9px] shrink-0 [debug_commit:1de1738]">
        <div className="relative mq450:text-lg mq900:text-5xl mq1440:text-[21px] max-w-[70%] whitespace-nowrap overflow-hidden overflow-ellipsis">
          {cMRUniversity}
        </div>
        <div className="flex flex-row items-start justify-start gap-[13px] text-xl mq1440:text-[14px]">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 ">
            <img
              className="w-[15px] h-[19px] relative"
              alt=""
              src="/vector-7.svg"
            />
          </div>
          <div
            className="relative inline-block min-w-[98px] mq450:text-base capitalize"
            style={delhiIndiaStyle}
          >
            {delhiIndia}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[11.199999999999818px] px-0 pb-0">
        <img
          className="w-[29.8px] h-[24.8px] relative shrink-0 [debug_commit:1de1738]"
          alt=""
          src={vector1}
        />
      </div>
    </div>
  );
};

export default FrameComponent8;
