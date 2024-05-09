import { FunctionComponent } from "react";
import Slider from "./Slider";

const Icon: FunctionComponent = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row  max-w-full gap-x-[134px]">
      <div className="  flex flex-row items-start justify-center   box-border ">
        <Slider
          divider="/19-3.svg"
          propPadding="unset"
          propWidth="unset"
          propAlignSelf="stretch"
          propPadding1="0px 17px 0px 0px"
        />
      </div>
      <div className=" relative h-full   min-w-[623px] max-w-full mq900:min-w-full flex justify-center">
        <div className="h-full w-full flex justify-between z-[2] absolute">
          <div className="h-full border-r-[1.56px] border-gray-400/50 " />
          <div className="h-full border-r-[1.56px] border-gray-400/50" />
          <div className="h-full border-r-[1.56px] border-gray-400/50" />
          <div className="h-full border-r-[1.56px] border-gray-400/50" />
          <div className="h-full border-r-[1.56px] border-gray-400/50" />
          <div className="h-full border-r-[1.56px] border-gray-400/50" />
        </div>
        <img
          className="left-[19px] top-0  h-[306px] sm:w-[878px] sm:h-[781px]  object-contain z-[10] relative"
          alt=""
          src="/image-17@2x.png"
        />
      </div>
      {/* <div className="relative h-[982px] flex-1  min-w-[623px] max-w-full mq900:min-w-full">
        <img
          className="left-[19px]  h-[306px] sm:h-[781px] object-contain "
          loading="lazy"
          alt=""
          src="/image-17@2x.png"
        />
        <div className="h-full w-full flex justify-between z-0 absolute">
          <div className="h-full border-r-[0.6px] border-red-500 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
        </div>
      </div> */}
    </div>
  );
};

export default Icon;
