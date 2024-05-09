import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";

const FrameComponent4: NextPage = () => {
  return (
    <section className="w-full flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-29xl text-black font-libre-baskerville">
      <div className="flex w-full flex-row items-start justify-start pt-0 px-0 pb-[105px] box-border relative max-w-full z-[1]  mq900:pb-11 mq900:box-border mq1275:pb-[68px] mq1275:box-border">
        <div className="w-[1.6px] relative box-border shrink-0 border-r-[1.6px] border-solid border-graylighter" />
        <div className="w-full shrink-0 flex flex-col items-start justify-start pt-[142px] pb-0 pr-[22.59999999999991px] pl-0 box-border mq900:pt-[92px] mq900:box-border">
          <div className="self-stretch flex flex-col items-center justify-center gap-[30px] mb-[52px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[27px] pl-5">
              <div className="flex flex-row items-start justify-start gap-[5.800000000000182px]">
                <img
                  className="self-stretch w-[43.1px] relative max-h-full min-h-[69px] shrink-0 [debug_commit:1de1738]"
                  alt=""
                  src="/vector-51.svg"
                />
                <img
                  className="self-stretch w-[43.1px] relative max-h-full min-h-[69px] shrink-0 [debug_commit:1de1738]"
                  alt=""
                  src="/vector-51.svg"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <h1 className="m-0 self-stretch text-[33.6px] relative z-[1] w-[940px] font-bold font-inherit mq900:text-19xl mq450:text-10xl">
                “Universities exist to transmit knowledge and understanding of
                ideas and values to students not to provide entertainment for
                spectators or employment for athletes.”
              </h1>
            </div>
          </div>
          <FrameComponent3 />
        </div>

        <div className="absolute w-full h-[688.1px] max-w-[1440px] mx-auto">
          <div className="grid grid-cols-10 w-full h-full">
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-graylighter" />
            <div className="col-span-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
