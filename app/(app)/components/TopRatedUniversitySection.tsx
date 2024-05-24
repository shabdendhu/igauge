import { FunctionComponent } from "react";
import InstitutionSelection from "./v1/Home/InstitutionSelection";

const TopRatedUniversitySection: FunctionComponent = () => {
  return (
    <div className=" w-full flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-36xl text-black font-libre-baskerville mq1600:flex-wrap mt-[150px] mq900:mt-[20px]">
      <div className="w-full flex flex-col items-start justify-end pt-0 px-0 pb-[37px] box-border max-w-full mq900:pb-[0px] z-[5]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-full flex flex-row flex-wrap items-start justify-start pt-7 px-0 pb-0 box-border max-w-full">
            {/* <h1 className="m-0 self-stretch flex items-center justify-start h-[76px] relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block shrink-0 z-[2] mq450:text-14xl mq900:text-25xl mq1440:text-[45px]">
              <span className="mr-5">
                Top Rated{" "}
                <span className="relative">
                  <span className="relative z-[1]">Universities</span>
                  <img
                    className="h-[121px] w-[519px] absolute object-cover right-[-6px] top-[-24px] mq1440:top-[-24px] max-w-full mq1440:w-[320px] mq1440:h-[97px] mq1440:top-[1px]  mq1440:w-[600px]"
                    alt=""
                    src="/rectangle-191@2x.png"
                  />
                </span>
              </span>
              <img
                className="mx-2 h-[23px] w-[25px] object-contain z-[1]"
                alt=""
                src="/polygon-9.svg"
              />
              <span className="ml-4">by city</span>
            </h1> */}
            <h1 className=" w-full flex flex-wrap gap-[10px]  mq900:text-[26px] font-bold">
              Top Rated
              <InstitutionSelection bgImage={"/rectangle-191@2x.png"} />
              by city
            </h1>
          </div>
          <div className="w-[519px] relative flex flex-row items-start justify-end pt-[54px] px-[66px] pb-11 box-border bg-cover bg-no-repeat bg-[top] max-w-full ml-[-848px]"></div>
        </div>
      </div>
      <img
        className="w-[300px] absolute right-[200px] mt-[100px] z-[1] max-h-full object-cover max-w-full mq900:hidden"
        loading="lazy"
        alt=""
        src="/image-6@2x.png"
      />
    </div>
  );
};

export default TopRatedUniversitySection;
