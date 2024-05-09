import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type FrameComponent2Type = {
  vector2?: string;
  vector4?: string;

  /** Style props */
  propDebugCommit?: CSSProperties;
  propWidth?: CSSProperties['width'];
  propHeight?: CSSProperties['height'];
  propDebugCommit1?: CSSProperties;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  vector2,
  vector4,
  propDebugCommit,
  propWidth,
  propHeight,
  propDebugCommit1
}) => {
  //@ts-ignore
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit
    };
  }, [propDebugCommit]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight
    };
  }, [propWidth, propHeight]);

  //@ts-ignore
  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1
    };
  }, [propDebugCommit1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[19.299999999999955px] max-w-full text-left text-mini text-black font-red-hat-text">
      <div className="w-[429.3px] flex flex-col items-start justify-start gap-[14.5px] max-w-full">
        <div
          className="self-stretch flex flex-row items-start justify-start gap-[24.699999999999815px] mq450:flex-wrap"
          style={frameDivStyle}>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[7.300000000000182px] mq450:flex-wrap">
              <div className="h-[18px] w-[18px] relative overflow-hidden shrink-0 z-[2]">
                <img
                  className="absolute top-[1.8px] left-[0px] w-[16.5px] h-[16.5px] z-[1]"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[33px] min-w-[186px] mq450:flex-wrap mq450:gap-[33px_16px]">
                <div className="relative whitespace-nowrap z-[1]">
                  9:30 AM to 11:00 AM
                </div>
                <div className="w-[114px] flex flex-row items-start justify-start pt-0.5 px-0 pb-[2.2000000000000455px] box-border relative z-[1]">
                  <img
                    className="h-full w-full absolute !m-[0] top-[-1.3px] left-[-0.2px] object-contain"
                    alt=""
                    src="/frame-327@2x.png"
                  />
                  <img
                    className="h-[15.8px] w-[16.9px] relative z-[1]"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5 text-13xl font-libre-baskerville">
              <b className="relative z-[2] mq900:text-7xl mq450:text-lgi">
                Event Name
              </b>
            </div>
          </div>
          <div className="h-[21px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[10px]">
            <div className="h-5 w-5 relative">
              <div className="absolute top-[3.3px] left-[4.2px] w-[11.7px] h-[16.7px]">
                <img
                  className="absolute top-[6.7px] left-[0px] w-[11.7px] h-2.5 z-[1]"
                  alt=""
                  src="/vector-8.svg"
                />
                <img
                  className="absolute top-[0px] left-[2.5px] w-[6.7px] h-[6.7px] z-[2]"
                  alt=""
                  src={vector2}
                />
              </div>
              <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
                <div className="h-[14.2px] w-5 relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full z-[3]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className="absolute top-[0.8px] left-[1.7px] w-[16.7px] h-[12.5px]">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[4]"
                      alt=""
                      src={vector4}
                    />
                    <img
                      className="absolute top-[1.7px] left-[1.6px] w-[13.3px] h-[9.2px] z-[5]"
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative inline-block [transform:_rotate(0.9deg)] min-w-[63px] z-[1]">
              In Person
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start py-0 px-0.5 box-border w-[19.200000000000045px] h-[19.200000000000045px]"
          style={frameDiv1Style}>
          <img
            className="h-[19.2px] w-[15.2px] relative z-[2]"
            alt=""
            src="/vector-13.svg"
            style={vectorIconStyle}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-5xl-3">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <div className="h-[189px] w-[714px] !m-[0] absolute top-[-77px] right-[3px] flex flex-row items-start justify-start py-8 px-[22.300000000000185px] box-border z-[1]">
            <div className="relative inline-block min-w-[120px] z-[2] mq450:text-lgi">
              Delhi, India
            </div>
          </div>
          <h2 className="m-0 flex-1 relative text-5xl font-normal font-inherit text-darkslategray inline-block max-w-full z-[2] mq450:text-lgi">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
