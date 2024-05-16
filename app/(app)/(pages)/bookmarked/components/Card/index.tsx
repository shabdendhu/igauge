"use client";
import IconButton from "@mui/material/IconButton";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Button from "@mui/material/Button";
import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import university from "./sample.json";
const Card = ({ Xuniversity }: any) => {
  const fontSize = useCalculateFontSize();
  console.log(university);
  return (
    <div className="relative">
      <div className="border border-[#EAEAEA]-500 flex  aspect-[1333/265] mq450:aspect-[349/133] overflow-hidden ">
        <div className="h-full relative aspect-[241/265] mdm:aspect-[110/133] mq450:w-1/3">
          <img
            className="h-full relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            // src={university.media.featured_image.url}
            src="/rectangle-161@2x.png"
          />
        </div>
        <div className="tborder border-red-500 flex-1 p-[2%] flex flex-row mq450:flex-col">
          <div className="tborder border-green-500 " style={{ flex: 2 }}>
            <div className="tborder border-pink-500 h-3/4 flex">
              <div className="tborder border-green-500 w-3/4 flex flex-col">
                <div className="tborder border-black-500">
                  <span
                    style={{
                      fontSize: fontSize(16, 7, 1920, 400),
                      textTransform: "capitalize",
                    }}
                    className="bg-orange-200 rounded-8xs font-semibold text-base px-3 py-1 font-red-hat-text text-black mdm:w-[30px] mdm:h-[12px] mdm:text-[6.21px]"
                  >
                    {"Univercity"}
                  </span>
                </div>
                <div className="flex-1 flex items-center">
                  <h2
                    style={{
                      fontSize: fontSize(33, 11, 1920, 400),
                    }}
                    className="tborder border-red-500  text-14xl  font-bold font-libre-baskerville  mdm:text-xs  max-w-[90%] whitespace-nowrap overflow-hidden overflow-ellipsis"
                  >
                    {university?.institution_name?.slice(0, 25)}
                    {university?.institution_name?.length > 20 ? "..." : ""}
                  </h2>
                </div>
                <div className="tborder border-yellow-500 flex gap-2">
                  <img src="location.svg" className="w-[7px]" />
                  <div
                    style={{
                      fontSize: fontSize(20, 8, 1920, 400),
                      textTransform: "capitalize",
                    }}
                    className="flex-1 mdm:text-[7.61px]"
                  >
                    {university?.city?.city_name},{" "}
                    {university?.state?.state_name}
                  </div>
                </div>
              </div>
              <div className="tborder border-blue-500 w-1/4">
                <div>
                  <div
                    style={{
                      fontSize: fontSize(20, 8, 1920, 400),
                    }}
                    className="font-semibold text-xl mdm:text-[7.76px]"
                  >
                    {university?.keypoints[0]?.keypoint_title.KeyPoint_title}
                  </div>
                  <div
                    style={{
                      fontSize: fontSize(15, 6, 1920, 400),
                    }}
                    className="text-mini font-red-hat-text mdm:text-[5.82px]"
                  >
                    {university.keypoints[0]?.keypoint_value}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: fontSize(20, 8, 1920, 400),
                    }}
                    className="font-semibold text-xl mdm:text-[7.76px]"
                  >
                    {university?.keypoints[1]?.keypoint_title.KeyPoint_title}
                  </div>
                  <div
                    style={{
                      fontSize: fontSize(15, 6, 1920, 400),
                    }}
                    className="text-mini font-red-hat-text mdm:text-[5.82px]"
                  >
                    {university?.keypoints[1]?.keypoint_value}
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: fontSize(20, 7, 1920, 400),
              }}
              className="tborder border-red-500 h-1/4 flex justify-between items-end text-xl font-red-hat-text mdm:text-[7px]"
            >
              <div>Scholarships</div>
              <div>1:16 Student/Faculty Ratio</div>
              <div>M Size</div>
            </div>
          </div>
          <div
            className="tborder border-blue-500 flex flex-row"
            style={{ flex: 1 }}
          >
            <div className="tborder border-red-500 flex items-end flex-1 justify-end mq450:hidden">
              <IconButton>
                <FavoriteBorderIcon
                  style={{
                    color: "#DC6A6A",
                    fontSize: fontSize(21, 19, 1920, 400),
                  }}
                />
              </IconButton>
            </div>
            <div className="tborder border-green-500  flex flex-col items-center mq450:w-full mq450:flex-row">
              <img src="/image-19@2x.png" className="h-[60%] mdm:h-[50px]" />
              <span className="mdm:flex mdm:flex-row">
                <IconButton>
                  <ArrowCircleLeftIcon
                    style={{
                      color: "#F7A600",
                      backgroundColor: "#000000",
                      borderRadius: "50%",
                      fontSize: fontSize(21, 19, 1920, 400),
                    }}
                  />
                </IconButton>
                <IconButton>
                  <ArrowCircleRightIcon
                    style={{
                      color: "#F7A600",
                      backgroundColor: "#000000",
                      borderRadius: "50%",
                      fontSize: fontSize(21, 19, 1920, 400),
                    }}
                  />
                </IconButton>
              </span>
              <div className="tborder border-red-500 flex items-end flex-1 justify-end xs:hidden">
                <IconButton>
                  <FavoriteBorderIcon
                    style={{
                      color: "#DC6A6A",
                      fontSize: fontSize(21, 19, 1920, 400),
                    }}
                  />
                </IconButton>
              </div>
              <Button
                style={{
                  fontSize: fontSize(14, 6, 1920, 400),
                }}
                className="bg-[#F7A600] h-[40px] font-red-hat-text rounded-none font-normal text-black px-5 mq450:px-3 mq450:h-[20px]"
              >
                Read More{" "}
                <KeyboardDoubleArrowRightIcon
                  style={{
                    fontSize: fontSize(17, 8, 1920, 400),
                  }}
                />
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="col-span-9 flex-1 rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-white box-border flex flex-row items-start justify-between pt-[21px] px-10  max-w-full gap-[20px] border-[1px] border-solid border-whitesmoke-100 mq900:min-w-full mq1300:flex-wrap mq1300:pl-6 mq1300:pr-6 mq1300:box-border pb-10">
        <div className="flex flex-2 flex-col items-start justify-end pt-0 px-0 pb-[3.7px] box-border max-w-full ">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq900:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <button className="cursor-pointer [border:none] py-1 pr-3.5 pl-[15px] bg-orange-200 rounded-8xs flex flex-row items-start justify-start z-[1] hover:bg-chocolate-200">
                  <div className="h-[29px]  relative rounded-8xs bg-orange-200 hidden" />
                  <div className="relative text-base font-semibold font-red-hat-text text-black text-left inline-block  z-[2]">
                    University
                  </div>
                </button>
                <h2 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq900:text-[23px] mq450:text-xl">
                  CMR University
                </h2>
                <div className="flex flex-row items-center justify-center gap-[10.6px] text-lgi-6 font-red-hat-text">
                  <div className="flex flex-col items-start justify-center pt-[5.3px] px-0 pb-0">
                    <img
                      className="w-[12.3px] h-[15.5px] relative shrink-0 [debug_commit:1de1738] z-[1]"
                      alt=""
                      src="/vector3.svg"
                    />
                  </div>
                  <div className=" text-[13px] relative  min-w-[97px] shrink-0 [debug_commit:1de1738] z-[1]">
                    Delhi, India
                  </div>
                </div>
              </div>
              <div className="h-[126px]  flex flex-row items-start justify-start gap-[28px] text-xl font-red-hat-text">
                <div className="self-stretch w-px relative box-border z-[1] border-r-[1px] border-solid border-whitesmoke-200" />
                <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative font-semibold z-[1] mq450:text-base">
                        Undergraduate
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-px text-mini">
                        <div className="relative inline-block  z-[1]">
                          54 Courses
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[2px]">
                      <div className="relative font-semibold inline-block min-w-[127px] z-[1] mq450:text-base">
                        Postgraduate
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 px-px text-mini">
                        <div className="relative inline-block  z-[1]">
                          58 Courses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-200 text-[14px]" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]  text-[14px] font-red-hat-text mq900:flex-wrap">
              <div className="relative inline-block min-w-[118px]">
                Scholarships
              </div>
              <div className="relative">1:16 Student/Faculty Ratio</div>
              <div className="relative inline-block min-w-[59px]">M Size</div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-row items-end justify-center gap-[22px]">
          <div className="flex flex-col items-end justify-end pt-0 px-0 pb-2.5">
            <img
              className="w-6 h-5 relative z-[1]"
              alt=""
              src="/vector-17.svg"
            />
          </div>
          <div className="self-stretch flex-1  flex-col items-center justify-start ">
            <img
              className="max-h-[50%] flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] max-w-[150px]"
              alt=""
              src="/image-19@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-[8.5px]">
              <div className="flex flex-row items-start justify-start py-0 pr-9 pl-[35.7px]">
                <div className="flex flex-row items-start justify-start gap-[17.3px] shrink-0 [debug_commit:1de1738]">
                  <div className="h-[21.5px] w-[21.5px] relative">
                    <div className="absolute top-[1.1px] left-[1.1px] rounded-[50%] [background:linear-gradient(#000,_#000),_#000] w-[19.4px] h-[19.4px] z-[1]" />
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[2]"
                      alt=""
                      src="/vector-20.svg"
                    />
                  </div>
                  <div className="h-[21.5px] w-[21.5px] relative">
                    <div className="absolute top-[1.1px] left-[1px] rounded-[50%] [background:linear-gradient(#000,_#000),_#000] w-[19.4px] h-[19.4px] z-[1]" />
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[11.6px] pb-[10.1px] pr-[30.2px] pl-[30.6px] bg-orange-200 flex flex-row items-start justify-start gap-[4.8px] shrink-0 [debug_commit:1de1738] z-[1]">
                <div className=" relative bg-orange-200 hidden" />
                <div className="relative text-mini-4 font-red-hat-display text-black text-left inline-block min-w-[70px] z-[1] text-[14px]">
                  Read More
                </div>
                <div className="flex flex-col items-start justify-start pt-[6.8px] px-0 pb-0">
                  <img
                    className="w-[7.4px] h-[7.4px] relative z-[1]"
                    alt=""
                    src="/frame-361.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      </div>
      <div className="h-[38px] w-44 absolute !m-[0] left-[2%] bottom-[-19px] smm:w-[110px] 2xlm:w-[90px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-sm w-full h-full z-[2]"
          alt=""
          src="/rectangle-2041.svg"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2px] left-[3px] w-[170px] h-[34px] z-[5] smm:w-[105px] 2xlm:w-[95px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-sm w-full h-full z-[3]"
            alt=""
            src="/rectangle-2051.svg"
          />
          <div className="absolute top-[10px]  left-[50px] text-[14px] uppercase font-inter text-black text-left inline-block w-[66px] h-[17px] min-w-[66px] z-[4] smm:text-[11px] smm:left-[30px] 2xlm:text-[11px] 2xlm:left-[25px] mq450:left-[28px] ">
            Diamond
          </div>
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <img
          className="rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs w-[241px] h-[265px] object-cover"
          alt=""
          src="/rectangle-161@2x.png"
        />
      </div>
      <div className="col-span-6 flex justify-center">
        <div className="  w-[672px] h-[185px]">
          <div className="  w-[289px] h-[126px] text-14xl font-libre-baskerville">
            <div className="  w-[289px] h-[82px]">
              <b className=" ">CMR University</b>
              <div className="  text-[19.61px] font-red-hat-text">
                Delhi, India
              </div>
              <img
                className=" h-[18.9%] w-[4.26%] top-[74.72%] right-[95.74%] bottom-[6.38%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector3.svg"
              />
            </div>
            <div className="  w-[94px] h-[29px] text-base font-red-hat-text">
              <div className=" rounded-8xs bg-orange-200 w-[105px] h-[29px]">
                <span className="  font-semibold">University</span>
              </div>
            </div>
          </div>
          <div className="box-border h-px border-t-[1px] border-solid border-whitesmoke-200" />
          <div className="  flex flex-row items-start justify-between">
            <div className="relative">Scholarships</div>
            <div className="relative">1:16 Student/Faculty Ratio</div>
            <div className="relative">M Size</div>
          </div>
          <div className=" top-[-4px] left-[525px] w-[147px] h-[109px]">
            <div className=" top-[0px] left-[0px] font-semibold">
              Undergraduate
            </div>
            <div className=" top-[30px] left-[1px] text-mini">54 Courses</div>
            <div className=" top-[89px] left-[1px] text-mini">58 Courses</div>
            <div className=" top-[61px] left-[0px] font-semibold">
              Postgraduate
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col">
        <div className="  w-[202px] h-[40.7px] text-mini-4 font-red-hat-display">
          <div className=" top-[0px]  w-[143px] h-[40.7px]">
            <div className=" top-[0px]  bg-orange-200 w-[143px] h-[40.7px]" />
            <div className="  inline-block w-[69.6px] h-[16.9px]">
              Read More
            </div>
            <img
              className=" h-[18.18%] w-[5.17%] top-[45.32%] right-[21.12%] bottom-[36.5%] left-[73.71%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/19.svg"
            />
          </div>
          <img
            className=" h-[49.14%] w-[11.88%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
