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
  // @ts-ignore
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

  // @ts-ignore
  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      debugCommit: propDebugCommit1
    };
  }, [propDebugCommit1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[19.299999999999955px] max-w-full w-auto h-auto [transform:rotate(0deg)] text-left text-mini text-black font-red-hat-text hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[19.299999999999955px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
      <div className="w-[429.3000000000002px] flex flex-col items-start justify-start gap-[14.5px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[429.3000000000002px] hover:h-auto hover:flex-col hover:gap-[14.5px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
        <div
          className="self-stretch flex flex-row items-start justify-start gap-[24.699999999999815px] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[24.699999999999815px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq1275:flex-wrap"
          style={frameDivStyle}>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[20px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[7.300000000000182px] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[7.300000000000182px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] mq1275:flex-wrap">
              <div className="h-[18px] w-[18px] relative overflow-hidden shrink-0 flex gap-[0px] z-[2] hover:flex hover:w-[18px] hover:h-[18px] hover:gap-[0px]">
                <img
                  className="absolute top-[1.8px] left-[0px] w-[16.5px] h-[16.5px] bg-darkslateblue flex z-[1] hover:bg-darkslateblue hover:flex hover:w-[16.5px] hover:h-[16.5px]"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[33px] min-w-[186] h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[33px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[186] mq1275:flex-wrap mq1275:gap-[33px_16px]">
                <div className="relative flex whitespace-nowrap z-[1] hover:font-red-hat-text hover:text-mini hover:text-left hover:text-black hover:flex hover:whitespace-nowrap">
                  9:30 AM to 11:00 AM
                </div>
                <div className="w-[114px] flex flex-row items-start justify-start pt-0.5 px-0 pb-[2.2000000000000455px] box-border relative h-auto gap-[0px] z-[1] hover:flex hover:w-[114px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:pt-0.5 hover:px-0 hover:pb-[2.2000000000000455px] hover:box-border">
                  <img
                    className="h-full w-full absolute !m-[0] top-[-1.3px] left-[-0.2px] object-contain flex gap-[0px] hover:flex hover:w-full hover:h-full hover:gap-[0px]"
                    alt=""
                    src="/frame-327@2x.png"
                  />
                  <img
                    className="h-[15.8px] w-[16.9px] relative flex z-[1] hover:flex hover:w-[16.9px] hover:h-[15.8px]"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] text-13xl font-libre-baskerville hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-0.5 hover:box-border">
              <b className="relative flex font-bold z-[2] hover:font-bold hover:font-libre-baskerville hover:text-13xl hover:text-left hover:text-black hover:flex mq900:text-7xl mq1275:text-lgi">
                Event Name
              </b>
            </div>
          </div>
          <div className="h-[21px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[10px] w-auto [align-self:unset] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-[21px] hover:flex-row hover:gap-[10px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-px hover:pl-0 hover:box-border">
            <div className="h-5 w-5 relative flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-5 hover:h-5 hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
              <div className="absolute top-[3.3px] left-[4.2px] w-[11.699999999999818px] h-[16.700000000000045px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[11.699999999999818px] hover:h-[16.700000000000045px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <img
                  className="absolute top-[6.7px] left-[0px] w-[11.7px] h-2.5 bg-darkslateblue flex z-[1] hover:bg-darkslateblue hover:flex hover:w-[11.7px] hover:h-2.5"
                  alt=""
                  src="/vector-8.svg"
                />
                <img
                  className="absolute top-[0px] left-[2.5px] w-[6.7px] h-[6.7px] bg-darkslateblue flex z-[2] hover:bg-darkslateblue hover:flex hover:w-[6.7px] hover:h-[6.7px]"
                  alt=""
                  src={vector2}
                />
              </div>
              <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                <div className="h-[14.200000000000044px] w-5 relative flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-5 hover:h-[14.200000000000044px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full bg-darkslateblue flex z-[3] hover:bg-darkslateblue hover:flex hover:w-full hover:h-full"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className="absolute top-[0.8px] left-[1.7px] w-[16.699999999999818px] h-[12.5px] flex gap-[0px] items-start justify-start [transform:rotate(0deg)] hover:flex hover:w-[16.699999999999818px] hover:h-[12.5px] hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full bg-darkslateblue flex z-[4] hover:bg-darkslateblue hover:flex hover:w-full hover:h-full"
                      alt=""
                      src={vector4}
                    />
                    <img
                      className="absolute top-[1.7px] left-[1.6px] w-[13.3px] h-[9.2px] bg-darkslateblue flex z-[5] hover:bg-darkslateblue hover:flex hover:w-[13.3px] hover:h-[9.2px]"
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex [transform:rotate(0.9deg)] min-w-[63] z-[1] hover:font-red-hat-text hover:text-mini hover:text-left hover:text-black hover:flex hover:[transform:rotate(0.9deg)] hover:min-w-[63]">
              In Person
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start py-0 px-0.5 box-border w-[19.200000000000045px] h-[19.200000000000045px] [align-self:unset] gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[19.200000000000045px] hover:[align-self:unset] hover:h-[19.200000000000045px] hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:px-0.5 hover:box-border"
          style={frameDiv1Style}>
          <img
            className="h-[19.2px] w-[15.2px] relative bg-indianred flex z-[2] hover:bg-indianred hover:flex hover:w-[15.2px] hover:h-[19.2px]"
            alt=""
            src="/vector-13.svg"
            style={vectorIconStyle}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-5xl-3 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-0.5 hover:box-border hover:max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full">
          <div className="h-[189px] w-[714px] !m-[0] absolute top-[-77px] right-[3px] flex flex-row items-start justify-start py-8 px-[22.300000000000185px] box-border gap-[0px] z-[1] hover:flex hover:w-[714px] hover:h-[189px] hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:py-8 hover:px-[22.300000000000185px] hover:box-border">
            <div className="relative flex min-w-[120] z-[2] hover:font-red-hat-text hover:text-5xl-3 hover:text-left hover:text-black hover:flex hover:min-w-[120] mq1275:text-lgi">
              Delhi, India
            </div>
          </div>
          <h2 className="m-0 flex-1 relative text-5xl font-normal font-inherit text-darkslategray-300 flex max-w-full z-[2] hover:font-red-hat-text hover:text-5xl hover:text-left hover:text-darkslategray-300 hover:flex hover:flex-1 hover:max-w-full mq1275:text-lgi">
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
