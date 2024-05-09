"use client";
import type { NextPage } from "next";
import FrameComponent2 from "./frame-component2";
import FrameComponent1 from "./frame-component1";
import EventCardComponent from "./EventCard";

const FrameComponent: NextPage = () => {
  const eventsData = [
    {
      id: 1,
      imageSrc: "/images/event-1.jpg",
      title: "Event 1",
      description: "Description of Event 1",
      date: "02/04/2024",
      time: "9:30 AM to 11:00 AM",
      location: "Delhi, India",
      buttonLabel: "Apply Now",
      onButtonClick: () => {
        // Your event apply logic for Event 1
      },
    },
    {
      id: 2,
      imageSrc: "/images/event-2.jpg",
      title: "Event 2",
      description: "Description of Event 2",
      date: "03/04/2024",
      time: "10:00 AM to 12:00 PM",
      location: "Mumbai, India",
      buttonLabel: "Apply Now",
      onButtonClick: () => {
        // Your event apply logic for Event 2
      },
    },
    // Add more events as needed
  ];

  return (
    <div className="w-full  mx-[100px] flex flex-col items-start justify-start pt-0 px-0 pb-[1.7053025658242404e-13px] box-border gap-[80px] max-w-full text-left text-mini text-black font-red-hat-text mq900:gap-[40px_80px] mq450:gap-[20px_80px]">
      <div className="w-[612px] flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full [row-gap:20px]">
        <button className="cursor-pointer [border:none] pt-[26px] px-[39px] pb-6 bg-orange-200 flex flex-row items-start justify-start whitespace-nowrap hover:bg-chocolate-200">
          <div className="relative text-[20px] font-red-hat-text text-black text-left">
            Upcoming Events
          </div>
        </button>
        <button className="cursor-pointer [border:none] pt-[26px] pb-6 pr-[71px] pl-[72px] bg-white flex-1 flex flex-row items-start justify-start box-border min-w-[199px] whitespace-nowrap z-[1] hover:bg-gainsboro mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[88px] w-[306px] relative bg-white hidden" />
          <div className="flex-1 relative text-[20px] font-red-hat-text text-black text-left z-[2]">
            Past Events
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[80px] max-w-full mq900:gap-[40px_80px] mq450:gap-[20px_80px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[53px] max-w-full mq900:gap-[26px]">
          <div className="flex-1 bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[31px] gap-[23px] min-w-[514px] max-w-full border-[1px] border-solid border-whitesmoke mq900:min-w-full">
            <div className="self-stretch h-[764px] relative bg-white box-border hidden border-[1px] border-solid border-whitesmoke" />
            <img
              className="self-stretch h-[394px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-275@2x.png"
            />
            <div className="w-[777px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full mq900:gap-[17px_35px]">
                <FrameComponent2
                  vector2="/vector-9.svg"
                  vector4="/vector-11.svg"
                />
                <button className="cursor-pointer [border:none] pt-[15px] pb-[18.40000000000009px] pr-[33.09999999999991px] pl-[33px] bg-orange-200 w-[177px] flex flex-row items-start justify-end box-border whitespace-nowrap z-[1] hover:bg-chocolate-200">
                  <div className="h-[50.4px] w-[177px] relative bg-orange-200 hidden" />
                  <div className="relative text-mid-8 leading-[17px] font-red-hat-display text-black text-left inline-block min-w-[86.1px] z-[1]">
                    Apply Now
                  </div>
                </button>
              </div>
            </div>
          </div>
          <FrameComponent1
            functionDefinition="/vector-9.svg"
            vector="/vector-11.svg"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[53px] max-w-full mq900:gap-[26px]">
          <div className="flex-1 bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[31px] gap-[23px] min-w-[514px] max-w-full border-[1px] border-solid border-whitesmoke mq900:min-w-full">
            <div className="self-stretch h-[764px] relative bg-white box-border hidden border-[1px] border-solid border-whitesmoke" />
            <img
              className="self-stretch h-[394px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              alt=""
              src="/rectangle-275@2x.png"
            />
            <div className="w-[777px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[35px] max-w-full mq900:gap-[17px_35px]">
                <FrameComponent2
                  vector2="/vector-9.svg"
                  vector4="/vector-11.svg"
                  propWidth="19.200000000000045px"
                  propHeight="19.200000000000045px"
                />
                <button className="cursor-pointer [border:none] pt-[15px] pb-[17.399999999999977px] pr-[33px] pl-[34px] bg-orange-200 flex flex-row items-start justify-start gap-[7.800000000000182px] z-[1]">
                  <div className="h-[50.4px] w-[177px] relative bg-orange-200 hidden" />
                  <div className="h-[18px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-4 h-4 relative z-[1]"
                      alt=""
                      src="/frame-385-1.svg"
                    />
                  </div>
                  <div className="relative text-mid-8 leading-[17px] font-red-hat-display text-black text-left inline-block min-w-[86.1px] z-[1]">
                    Apply Now
                  </div>
                </button>
              </div>
            </div>
          </div>
          <FrameComponent1
            functionDefinition="/vector-9.svg"
            vector="/vector-11.svg"
            propHeight="unset"
            propPadding="unset"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[53px] max-w-full mq900:gap-[26px]">
          <div className="flex-1 bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[31px] gap-[23px] min-w-[514px] max-w-full border-[1px] border-solid border-whitesmoke mq900:min-w-full">
            <div className="self-stretch h-[764px] relative bg-white box-border hidden border-[1px] border-solid border-whitesmoke" />
            <img
              className="self-stretch h-[394px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              alt=""
              src="/rectangle-275@2x.png"
            />
            <div className="w-[777px] flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full">
              <div className="h-[314.4px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[85.39999999999998px] box-border gap-[35px] max-w-full mq900:gap-[17px_35px] mq450:h-auto mq450:pb-14 mq450:box-border">
                <FrameComponent2
                  vector2="/vector-37.svg"
                  vector4="/vector-39.svg"
                  propWidth="unset"
                  propHeight="unset"
                />
                <button className="cursor-pointer [border:none] pt-[15px] px-[33px] pb-[17.4px] bg-orange-200 flex flex-row items-start justify-start gap-[7.800000000000182px] z-[1]">
                  <div className="h-[50.4px] w-[177px] relative bg-orange-200 hidden" />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative z-[1]"
                      alt=""
                      src="/mediator-pattern.svg"
                    />
                  </div>
                  <div className="relative text-mid-8 leading-[17px] font-red-hat-display text-black text-left inline-block min-w-[86.1px] z-[1]">
                    Apply Now
                  </div>
                </button>
              </div>
            </div>
          </div>
          <FrameComponent1
            functionDefinition="/vector-37.svg"
            vector="/vector-39.svg"
            propHeight="317.4px"
            propPadding="0px 0px 85.39999999999998px"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-[22.30000000000001px] px-[54.30000000000018px] pb-[18px] bg-orange-200 w-[271.3px] flex flex-row items-start justify-start box-border gap-[7.699999999999818px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[77.3px] w-[271.3px] relative bg-orange-200 hidden" />
        <div className="relative text-8xl-3 font-red-hat-display text-black text-left z-[1] mq450:text-3xl">
          View More
        </div>
        <div className="flex flex-col items-start justify-start pt-[12.699999999999989px] px-0 pb-0">
          <img
            className="w-3.5 h-3.5 relative z-[1]"
            alt=""
            src="/builder-pattern.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default FrameComponent;
