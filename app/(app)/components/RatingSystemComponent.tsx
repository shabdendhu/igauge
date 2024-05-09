import { FunctionComponent } from "react";
import Slider from "./Slider";
import classNames from "classnames";
const Figure = ({ className }: any) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-start justify-center gap-[5px] py-5 mq450:gap-[1px] ">
        <b className="relative z-[1] text-40xl mq450:text-4xl mq900:text-40xl mq450:self-center">
          5k+
        </b>
        <div className="relative text-5xl font-medium inline-block min-w-[114px] z-[1] mq450:text-base mq450:text-center">
          University
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 mq900:pr-0">
        <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-whitesmoke-100" />
      </div>
      <div className="flex flex-col items-start justify-center gap-[5px] py-5">
        <b className="relative z-[1] text-40xl mq450:text-4xl mq900:text-40xl mq450:self-center">
          10k+
        </b>
        <div className="relative text-5xl font-medium inline-block min-w-[114px] z-[1] mq450:text-base mq450:text-center">
          Students
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-center py-0 pr-5 pl-0 mq900:pr-0">
        <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-whitesmoke-100" />
      </div>
      <div className="flex flex-col items-start justify-center gap-[5px] py-5">
        <b className="relative z-[1] text-40xl mq450:text-4xl mq900:text-40xl mq450:self-center">
          9+
        </b>
        <div className="relative text-5xl font-medium inline-block min-w-[114px] z-[1] mq450:text-base mq450:text-center">
          Years <br />
          Experience
        </div>
      </div>
    </div>
  );
};
const RatingSystemComponent: FunctionComponent = () => {
  return (
    <>
      {/* <section className="grid grid-cols-12 justify-center pt-0 pb-[351px] pr-5 pl-0 box-border gap-[131px] max-w-full text-left text-55xl text-black font-red-hat-text lgm:grid-cols-6 lgm:px-0 mq450:gap-[131px_16px] mq900:gap-[131px_33px] mq900:pb-[148px] mq900:box-border mq1275:gap-[131px_65px] mq1920:pb-[228px] mq1275:box-border mq1600:flex-wrap mq1440:pb-[114px]">
        <div className="flex-1 col-span-6 flex flex-row items-start justify-start relative min-w-[625px] max-w-full mq900:min-w-full">
          <img
            className="h-[1074px] flex-1 relative max-w-full overflow-hidden object-cover"
            alt=""
            src="/rectangle-161-2@2x.png"
          />
          <div className="h-[263px] w-[826px] !m-[0] absolute right-[-407px] bottom-[173px] bg-orange-200 overflow-x-auto shrink-0 flex flex-row items-start justify-between pt-[13px] pb-[19.90000000000001px] pr-[41px] pl-[62px] box-border gap-[20px] max-w-full z-[1] lgm:">
            <div className="h-[263px] w-[826px] relative bg-orange-200 shrink-0 hidden" />
            <div className="flex flex-col items-start justify-start pt-11 pb-0 pr-[17px] pl-0">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <b className="relative z-[1] mq450:text-25xl mq900:text-40xl ">
                  5k+
                </b>
                <div className="relative text-5xl font-medium inline-block min-w-[114px] z-[1] mq450:text-lgi">
                  University
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
              <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-whitesmoke-100" />
            </div>
            <div className="flex flex-col items-start justify-start pt-11 px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <b className="relative z-[1] mq450:text-25xl mq900:text-40xl">
                  10k+
                </b>
                <div className="relative text-5xl font-medium inline-block min-w-[103px] z-[1] mq450:text-lgi">
                  Students
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
              <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-whitesmoke-100" />
            </div>
            <div className="flex flex-col items-start justify-start pt-11 px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <b className="relative inline-block min-w-[93px] z-[1] mq450:text-25xl mq900:text-40xl">
                  9+
                </b>
                <div className="relative text-5xl font-medium z-[1] mq450:text-lgi">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 mr-[118px]">
          <Slider divider="/19-2.svg" />
        </div>
      </section> */}
      <section className="  w-full relative pb-[100px]">
        <div className="flex mdm:flex-col">
          <div className="h-[440px] w-1/2 md:h-[1074px] mdm:w-full relative">
            <img
              className="h-full w-full flex-1 max-w-full overflow-hidden object-cover "
              src="/rectangle-161-2@2x.png"
            />

            {/* <Figure className="flex justify-center bg-orange-200 w-[95%] m-auto z-[5] relative bottom-[30px] self-center justify-around  px-2 md:px-5 md:py-5 md:w-1/3 md:min-w-[650px] md:hidden" /> */}
          </div>
          <div className="w-1/2 px-20 mdm:pt-[150px] mdm:px-5 mdm:w-full flex justify-center">
            <Slider divider="/19-2.svg" />
          </div>
        </div>

        <Figure className="flex justify-center bg-orange-200 w-[95%] m-auto z-[5] relative bottom-[30px] self-center justify-around  px-2 md:px-5 md:py-5 md:w-1/3 md:min-w-[650px] mdm:hidden" />
      </section>
    </>
  );
};

export default RatingSystemComponent;
