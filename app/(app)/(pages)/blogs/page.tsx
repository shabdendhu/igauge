"use client";
import type { NextPage } from "next";
import ConditionBranch from "./components/condition-branch";
import FrameComponent1 from "./components/frame-component12";
import FrameComponent from "./components/frame-component9";
import ShapeSplitter from "./components/shape-splitter";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FrameComponent11 from "../../components/FrameComponent1";

import BlogCardSmall from "@/app/(app)/components/v1/BlogCardSmall";
import Link from "next/link";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
const BlogsV2Approved: NextPage = () => {
  const fontSize = useCalculateFontSize();

  return (
    <div>
      <div className="flex w-full h-16 justify-between items-center mb-10 bg-orange-100/30  border border-orange-200 px-6 md:px-[150px]">
        <div className="text-4xl font-libre-baskerville font-semibold ">
          Blogs
        </div>
        <div className="">
          <p className="text-sm">
            Home <span className="text-orange-400"> &gt; </span> Top Rated
            School
          </p>
        </div>
      </div>
      <div className="max-w-[1920px] m-auto px-6 md:px-[150px]">
        <div className="w-full block md:hidden ">
          <div className="flex justify-center items-center px-5  w-full    h-10  ">
            <div className="flex w-full h-full justify-start items-center  rounded-sm ">
              <div className="flex justify-start items-center border rounded-md  h-full w-full px-3 mr-5 ">
                <div className="min-w-5">
                  <img
                    className="w-5 h-5 relative z-[2]"
                    alt=""
                    src="/search.svg"
                  />
                </div>

                <input
                  className="ml-3 h-full   text-sm    "
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
            <div className="flex items-center gap-x-1 mx-1">
              <img
                className="w-4 h-4 relative z-[2]"
                alt=""
                src="/search.svg"
              />
              <p className="text-xs font-red-hat-text">Filter</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-white  hidden md:block">
          <h1 className="font-libre-baskerville text-lg md:text-4xl font-semibold">
            Latest Blog Posts
          </h1>
          <div className="  mt-6">
            <div className="flex w-full  ">
              <div
                className=" w-1/2 flex flex-col mr-5 border overflow-hidden md:mr-[30px]"
                style={{ aspectRatio: 1 }}
              >
                <div className="h-3/5 relative">
                  <img
                    className="h-full w-full w-full relative object-cover aspect-square  max-w-full"
                    alt=""
                    src="/rectangle-245@2x.png"
                  />
                  <button className="bg-darkslateblue absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2">
                    Category
                  </button>
                </div>
                <div className="m-3 h-full flex flex-col gap-y-3 md:m-[30px]">
                  <div className="flex-1 flex flex-col gap-[20px]">
                    <div className=" flex gap-x-1">
                      <img
                        className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
                        alt=""
                        src="/calendar-1.svg"
                      />
                      <p className="text-xs"> 12 March, 2024</p>
                    </div>
                    <div className="flex flex-col gap-y-2 md:gap-[15px]">
                      <p
                        style={{
                          fontSize: fontSize(30, 14, 1920, 400),
                        }}
                        className="text-lg font-libre-baskerville font-semibold md:text-11xl"
                      >
                        Lorem ipsum dolor sit amet
                      </p>
                      <p
                        style={{
                          fontSize: fontSize(17, 8, 1920, 400),
                        }}
                        className="text-[11px] md:text-mid"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </p>
                    </div>
                  </div>
                  <div className="min-h-[50px]">
                    <button className="bg-orange-200 h-full flex justify-center items-center gap-x-1 px-7">
                      <div> Read More</div>
                      <div className="h-full bg-orange-200 flex items-center">
                        <img
                          className=" h-[6px] w-[6px] relative "
                          alt=""
                          src="/double_arrow.svg"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-full w-1/2   gap-y-4  ">
                {Array(2)
                  .fill("")
                  .map((e, i) => (
                    <div key={i} className="h-1/2 flex gap-x-3 border">
                      <div className="w-3/5 h-full">
                        <img
                          className="w-full h-full relative object-cover aspect-square  max-w-full"
                          alt=""
                          src="/rectangle-245@2x.png"
                        />
                      </div>
                      <div className=" w-full flex flex-col justify-around pl-5 ">
                        <div className=" flex gap-x-1">
                          <img
                            className="w-[11.9px] h-[11.9px] relative overflow-hidden "
                            alt=""
                            src="/calendar-1.svg"
                          />
                          <p className="text-xs"> 12 March, 2024</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                          <p
                            style={{
                              fontSize: fontSize(30, 14, 1920, 400),
                            }}
                            className="text-lg font-libre-baskerville font-semibold"
                          >
                            Lorem ipsum dolor sit amet
                          </p>
                          <p
                            style={{
                              fontSize: fontSize(17, 8, 1920, 400),
                            }}
                            className="text-[11px]"
                          >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quis est odit repellendus minima voluptas sit
                            adipisci quasi eveniet id suscipit, eum, voluptate
                            eligendi illo voluptates!
                          </p>
                        </div>
                        <div className="w-full ">
                          <button className="bg-orange-200 h-[49px] flex justify-center items-center gap-x-1 px-7">
                            <div> Read More</div>
                            <div className="h-full bg-orange-200 flex items-center">
                              <img
                                className=" h-[6px] w-[6px] relative "
                                alt=""
                                src="/double_arrow.svg"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid system starts from here */}
        <div className="grid grid-cols-7  gap-8">
          <div className="col-start-1 col-span-7 md:col-span-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-3 md:gap-[50px]">
              <BlogCardSmall />
              <BlogCardSmall />
              <BlogCardSmall />
              <BlogCardSmall />
              <BlogCardSmall />
              <BlogCardSmall />
              <BlogCardSmall />
            </div>
          </div>
          <div className="col-start-6 col-span-2    mt-10 hidden md:block">
            <div className="flex flex-col px-2 border rounded-sm py-10">
              <div className="flex items-center border  rounded-sm mx-3 px-2   gap-x-4">
                <img
                  className="w-4 h-4 relative z-[2]"
                  alt=""
                  src="/search.svg"
                />
                <input
                  className=" w-full outline-none text-sm   max-w-[300px] h-14 "
                  type="text"
                  id="search"
                  placeholder="Search for Articles"
                />
              </div>

              {/* Check boxes list */}
              <div className="flex flex-col  mt-2 gap-7">
                <div className="flex items-center justify-start  px-3  gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4  accent-orange-200 rounded-full "
                  />
                  <label htmlFor="">Catagory 1</label>
                </div>

                <div className="flex items-center justify-start  px-3  gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4  accent-orange-200 rounded-full "
                  />
                  <label htmlFor="">Catagory 2</label>
                </div>
                <div className="flex items-center justify-start  px-3  gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4  accent-orange-200 rounded-full "
                  />
                  <label htmlFor="">Catagory 3</label>
                </div>
                <div className="flex items-center justify-start  px-3  gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4  accent-orange-200 rounded-full "
                  />
                  <label htmlFor="">Catagory 4</label>
                </div>
                <div className="flex items-center justify-start  px-3  gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4  accent-orange-200 rounded-full "
                  />
                  <label htmlFor="">Catagory 5</label>
                </div>
                <div className="flex items-center justify-start  px-3  gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 h-4  accent-orange-200 rounded-full "
                  />
                  <label htmlFor="">Catagory 6</label>
                </div>
              </div>
            </div>

            <div className="mt-28  rounded-[5.52px] bg-darkslateblue flex flex-col items-start justify-end pt-[210.7px] pb-[39.7px] pr-[38.6px] pl-[39px] box-border relative gap-[20.7px] max-w-full text-[30px] text-white font-libre-baskerville mq450:pt-[137px] mq450:pb-[26px] mq450:box-border">
              <div className="w-[395px] h-[442.4px] relative rounded-[5.52px] bg-darkslateblue hidden max-w-full " />
              <b className="self-stretch relative z-[1] mq450:text-[25px] mq900:text-[34px]">
                Register for Free
              </b>
              <button className="cursor-pointer  p-5   bg-orange-200 self-stretch flex flex-row items-start justify-center z-[1]">
                <p className="flex items-center text-[23px] h-[25px] font-red-hat-display text-black  ">
                  Register
                </p>
              </button>
              <img
                className="w-[307.8px] h-[251.6px] absolute !m-[0] top-[-61.8px] left-[32px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-161@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <FrameComponent11 />
      </div>
    </div>
  );
};

export default BlogsV2Approved;
