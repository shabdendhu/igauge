//@ts-nocheck
"use client";
import type { NextPage } from "next";
import FrameComponent1 from "./components/frame-component1";
import FrameComponent4 from "./components/frame-component4";
import FeatureSplitter from "./components/feature-splitter";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
import { Button } from "@mui/material";
import dummyData from "@/datatypes/events.json";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/institution";
import PageHeader from "@/app/(app)/components/v1/PageHeader";
const EventsV2Approved: NextPage = () => {
  const fontSize = useCalculateFontSize();
  const [page, setPage] = useState<any>(dummyData);
  const [eventType, setEventTypes] = useState("upcoming");
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchData("pages/2", { depth: 1 }).then((e) => setPage(e));
  }, []);
  useEffect(() => {
    fetchEvents(eventType);
  }, [eventType]);
  const fetchEvents = async (type: string) => {
    const today = new Date().toISOString(); // Gets today's date in YYYY-MM-DD format
    let filter = {};

    if (type === "upcoming") {
      filter = {
        "event_details.date": { greater_than: today },
      };
    } else if (type === "past") {
      filter = {
        "event_details.date": { less_than: today },
      };
    }
    fetchData("events", { filter, depth: 3 }).then((e) => setEvents(e.docs));
  };

  const handleChangeEventType = (type) => {
    setEventTypes(type);
  };
  return (
    <div className="">
      <PageHeader
        header={"Events"}
        path={
          <>
            Home <span className="text-orange-400"> &gt; </span>
            Events
          </>
        }
      />
      {/* <FrameComponent4 /> */}
      <div className="px-5 sm:px-[150px] relative flex justify-center items-center">
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
        <div className="sm:px-40 pb-[70px] pt-[140px] mq900:pt-[50px]">
          <div className="flex flex-row items-center justify-center gap-[5px]">
            <img
              style={{
                height: fontSize(70, 38, 1920, 400),
              }}
              className="w-4 h-4 xs:w-6 xs:h-6 sm:w-16  sm:h-16"
              alt=""
              src="/vector-51.svg"
            />
            <img
              style={{
                height: fontSize(70, 38, 1920, 400),
              }}
              className="w-4 h-4 xs:w-6 xs:h-6 sm:w-16  sm:h-16"
              alt=""
              src="/vector-51.svg"
            />
          </div>
          <p
            style={{
              fontSize: fontSize(48, 20, 1920, 400),
            }}
            className="text-sm sm:text-4xl font-semibold font-libre-baskerville text-center mt-2"
          >
            {page.content[0].text}
          </p>
        </div>
      </div>

      <div className=" px-6 md:px-[150px] gap-4 flex w-full justify-around mq900:flex-col">
        <img
          className="w-[30%]  aspect-[1] mq900:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-224@2x.png"
        />
        <img
          className="w-[30%]  aspect-[1] mq900:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-225@2x.png"
        />
        <img
          className="w-[30%]  aspect-[1] mq900:w-full"
          loading="lazy"
          alt=""
          src="/rectangle-226@2x.png"
        />
      </div>
      <div className="px-6 md:px-[150px] md:mb-[200px]">
        <div className=" flex flex-row items-start justify-center  px-6 md:px-[150px] md:pt-[150px] md:pb-[80px] text-black font-libre-baskerville my-8">
          <div className="w-[860px] flex flex-col items-center justify-center gap-[34px] max-w-full ">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <h1
                style={{
                  fontSize: fontSize(58, 26, 1920, 400),
                }}
                className="text-4xl md:text-[41px] font-bold "
              >
                {page.content[1].title}
              </h1>
            </div>
            <p
              style={{
                fontSize: fontSize(24, 15, 1920, 400),
              }}
              className="text-sm font-normal font-red-hat-text text-darkslategray text-center "
            >
              {page.content[1].description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 justify-around ">
          {page.content[1].icon_boxes?.map((e: any, i: number) => (
            <div
              key={i}
              className=" flex justify-between pr-8 border-b border-orange-200 sm:border-none"
            >
              <FeatureSplitter data={e} />
              {/* {i == dummyData?.content[1]?.icon_boxes?.length - 1 ? (
                <></>
              ) : ( */}
              <div className="h-full hidden sm:block">
                <div className=" xs:w-full h-full flex items-center">
                  <span className="border-l border-orange-200/50  h-[60%]"></span>
                </div>
              </div>
              {/* )} */}
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-row items-start justify-center  px-6  text-black font-libre-baskerville my-8 md:mt-[]">
        <div className="w-[860px] flex flex-col items-center justify-center gap-[34px] max-w-full ">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1
              style={{
                fontSize: fontSize(58, 26, 1920, 400),
              }}
              className="text-4xl md:text-[41px] font-bold "
            >
              Upcoming Events
            </h1>
          </div>
          <p
            style={{
              fontSize: fontSize(24, 15, 1920, 400),
            }}
            className="text-sm font-normal font-red-hat-text text-darkslategray text-center "
          >
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
        <div className="flex gap-8 justify-center xs:justify-start md:py-10">
          <div
            className={` text-base bg-orange-100 p-2 font-red-hat-display text-black text-left  ${
              eventType == "upcoming" ? "bg-orange-500" : ""
            }`}
          >
            <Button
              onClick={() => handleChangeEventType("upcoming")}
              style={{
                fontSize: fontSize(25, 12, 1920, 400),
                height: fontSize(88, 33, 1920, 400),
              }}
              className={`cursor-pointer h-3 rounded-[0] text-white md:aspect-[300/88] ${
                eventType == "upcoming" ? "bg-orange-500" : ""
              }`}
            >
              Upcoming Events
            </Button>
          </div>
          <div
            className={` text-base bg-orange-100 p-2 font-red-hat-display text-black text-left ${
              eventType == "past" ? "bg-orange-500" : ""
            }`}
          >
            <Button
              onClick={() => handleChangeEventType("past")}
              style={{
                fontSize: fontSize(25, 12, 1920, 400),
                height: fontSize(88, 33, 1920, 400),
              }}
              className="cursor-pointer h-3 rounded-[0] text-white md:aspect-[300/88] "
            >
              Past Events
            </Button>
          </div>
        </div>

        <div className="">
          <div className="flex flex-wrap justify-between  gap-10">
            {/* --------------------------- */}
            {events.map((e, i) => (
              <div
                key={i}
                className=" border  flex flex-col   w-[45%] mq900:w-full"
              >
                <div className="relative">
                  <img
                    className="w-full relative object-cover aspect-[790/390] overflow-hidden "
                    alt=""
                    src={e?.featured_image?.url}
                  />
                  {/* <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
                      Category
                    </button> */}
                </div>
                <div className="m-5 h-full flex flex-col gap-y-5 mq900:gap-y-3">
                  <div
                    style={{
                      fontSize: fontSize(15, 7, 1920, 400),
                    }}
                    className=" flex gap-x-3"
                  >
                    <div className="flex gap-x-1">
                      <img
                        className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/vector-7_copy.svg"
                      />
                      <p className="">{e?.event_details?.time}</p>
                    </div>
                    <div className="flex gap-x-1">
                      <img
                        className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/calendar-1.svg"
                      />
                      <p className="">
                        {new Date(e?.event_details?.date)
                          .toLocaleDateString("en-GB")
                          .replace(/\//g, "/")
                          .split("/")
                          .reverse()
                          .join("/")}
                      </p>
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
                      <p className="">{e?.event_details?.mode}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4 mq900:gap-y-2">
                    <p
                      style={{
                        fontSize: fontSize(32, 13, 1920, 400),
                      }}
                      className="text-lg font-libre-baskerville font-semibold"
                    >
                      Event Name
                    </p>
                    <div className="flex gap-x-2">
                      <img
                        className="w-[16px] h-[16px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/vector-7.svg"
                      />
                      <p
                        style={{
                          fontSize: fontSize(24, 10, 1920, 400),
                        }}
                      >
                        {e?.event_details?.location}
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: fontSize(24, 10, 1920, 400),
                      }}
                      className="text-[11px]"
                    >
                      <div
                        className="line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: e?.blog_content_html,
                        }}
                      />
                    </p>
                  </div>
                  <div className="">
                    <button
                      style={{
                        width: fontSize(177, 76, 1920, 400),
                      }}
                      className="bg-orange-200 h-full  flex justify-center items-center gap-x-1  aspect-[177/50]"
                    >
                      <div className="h-full bg-orange-200 flex items-center">
                        <img
                          className="w-[10px] h-[10px] relative z-[3] bg-orange-200"
                          alt=""
                          src="/mediator-pattern.svg"
                        />
                      </div>
                      <p
                        className=""
                        style={{
                          fontSize: fontSize(17, 7, 1920, 400),
                        }}
                      >
                        Apply Now
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            ))}

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
