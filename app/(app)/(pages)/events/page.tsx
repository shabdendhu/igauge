import type { NextPage } from "next";
import FrameComponent1 from "./components/frame-component1";
import FrameComponent4 from "./components/frame-component4";
import FeatureSplitter from "./components/feature-splitter";

const EventsV2Approved: NextPage = () => {
  return (
    <div className="">
      <div className="flex w-full h-16 justify-between items-center  bg-orange-100/30  border border-orange-200 px-6 md:px-[150px]">
        <div className="text-4xl font-libre-baskerville font-semibold ">
          Events
        </div>
        <div className="">
          <p className="text-sm">
            Home <span className="text-orange-400"> &gt; </span>
            Events
          </p>
        </div>
      </div>
      {/* <FrameComponent4 /> */}
      <div className=" sm:h-[300px] px-5 sm:px-[150px] relative flex justify-center items-center">
        <div className="h-full w-full flex justify-between z-0 absolute ">
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
          <div className="h-full border-r-[1.6px] border-solid border-graylighter" />
        </div>
        <div className="p-5 sm:px-40 sm:py-8 ">
          <div className="flex flex-row items-center justify-center gap-[5px]">
            <img
              className="w-4 h-4 xs:w-6 xs:h-6 sm:w-16  sm:h-16"
              alt=""
              src="/vector-51.svg"
            />
            <img
              className="w-4 h-4 xs:w-6 xs:h-6 sm:w-16  sm:h-16"
              alt=""
              src="/vector-51.svg"
            />
          </div>
          <p className="text-sm sm:text-4xl font-semibold font-libre-baskerville text-center mt-2">
            “Universities exist to transmit knowledge and understanding of ideas
            and values to students not to provide entertainment for spectators
            or employment for athletes.”
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 px-6 md:px-[150px] gap-4">
        <img
          className="w-full h-[300px] sm:w-auto sm:h-[400px] object-fit"
          loading="lazy"
          alt=""
          src="/rectangle-224@2x.png"
        />
        <img
          className="w-full h-[300px] sm:w-full sm:h-[400px] object-fit"
          loading="lazy"
          alt=""
          src="/rectangle-225@2x.png"
        />
        <img
          className="w-full h-[300px] sm:w-auto sm:h-[400px] object-fit"
          loading="lazy"
          alt=""
          src="/rectangle-226@2x.png"
        />
      </div>
      <div className="px-6 md:px-[150px]">
        <div className=" flex flex-row items-start justify-center  px-6 md:px-[150px]  text-black font-libre-baskerville my-8">
          <div className="w-[860px] flex flex-col items-center justify-center gap-[34px] max-w-full ">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1 className="text-4xl md:text-[41px] font-bold ">
                What to Expect
              </h1>
            </div>
            <p className="text-sm font-normal font-red-hat-text text-darkslategray text-center ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam omnis iste
              natus error sit voluptatemsit voluptatem accusantium doloremque
              laudantium, totam rem aperiam omnis iste natus error sit
              voluptatem
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 justify-around ">
          <div className=" flex justify-between pr-8 border-b border-orange-200 sm:border-none">
            <FeatureSplitter />
            <div className="h-full hidden sm:block">
              <div className=" xs:w-full h-full flex items-center">
                <span className="border-l border-orange-200/50  h-[60%]"></span>
              </div>
            </div>
          </div>
          <div className=" flex justify-between pr-8 border-b border-orange-200 sm:border-none">
            <FeatureSplitter />
            <div className="h-full hidden sm:block">
              <div className=" xs:w-full h-full flex items-center">
                <span className="border-l border-orange-200/50  h-[60%]"></span>
              </div>
            </div>
          </div>
          <div className=" flex justify-between pr-8 border-b border-orange-200 sm:border-none">
            <FeatureSplitter />
            <div className="h-full hidden sm:block">
              <div className=" xs:w-full h-full flex items-center">
                <span className="border-l border-orange-200/50  h-[60%]"></span>
              </div>
            </div>
          </div>
          <div className=" flex justify-between pr-8 border-b border-orange-200 sm:border-none">
            <FeatureSplitter />
          </div>
        </div>
      </div>

      <div className=" flex flex-row items-start justify-center  px-6  text-black font-libre-baskerville my-8">
        <div className="w-[860px] flex flex-col items-center justify-center gap-[34px] max-w-full ">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="text-4xl md:text-[41px] font-bold ">
              Upcoming Events
            </h1>
          </div>
          <p className="text-sm font-normal font-red-hat-text text-darkslategray text-center ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam omnis iste natus error sit
            voluptatem, totam rem aperiam accusantium doloremque laudantium,
            totam rem aperiam
          </p>
        </div>
      </div>
      <div className=" px-6 md:px-[150px] flex flex-col gap-y-8">
        {/* Buttons */}
        <div className="flex gap-8 justify-center xs:justify-start">
          <div className=" text-base bg-orange-200 p-2 font-red-hat-display text-black text-left ">
            <button className="cursor-pointer h-3">Upcoming Events</button>
          </div>
          <div className=" text-base  p-2 font-red-hat-display text-black text-left ">
            <button className="cursor-pointer h-3">Past Events</button>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="   flex flex-col  h-full border border-red-500 min-h-[500px] min-w-[500px]">
              <div className="h-3/5 relative">
                <img
                  className="h-[394px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-277@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-12 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1 justify-center items-center">
                    <img
                      className="w-[16px] h-[15px]  overflow-hidden shrink-0  "
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-[20px]">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1 justify-center items-center">
                    <img
                      className="w-[16px] h-[15px]  overflow-hidden shrink-0  "
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-[20px]">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 justify-center items-center ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0  "
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0  "
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-[20px]">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-[32px] font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p className="text-[24px]">Delhi, India</p>
                  </div>
                  <p className="text-[24px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-[50px] w-[170px] ">
                  <button className="bg-orange-200 h-full w-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative  bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>

            {/* --------------------------- */}
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-161-1@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-277@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-160@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-161-1@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-277@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-160@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-277@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-277@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-160@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            <div className=" border  flex flex-col h-fit">
              <div className="h-3/5 relative">
                <img
                  className="h-[200px]  w-full relative object-cover aspect-square  "
                  alt=""
                  src="/rectangle-161-1@2x.png"
                />
                <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                  Category
                </button>
              </div>
              <div className="m-3 h-full flex flex-col gap-y-3 ">
                <div className=" flex gap-x-3">
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7_copy.svg"
                    />
                    <p className="text-xs">9:30 AM to 11:00 AM</p>
                  </div>
                  <div className="flex gap-x-1">
                    <img
                      className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/calendar-1.svg"
                    />
                    <p className="text-xs">30/11/2024</p>
                  </div>
                  <div className="flex gap-x-1 ">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        className="w-[5px] h-[5px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_head.svg"
                      />
                      <img
                        className="w-[7px] h-[7px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/person_body.svg"
                      />
                    </div>
                    <p className="text-xs">In Person</p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-lg font-libre-baskerville font-semibold">
                    Event Name
                  </p>
                  <div className="flex gap-x-2">
                    <img
                      className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector-7.svg"
                    />
                    <p>Delhi, India</p>
                  </div>
                  <p className="text-[11px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis est odit repellendus minima voluptas sit adipisci quasi
                    eveniet id suscipit, eum, voluptate eligendi illo
                    voluptates!
                  </p>
                </div>
                <div className="h-10 ">
                  <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
                    <div className="h-full bg-orange-200 flex items-center">
                      <img
                        className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                        alt=""
                        src="/mediator-pattern.svg"
                      />
                    </div>
                    <p className="text-xs font-semibold">Apply Now</p>
                  </button>
                </div>
              </div>
            </div>
            {/* --------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsV2Approved;

{
  /* <FrameComponent /> */
}

{
  /* <FrameComponent1
              functionDefinition="/vector-9.svg"
              vector="/vector-11.svg"
            /> */
}
