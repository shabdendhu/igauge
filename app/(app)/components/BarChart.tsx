import { FunctionComponent } from "react";

const BarChart: FunctionComponent = () => {
  return (
    <>
      {/* <div className="mt-[-678px] self-stretch flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] text-left text-36xl text-black font-libre-baskerville mq1600:flex-wrap">
        <div className="w-[974px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border min-w-[974px] max-w-full mq1275:min-w-full mq1600:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1] mq450:text-14xl mq900:text-25xl mq1440:text-[45px]">
              Testimonials
            </h1>
            <div className="w-[667px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-xl text-darkslategray-200 font-red-hat-text">
              <div className="flex-1 relative leading-[29px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[23px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </div>
            </div>
          </div>
        </div>
        <div className="h-[604px] w-[343px] relative mq900:min-w-full mq1600:flex-1">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[75px] max-h-full w-[618px] z-[1]"
            loading="lazy"
            alt=""
            src="/frame-56.svg"
          />
          <img
            className="absolute top-[490px] left-[0px] w-[182px] h-[14.7px] z-[2]"
            alt=""
            src="/frame-29.svg"
          />
        </div>
      </div> */}
      <div>
        <h1 className="text-inherit font-bold font-inherit z-[1]  mq450:text-14xl mq900:text-25xl mq1440:text-25xl md:text-[40px]">
          Testimonials
        </h1>
        <p className="flex-1 relative leading-[29px] inline-block max-w-full z-[1] mq450:text-base mq450:leading-[23px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium
        </p>
      </div>
    </>
  );
};

export default BarChart;
