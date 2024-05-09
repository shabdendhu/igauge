import type { NextPage } from "next";

export type FrameComponentType = {
  calendar1?: string;
  prop?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ calendar1, prop }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[49.2px] max-w-full text-left text-3xs-4 text-dimgray font-red-hat-text mq900:gap-[25px] mq1275:flex-wrap">
      <div className="flex-1 rounded-t-none rounded-b-[3.35px] flex flex-col items-end justify-start min-w-[357px] max-w-full mq450:min-w-full">
        <div className="self-stretch h-[311.4px] flex flex-row items-start justify-start pt-[22.1px] px-[20.8px] pb-[22px] box-border bg-[url('/rectangle-245@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <img
            className="h-[311.4px] w-[547.1px] relative object-cover hidden max-w-full"
            alt=""
            src="/rectangle-245@2x.png"
          />
          <button className="cursor-pointer [border:none] pt-[7.4px] px-[17.4px] pb-[8.4px] bg-darkslateblue rounded-[3.35px] flex flex-row items-start justify-start z-[1]">
            <div className="h-[28.8px] w-[87px] relative rounded-[3.35px] bg-darkslateblue hidden" />
            <b className="relative text-2xs-7 inline-block font-libre-baskerville text-white text-left min-w-[52px] z-[1]">
              Category
            </b>
          </button>
        </div>
        <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-4 px-[20.8px] pb-6 gap-[16.8px] max-w-full z-[2] mt-[-0.7px] border-[0.7px] border-solid border-whitesmoke-100">
          <div className="w-[549.1px] h-[220.3px] relative bg-white box-border hidden max-w-full border-[0.7px] border-solid border-whitesmoke-100" />
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-[1.3px]">
            <div className="flex flex-row items-start justify-start gap-[5.3px]">
              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                <img
                  className="w-[9.4px] h-[9.4px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                  alt=""
                  src={calendar1}
                />
              </div>
              <div className="relative inline-block min-w-[65px] shrink-0 [debug_commit:1de1738] z-[1]">
                12 March, 2024
              </div>
            </div>
          </div>
          <div className="self-stretch h-[149.3px] flex flex-col items-start justify-start pt-0 px-0 pb-[51.7px] box-border gap-[8.2px] max-w-full z-[1] text-5xl-1 text-black font-libre-baskerville">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13.6px] shrink-0 [debug_commit:1de1738] max-w-full">
              <b className="relative inline-block max-w-full z-[2] mq450:text-lgi">
                Lorem ipsum dolor sit amet
              </b>
              <div className="self-stretch relative text-sm-4 font-red-hat-text text-darkslategray z-[2]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[12.5px] px-[32.9px] pb-[10.4px] bg-orange-200 flex flex-row items-start justify-start gap-[4.6px] shrink-0 [debug_commit:1de1738] z-[2]">
              <div className="h-[43.9px] w-[154px] relative bg-orange-200 hidden" />
              <div className="relative text-base-5 font-red-hat-display text-black text-left inline-block min-w-[75px] z-[3]">
                Read More
              </div>
              <div className="flex flex-col items-start justify-start pt-[7.6px] px-0 pb-0">
                <img
                  className="w-[7.3px] h-[7.9px] relative z-[3]"
                  alt=""
                  src={prop}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-t-none rounded-b-[3.35px] flex flex-col items-end justify-start min-w-[357px] max-w-full mq450:min-w-full">
        <div className="self-stretch h-[311.4px] flex flex-row items-start justify-start pt-[22.1px] px-[20.7px] pb-[22px] box-border bg-[url('/rectangle-245@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
          <img
            className="h-[311.4px] w-[547.1px] relative object-cover hidden max-w-full"
            alt=""
            src="/rectangle-245@2x.png"
          />
          <button className="cursor-pointer [border:none] pt-[7.4px] px-[17.4px] pb-[8.4px] bg-darkslateblue rounded-[3.35px] flex flex-row items-start justify-start z-[1]">
            <div className="h-[28.8px] w-[87px] relative rounded-[3.35px] bg-darkslateblue hidden" />
            <b className="relative text-2xs-7 inline-block font-libre-baskerville text-white text-left min-w-[52px] z-[1]">
              Category
            </b>
          </button>
        </div>
        <div className="self-stretch bg-white box-border flex flex-col items-start justify-start pt-4 px-[20.7px] pb-6 gap-[16.8px] max-w-full z-[2] mt-[-0.7px] border-[0.7px] border-solid border-whitesmoke-100">
          <div className="w-[549.1px] h-[220.3px] relative bg-white box-border hidden max-w-full border-[0.7px] border-solid border-whitesmoke-100" />
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-[1.4px]">
            <div className="flex flex-row items-start justify-start gap-[5.3px]">
              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                <img
                  className="w-[9.4px] h-[9.4px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                  alt=""
                  src="/calendar-1-4.svg"
                />
              </div>
              <div className="relative inline-block min-w-[65px] shrink-0 [debug_commit:1de1738] z-[1]">
                12 March, 2024
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[119.3px] box-border gap-[13.6px] max-w-full z-[1] text-5xl-1 text-black font-libre-baskerville">
            <b className="relative inline-block shrink-0 [debug_commit:1de1738] max-w-full z-[2] mq450:text-lgi">
              Lorem ipsum dolor sit amet
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8.2px] shrink-0 [debug_commit:1de1738] text-sm-4 text-darkslategray font-red-hat-text">
              <div className="self-stretch relative z-[2]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </div>
              <button className="cursor-pointer [border:none] pt-[12.5px] px-[32.9px] pb-[10.4px] bg-orange-200 flex flex-row items-start justify-start gap-[4.6px] z-[2]">
                <div className="h-[43.9px] w-[154px] relative bg-orange-200 hidden" />
                <div className="relative text-base-5 font-red-hat-display text-black text-left inline-block min-w-[75px] z-[3]">
                  Read More
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.6px] px-0 pb-0">
                  <img
                    className=" h-[6px] w-[6px] relative "
                    alt=""
                    src="/double_arrow.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
