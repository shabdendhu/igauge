import type { NextPage } from 'next';
import { useMemo, type CSSProperties } from 'react';

export type FrameComponent1Type = {
  functionDefinition?: string;
  vector?: string;

  /** Style props */
  propHeight?: CSSProperties['height'];
  propPadding?: CSSProperties['padding'];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  functionDefinition,
  vector,
  propHeight,
  propPadding
}) => {
  const ifStatementStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding
    };
  }, [propHeight, propPadding]);

  return (
    <div className="flex-1 bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[26px] gap-[23px] min-w-[514px] max-w-full text-left text-mini text-black font-red-hat-text border-[1px] border-solid border-whitesmoke mq900:min-w-full">
      <div className="self-stretch h-[762px] relative bg-white box-border hidden border-[1px] border-solid border-whitesmoke" />
      <img
        className="self-stretch h-[394px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/rectangle-277@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-9 pl-[30px] box-border max-w-full">
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full mq900:gap-[17px_35px]"
          style={ifStatementStyle}>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
            <div className="w-[429.3px] flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border gap-[33px] max-w-full mq450:flex-wrap mq450:gap-[33px_16px]">
              <div className="flex flex-row items-start justify-start gap-[7.300000000000182px]">
                <div className="h-[18px] w-[18px] relative overflow-hidden shrink-0 z-[2]">
                  <img
                    className="absolute top-[1.8px] left-[0px] w-[16.5px] h-[16.5px] z-[1]"
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
                <div className="relative whitespace-nowrap z-[1]">
                  9:30 AM to 11:00 AM
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[24.699999999999815px] min-w-[151px]">
                <div className="flex-1 flex flex-row items-start justify-start pt-0.5 px-0 pb-[2.2000000000000455px] relative z-[1]">
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
                        src={functionDefinition}
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
                            src={vector}
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
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5 text-13xl font-libre-baskerville">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <h1 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq900:text-7xl mq450:text-lgi">
                  Event Name
                </h1>
                <div className="flex flex-row items-start justify-start gap-[13.100000000000364px] text-5xl-3 font-red-hat-text">
                  <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                    <img
                      className="w-[15.2px] h-[19.2px] relative shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-13.svg"
                    />
                  </div>
                  <div className="relative inline-block min-w-[120px] shrink-0 [debug_commit:1de1738] z-[1] mq450:text-lgi">
                    Delhi, India
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-5xl text-darkslategray">
              <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-lgi">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo.
              </h2>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[15px] pb-[17.40000000000009px] pr-[33px] pl-[34px] bg-orange-200 flex flex-row items-start justify-start gap-[7.800000000000182px] z-[1]">
            <div className="h-[50.4px] w-[177px] relative bg-orange-200 hidden" />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-4 h-4 relative z-[1]"
                alt=""
                src="/mediator-pattern.svg"
              />
            </div>
            <div className="relative text-mid-8 leading-[17px] font-red-hat-display text-black text-left inline-block min-w-[86.1px] z-[1]">
              Apply Now
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
