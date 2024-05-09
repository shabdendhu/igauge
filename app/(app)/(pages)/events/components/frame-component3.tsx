import type { NextPage } from "next";
import FeatureSplitter from "./feature-splitter";

const FrameComponent3: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[74px] box-border max-w-full text-center text-40xl text-black font-libre-baskerville mq900:pb-[31px] mq900:box-border mq1275:pb-12 mq1275:box-border mq450:pb-5 mq450:box-border">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="grid flex-row items-start justify-start pt-0 pb-[137.69999999999982px] pr-3.5 pl-[15px] box-border gap-[29.700000000000273px] max-w-full grid-cols-[repeat(3,_minmax(383px,_1fr))] mq900:pb-[90px] mq900:box-border mq900:grid-cols-[minmax(383px,_1fr)] mq1275:justify-center mq1275:grid-cols-[repeat(2,_minmax(383px,_663px))]">
          <img
            className="relative z-[1] rounded-[4.01px] max-w-full overflow-hidden max-h-full object-cover min-h-[554px] mq900:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-224@2x.png"
          />
          <img
            className="relative rounded-[4.01px] z-[1] max-w-full overflow-hidden max-h-full object-cover min-h-[554px] mq900:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-225@2x.png"
          />
          <img
            className="relative rounded-[4.01px] z-[1] max-w-full overflow-hidden max-h-full object-cover min-h-[554px] mq900:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-226@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start pt-[127px] px-0 pb-[130px] box-border gap-[134px] max-w-full z-[1] mt-[-92px] mq900:gap-[33px_134px] mq900:pb-24 mq900:box-border mq1275:gap-[67px_134px] mq1275:pb-[148px] mq1275:box-border">
        <div className="self-stretch h-[953px] relative bg-white hidden" />
        <div className="self-stretch flex flex-col items-center justify-center gap-[40px] max-w-full mq900:gap-[20px_40px]">
          <h1 className="m-0 self-stretch relative font-bold text-[41.286px] z-[1] mq900:text-28xl mq450:text-16xl">
            What to Expect
          </h1>
          <div className="self-stretch w-full flex flex-row items-center justify-center py-0 pr-5 pl-[21px] box-border  text-5xl text-darkslategray font-red-hat-text">
            <h2 className="m-0 max-w-[602px] text-[16.8px]  font-normal text-[41.286px] inline-block shrink-0 max-w-full z-[1] mq450:text-lgi">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam
            </h2>
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-center py-0 px-5 box-border mx-auto max-w-6xl">
          <div className="w-full flex flex-row items-start justify-between gap-[20px]">
            <FeatureSplitter />
            <div className="h-64 w-px flex flex-col items-start justify-start pt-4 box-border">
              <div className="w-px flex-1 box-border z-[1] border-r-[1px] border-solid border-khaki" />
            </div>
            <FeatureSplitter />
            <div className="h-64 w-px flex flex-col items-start justify-start pt-4 box-border">
              <div className="w-px flex-1 box-border z-[1] border-r-[1px] border-solid border-khaki" />
            </div>
            <FeatureSplitter />
            <div className="h-64 w-px flex flex-col items-start justify-start pt-4 box-border">
              <div className="w-px flex-1 box-border z-[1] border-r-[1px] border-solid border-khaki" />
            </div>
            <FeatureSplitter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
