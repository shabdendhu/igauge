"use client";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const FrameComponent1 = ({ pageData }: any) => {
  const router = useRouter();
  return (
    <section className="w-full grid grid-cols-12 flex justify-center bg-darkslateblue overflow-hidden shrink-0 max-w-full z-[2] text-center text-36xl text-white font-libre-baskerville">
      <div className="top-[0px] left-[-3px] bg-darkslateblue w-full h-full hidden" />
      <div className="col-span-3 flex flex-col justify-center items-end bottom-0">
        <img
          className="w-full  object-cover z-[1] h-full relative top-[50px]"
          alt=""
          src={pageData.content[10].image.url}
        />
      </div>
      <div className="col-span-6  flex flex-col items-end justify-center gap-[28px] max-w-full my-[72px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[18px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit capitalize font-bold font-inherit z-[1] mq450:text-14xl mq900:text-[40px]">
            {pageData.content[10].title}
          </h1>
          <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl-4 text-lightgray font-red-hat-text">
            <div className="relative leading-[27px] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[22px]">
              {pageData.content[10].description}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <button
            onClick={() => router.push(pageData.content[10].link)}
            className="cursor-pointer [border:none] pt-[22px] pb-[18.300000000000185px] pr-[50.29999999999927px] pl-[51px] bg-orange-200 flex flex-row items-start justify-start whitespace-nowrap z-[1]"
          >
            <div className="h-[77.3px] relative bg-orange-200 hidden" />
            <div className="relative text-8xl-3 font-red-hat-display text-black text-left z-[1]">
              Register Now
            </div>
          </button>
        </div>
      </div>

      <div className="col-span-3 flex flex-col justify-center">
        <img
          className="w-full  z-[1] @screen mq1440:max-w-full"
          loading="lazy"
          alt=""
          src="/frame-81.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
