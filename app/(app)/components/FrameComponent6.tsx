import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent6Type = {
  prop?: string;

  /** Style props */
  propDebugCommit?: CSSProperties;
};

const ViewMoreButton: FunctionComponent<FrameComponent6Type> = ({
  prop,
  propDebugCommit,
}) => {
  // @ts-ignore
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[105.69999999999982px] pr-5 pl-[33px] xlm:pb-10">
      <button
        className="cursor-pointer [border:none] pt-[22.300000000000185px] px-[54.29999999999927px] pb-[18px] bg-orange-200  flex flex-row items-center justify-center box-border gap-[7.700000000000728px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1440:px-[30px] mq1440:py-[16px] text-center"
        style={buttonStyle}
      >
        <div className="bg-orange-200 hidden" />
        <div className="text-8xl-3 font-red-hat-display text-black text-left z-[1] mq450:text-3xl mq1440:text-[19px] mq1440:">
          View More
        </div>
        <div className="flex flex-col items-center justify-center px-0 pb-0">
          <img
            className="w-3.5 h-3.5 relative z-[1] mq1440:h-[10px]"
            alt=""
            src={prop}
          />
        </div>
      </button>
    </div>
  );
};

export default ViewMoreButton;
