import { FunctionComponent } from "react";
import ValueCombiner from "./ValueCombiner";
import Link from "next/link";

const SkewTransform: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[149px] pr-5 pl-[21px] box-border max-w-full text-left text-36xl text-black font-libre-baskerville mq450:pb-[63px] mq450:box-border mq900:pb-[97px] mq900:box-border">
      <div className="w-[1645px] flex flex-row flex-wrap items-end justify-center gap-[103px] max-w-full mq450:gap-[26px] mq900:gap-[51px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[76px] min-w-[501px] max-w-full mq450:gap-[19px_76px] mq900:gap-[38px_76px] mq900:min-w-full">
          <div className="w-[711px] flex flex-row items-center justify-center py-0 px-px box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-14xl mq900:text-25xl">
              Blog Posts
            </h1>
            <Link
              href={"/blogs"}
              className="flex text-sm underline text-[#272761] justify-center items-center"
            >
              View More
              <div className="flex pl-1">
                <img
                  className=" w-[5.6px] h-[9.8px]"
                  alt=""
                  src="/vector-15.svg"
                />
                <img
                  className=" w-[5.6px] h-[9.9px] z-[1]"
                  alt=""
                  src="/vector-16.svg"
                />
              </div>
            </Link>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full text-17xl-7 mq450:gap-[22px_45px]">
            <ValueCombiner filterSet="/rectangle-160@2x.png" />
            <ValueCombiner filterSet="/rectangle-160-1@2x.png" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[95.5px] min-w-[501px] max-w-full text-lgi-2 text-darkslateblue font-red-hat-display mq450:gap-[24px_95.5px] mq900:gap-[48px_95.5px] mq900:min-w-full">
          <div className="flex flex-row items-start justify-start gap-[7px]">
            {/* <div className="relative [text-decoration:underline] leading-[25.5px] inline-block min-w-[92.9px]">
              View More
            </div> */}
            <div className="flex flex-col items-start justify-start pt-[9.099999999999907px] px-0 pb-0">
              <div className="w-[9.8px] h-[9.9px] relative">
                {/* <img
                  className="absolute top-[0.1px] left-[4.2px] w-[5.6px] h-[9.8px]"
                  alt=""
                  src="/vector-15.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[5.6px] h-[9.9px] z-[1]"
                  alt=""
                  src="/vector-16.svg"
                /> */}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[22px_45px]">
            <ValueCombiner filterSet="/rectangle-160-2@2x.png" />
            <ValueCombiner filterSet="/rectangle-160-1@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkewTransform;
