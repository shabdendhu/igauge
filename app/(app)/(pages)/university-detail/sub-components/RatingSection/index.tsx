import type { NextPage } from "next";
import Badge from "../badge";
import "./index.css";

const RatingSection = ({
  university = { keypoints: [], ratings: { "category-ratings": [{}] } },
}: any) => {
  console.log(university);
  const categoryRatings = university?.ratings["category-ratings"] || [];
  return (
    <div className="relative mx-[100px] flex my-[66px] self-stretch flex flex-row items-start justify-start  box-border max-w-full text-left text-17xl text-black font-red-hat-text rounded-8xs bg-white shadow-[0px_0px_30px_4px_rgba(0,_0,_0,_0.05)] border-[1px] border-solid border-whitesmoke mq900:mx-5 mq900:mt-[50px] mq900:gap-[55px] mq900:border-none mq900:shadow-none mq900:flex-col lgm:mx-[50px]   ">
      <div className="w-7/12 pl-[35px] pb-10 col-span-8 relative box-border  mq900:pl-0 mq900:w-full flex flex-col h-full">
        <div className="absolute inset-0 rounded-8xs bg-white shadow-[0px_0px_30px_4px_rgba(0,0,0,0.05)] box-border hidden border border-solid border-whitesmoke"></div>
        <div className="pt-[43px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[31px] max-w-full text-17xl font-libre-baskerville w-full mq900:pt-0">
          <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mq900:px-0">
            <h3 className="m-0 relative font-bold z-[3] text-[20px] mq450:text-3xl mq900:text-10xl mq900:py-10 xl:text-[36px]">
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
        <div className="w-full  flex flex-row flex-wrap items-start justify-start gap-4 mq900:gap-8 flex-1 flex items-center mt-10">
          <div className="grid grid-cols-3 gap-x-4 w-full mq900:gap-x-8 gap-y-10 mdm:grid-cols-2 mq900:gap-y-8">
            {categoryRatings.map((value: any, index: number) => {
              return (
                <>
                  <div className={`col-span-1 max-w-full`}>
                    <Badge
                      value={value}
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

      <div className="md:absolute right-0 pr-[35px] top-[0px] h-full col-span-4 bg-papayawhip flex flex-col items-start justify-start pt-[43px] px-0 pb-20 box-border gap-[52px] max-w-full z-[2] text-xl mq900:col-span-12 mq900:w-full mq900:bg-darkslateblue mq900:text-white sm:aspect-[674/500] w-2/5">
        <img
          className="self-stretch h-[500px] relative max-w-full overflow-hidden shrink-0 hidden"
          alt=""
          src="/rectangle-203.svg"
        />
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[31px] max-w-full text-17xl font-libre-baskerville w-full">
          <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full xl:pl-20">
            <h3 className="m-0 relative text-inherit font-bold font-inherit z-[3] mq450:text-3xl mq900:text-10xl xl:text-[36px]">
              KeyPoints
            </h3>
          </div>
          <div className="self-stretch h-px relative box-border z-[3] border-t-[1px] border-solid border-orange-200 w-full mq900:border-lightBlue" />
        </div>
        {university?.keypoints.map((keyPoint: any, index: number) => (
          <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full  xl:pl-20">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <div className="relative z-[3] mq450:text-base">
                <span>{keyPoint?.keypoint_title?.KeyPoint_title} :</span>
                <span className="font-medium"> {keyPoint?.keypoint_value}</span>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="flex flex-row items-start justify-center py-0 px-5 box-border  xl:pl-20">
          <div className="relative z-[3] mq450:text-base">
            <span>Size :</span>
            <span className="font-medium"> Medium</span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full  xl:pl-20">
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
        </div> */}
      </div>
    </div>
  );
};

export default RatingSection;
