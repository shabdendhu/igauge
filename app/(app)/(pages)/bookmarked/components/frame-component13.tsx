import type { NextPage } from 'next';

const FrameComponent: NextPage = () => {
  return (
    <div className="w-[1643px] flex flex-row items-start justify-end py-0 px-1 box-border max-w-full text-left text-29xl text-black font-red-hat-text">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
        <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-10xl mq900:text-19xl">
          Compare Institutions
        </h1>
        <button className="cursor-pointer py-[25px] px-[55px] bg-orange-200 rounded-8xs flex flex-row items-start justify-start gap-[6px] border-[1px] border-solid border-whitesmoke-200">
          <div className="h-[82px] w-[193px] relative rounded-8xs bg-orange-200 box-border hidden border-[1px] border-solid border-whitesmoke-200" />
          <img
            className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px] z-[1]"
            alt=""
            src="/back.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative text-xl font-semibold font-red-hat-text text-black text-center inline-block min-w-[47px] z-[1] mq450:text-base">
              Back
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
