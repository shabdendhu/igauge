import type { NextPage } from "next";
import FrameComponent6 from "./sub-components/frame-component6";
import FrameComponent5 from "./sub-components/frame-component5";
import FrameComponent4 from "./sub-components/frame-component4";
import Badge from "../badge";
import "./index.css";

const RatingSection: NextPage = () => {
  return (
    <div className="mx-[100px] flex my-[66px] self-stretch flex flex-row items-start justify-start  box-border max-w-full text-left text-17xl text-black font-red-hat-text rounded-8xs bg-white shadow-[0px_0px_30px_4px_rgba(0,_0,_0,_0.05)] border-[1px] border-solid border-whitesmoke mq900:mx-5 mq900:mt-[50px] mq900:gap-[55px] mq900:border-none mq900:shadow-none mq900:flex-col lgm:mx-[50px]">
      <div className="pl-[35px] pb-10 col-span-8 flex-1 relative box-border max-w-full mq900:pl-0 mq900:w-full">
        <div className="absolute inset-0 rounded-8xs bg-white shadow-[0px_0px_30px_4px_rgba(0,0,0,0.05)] box-border hidden border border-solid border-whitesmoke"></div>
        <div className="pt-[43px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[31px] max-w-full text-17xl font-libre-baskerville w-full mq900:pt-0">
          <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mq900:px-0">
            <h3 className="m-0 relative font-bold z-[3] text-[20px] mq450:text-3xl mq900:text-10xl mq900:py-10">
              Rating
            </h3>
          </div>
          <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-[#EAEAEA] w-full mq900:hidden" />
        </div>

        <div className="absolute top-28 left-12 right-12 h-px bg-whitesmoke"></div>
        <div className="absolute top-28 left-1/3 mq900:left-[275px] w-px h-72 bg-whitesmoke"></div>
        <div className="absolute top-28 left-2/3 mq900:left-[500px] w-px h-72 bg-whitesmoke"></div>
        {/* <div className="absolute top-[144px] left-[263px] box-border w-px h-[299px] z-[1] border-r-[1px] border-solid border-whitesmoke" /> */}
        {/* <div className="absolute top-[144px] left-[500px] box-border w-px h-[299px] z-[1] border-r-[1px] border-solid border-whitesmoke" /> */}
        <div className="w-full  flex flex-row flex-wrap items-start justify-start gap-4 mq900:gap-8">
          <div className="grid grid-cols-3 gap-x-4 w-full mq900:gap-x-8 gap-y-8 mdm:grid-cols-2 mq900:gap-y-8">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <>
                  <div className={`col-span-1 max-w-full`}>
                    <Badge
                      key={index}
                      rectangle204="/diamond-badge.svg"
                      rectangle205="/diamond-badge-1.svg"
                      diamond="Diamond"
                      teachingLearning="Teaching & Learning"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pr-[35px] top-[0px] h-full col-span-4 bg-papayawhip flex flex-col items-start justify-start pt-[43px] px-0 pb-20 box-border gap-[32px] max-w-full z-[2] text-xl mq900:col-span-12 mq900:w-full mq900:bg-darkslateblue mq900:text-white">
        <img
          className="self-stretch h-[500px] relative max-w-full overflow-hidden shrink-0 hidden"
          alt=""
          src="/rectangle-203.svg"
        />
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[31px] max-w-full text-17xl font-libre-baskerville w-full">
          <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ">
            <h3 className="m-0 relative text-inherit font-bold font-inherit z-[3] mq450:text-3xl mq900:text-10xl">
              KeyPoints
            </h3>
          </div>
          <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-orange-200 w-full mq900:border-lightBlue" />
        </div>
        <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="relative z-[3] mq450:text-base">
              <span>Student/Faculty Ratio :</span>
              <span className="font-medium"> 1:16</span>
            </div>
            <div className="relative z-[3] mq450:text-base">
              <span>{`Scholarships
: `}</span>
              <span className="font-medium">Yes</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center py-0 px-5 box-border">
          <div className="relative z-[3] mq450:text-base">
            <span>Size :</span>
            <span className="font-medium"> Medium</span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[32px] max-w-full">
            <div className="w-64 relative inline-block z-[3] mq450:text-base">
              <span>Total Faculty :</span>
              <span className="font-medium"> 500+</span>
            </div>
            <div className="self-stretch relative z-[3] mq450:text-base">
              <span>International Students :</span>
              <span className="font-medium"> 500+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
