import { FunctionComponent } from "react";

const TopRatedUniversitySection: FunctionComponent = () => {
  return (
    <div className="self-stretch  flex flex-row items-end mb-[30px] justify-start relative [row-gap:20px] max-w-full text-left text-36xl text-black font-libre-baskerville mq1600:flex-wrap">
      <div className="w-[800px] flex flex-col items-start justify-start gap-[79px] min-w-[1036px] max-w-full mq900:gap-[20px_79px] mq1275:gap-[39px_79px] mq1275:min-w-full mq1600:flex-1">
        <h1 className="m-0 w-full flex   justify-start sm:items-center relative text-inherit font-bold mb-8 max-w-full z-[2]  mq450:text-[23px] mq900:text-[30px] mq1440:text-[55px] flex-wrap gap-4">
          <p className="text-nowrap">Top Rated</p>
          <div className="relative flex items-center  justify-start px-0 sm:px-7     ">
            <div className="">Universities</div>
            <img
              className="ml-2 h-[20px]  w-[20px] object-contain"
              alt=""
              src="/polygon-9.svg"
            />
            <img
              className="w-full  absolute z-[-1] object-cover max-w-full mq450:h-[100%] mq900:h-[60px]"
              alt=""
              src="/rectangle-191@2x.png"
            />
            {/*bg-[url('/rectangle-191@2x.png')]  */}
          </div>
          <p className="text-nowrap"> by cities</p>
        </h1>
      </div>
      <div className="w-[516px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border min-w-[516px] max-w-full ml-[-24px] mq900:min-w-full mq1600:flex-1 mq1600:ml-0 smm:hidden">
        <div className="self-stretch flex flex-row items-end justify-start gap-[35px] max-w-full mq900:flex-wrap mq900:gap-[35px_17px]">
          <img
            className="h-[325px]  flex-1 absolute bottom-0 right-[15px] max-w-full overflow-hidden object-cover min-w-[274px] mq1275:hidden"
            loading="lazy"
            alt=""
            src="/image-6@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TopRatedUniversitySection;

{
  /* <div className="overflow-hidden w-full flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-36xl text-black font-libre-baskerville mq1600:flex-wrap mt-[150px] mq900:mt-[20px]">
<div className="w-full flex flex-col items-start justify-end pt-0 px-0 pb-[37px] box-border max-w-full mq900:pb-[0px]">
  <div className="self-stretch flex flex-row items-start justify-start max-w-full">
    <div className="w-full flex flex-row flex-wrap items-start justify-start pt-7 px-0 pb-0 box-border max-w-full">
      
      <h1 className=" w-full flex flex-wrap gap-[10px]  mq900:text-[26px] font-bold">
        Top Rated
        <div className="flex flex-row items-center relative">
          {" "}
          <div className="z-[5] flex flex-row items-center ">
            Universities{" "}
            <img
              className="mx-2 h-[23px] w-[25px] object-contain z-[1]"
              alt=""
              src="/polygon-9.svg"
            />
          </div>
          <img
            // className="h-[121px] w-[519px] absolute object-cover right-[-6px] top-[-24px] mq1440:top-[-24px] max-w-full mq1440:w-[320px] mq1440:h-[97px] mq1440:top-[1px]  mq1440:w-[600px]"
            className="absolute z-[1]"
            alt=""
            src="/rectangle-191@2x.png"
          />
        </div>
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
</div> */
}

{
  /* <h1 className="m-0 self-stretch flex items-center justify-start h-[76px] relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block shrink-0 z-[2] mq450:text-14xl mq900:text-25xl mq1440:text-[45px]">
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
      </h1> */
}
