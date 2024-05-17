"use client";
import MapComponent from "@/app/(app)/components/v1/GoogleMap";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import type { NextPage } from "next";
import FrameComponent1 from "../../components/FrameComponent1";
import ImageSwiper from "../../components/ImageSwiper.tsx";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
import RatingSection from "./sub-components/RatingSection";
const VideoPlayer = () => {
  return (
    <div className="w-full mx-auto aspect-[1230/650]">
      <video controls className="w-full" poster="/rectangle-271@2x.png">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const RequestMethodology = () => {
  return (
    <div className="mt-[46px] self-stretch flex flex-row flex-wrap items-start justify-start gap-[55px] max-w-full text-19xl text-white font-libre-baskerville mq900:gap-[27px] mq900:w-full">
      <div className=" rounded-8xs bg-darkslateblue flex flex-col items-start justify-end pt-[191px] px-[35px] pb-9 box-border relative gap-[19px] max-w-full mq450:pt-[124px] mq450:pb-[23px] mq450:box-border mq900:w-full">
        <div className="relative rounded-8xs bg-darkslateblue hidden max-w-full z-[0]" />
        <h3 className="self-stretch relative text-[26px] font-bold z-[1] mq450:text-4xl mq900:text-11xl">
          Request Methodology
        </h3>
        <button className="cursor-pointer [border:none] pt-[18px] px-5 pb-[21px] bg-orange-200 self-stretch flex flex-row items-start justify-center z-[1]">
          <div className="relative bg-orange-200 hidden" />
          <div className="relative text-center text-[16px] leading-[22px] font-red-hat-display text-black text-left inline-block min-w-[92px] z-[1] mq450:text-lgi mq450:leading-[18px]">
            Request
          </div>
        </button>
        <img
          className="w-[279px] h-[228px] absolute !m-[0] top-[-56px] left-[29px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/image-16@2x.png"
        />
      </div>
    </div>
  );
};
const SingleListingV2Approved: NextPage = () => {
  const images = [
    {
      src: "/rectangle-219@2x.png",
      alt: "",
    },
    {
      src: "/rectangle-220@2x.png",
      alt: "",
    },
    {
      src: "/rectangle-221@2x.png",
      alt: "",
    },
    {
      src: "/rectangle-221@2x.png",
      alt: "",
    },
  ];
  const fontSize = useCalculateFontSize();
  return (
    <div className="w-full text-black bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* <Header /> */}

      <ImageSwiper images={images} />
      <section className="crm-university-section grid grid-cols-12 w-full px-[100px] mq1275:px-[30px] ">
        <div className="col-span-6 mt-[80px] flex flex-col gap-[14px] mq900:col-span-12">
          <h1 className=" text-[45px] font-bold font-libre-baskerville mq450:text-19xl mq900:text-[51px] xl:text-[64px]">
            CMR University
          </h1>
          <div className=" text-[16px] font-inter text-darkslategray inline-block w-[663px] mq900:w-full mq450:text-lg w-[70%] xl:text-[25px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium...
          </div>
          <div className="grid grid-cols-1 mq900:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 md:w-[70%]">
            <img
              className="w-full object-cover aspect-[169/120] mq900:w-[160px]"
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <img
              className="w-full object-cover aspect-[169/120] mq900:w-[160px]"
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <img
              className="w-full object-cover aspect-[169/120] mq900:w-[160px]"
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <img
              className="w-full object-cover aspect-[169/120] mq900:w-[160px]"
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <img
              className="w-full object-cover aspect-[169/120] mq900:w-[160px]"
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <img
              className="w-full object-cover aspect-[169/120] mq900:w-[160px]"
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
          </div>
        </div>

        {/** Card section */}

        <div className="mt-[-50px] col-span-6 rounded-8xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[756px] flex flex-col items-start justify-start pt-[47px] pb-[35px] pr-[45px] pl-12 gap-[40px] max-w-full z-[1] border-[1px] border-solid border-whitesmoke mq450:gap-5 mq900:py-[20px] mq900:col-span-12 mq900:m-auto mq900:mt-[40px] mq1275:px-5">
          <div className="rounded-8xs bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke" />
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[21px] pr-[54px] pl-[50px] box-border max-w-full mq900:px-3 mq450:py-0">
            <img
              className="w-full h-[100%] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              alt=""
              src="/image-23@2x.png"
            />
          </div>
          <div className="w-[116px] h-[55.9px] relative hidden" />
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] ">
            <div className="w-1/2 flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[26px] mq450:gap-[10px]">
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <div className="flex flex-row items-center justify-center gap-[10px] ">
                    <div className="flex flex-col items-center justify-center px-0 pb-0 w-5">
                      <img
                        className="w-4 h-5 relative z-[1] mq450:w-[10px]"
                        alt=""
                        src="/location.svg"
                      />
                    </div>
                    <div
                      style={{
                        fontSize: fontSize(25, 11, 1920, 400),
                      }}
                      className="relative inline-block min-w-[50px] z-[1] mq450:text-sm"
                    >
                      Delhi, India
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <div className="flex flex-col items-center justify-center px-0 pb-0 w-5">
                    <img
                      className="w-4 h-5 relative z-[1] mq450:w-[10px]"
                      alt=""
                      src="/global-1.svg"
                    />
                  </div>
                  <div
                    style={{
                      fontSize: fontSize(25, 11, 1920, 400),
                    }}
                    className="relative z-[1] mq450:text-sm"
                  >
                    Private / Public
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-row items-center ">
              <div className="h-[73px] w-[327px] relative rounded-8xs-4 bg-white hidden max-w-full z-[0]" />

              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.7999999999992724px]">
                <div className="flex flex-row items-start justify-start gap-[10.500000000003638px]">
                  <div className="flex flex-col items-center justify-center px-0 pb-0 w-5">
                    <img
                      className="w-4 h-5 relative z-[1] mq450:w-[10px]"
                      alt=""
                      src="/vector-17.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[2.699999999999818px] px-0 pb-0">
                    <div
                      style={{
                        fontSize: fontSize(25, 11, 1920, 400),
                      }}
                      className="relative inline-block min-w-[39px] shrink-0 [debug_commit:1de1738] z-[1] mq450:text-sm"
                    >
                      Save
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <div className="flex flex-col items-center justify-center px-0 pb-0 w-5">
                  <img
                    className="w-4 h-5 relative z-[1] mq450:w-[10px]"
                    alt=""
                    src="/exchangehorizontal.svg"
                  />
                </div>
                <div
                  style={{
                    fontSize: fontSize(25, 11, 1920, 400),
                  }}
                  className="relative inline-block min-w-[73px] shrink-0 [debug_commit:1de1738] z-[1] mq450:text-sm"
                >
                  Compare
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24.300000000000185px] max-w-full">
              <div className="w-[637.1px] flex flex-row items-start justify-start py-0 px-[10px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap xsm:justify-center mq450:gap-5 mq1275:gap-0">
                  <img
                    style={{
                      width: fontSize(70, 32, 1920, 400),
                    }}
                    className="aspect-square relative z-[1] mq450:w-[40px]"
                    alt=""
                    src="/frame-2-1.svg"
                  />
                  <img
                    style={{
                      width: fontSize(70, 32, 1920, 400),
                    }}
                    className="aspect-square relative z-[1] mq450:w-[40px]"
                    alt=""
                    src="/frame-3-1.svg"
                  />
                  <img
                    style={{
                      width: fontSize(70, 32, 1920, 400),
                    }}
                    className="aspect-square relative overflow-hidden shrink-0 z-[1] mq450:w-[40px]"
                    alt=""
                    src="/twitter-1-1.svg"
                  />
                  <img
                    style={{
                      width: fontSize(70, 32, 1920, 400),
                    }}
                    className="aspect-square relative rounded-[183.37px] overflow-hidden shrink-0 z-[1] mq450:w-[40px]"
                    alt=""
                    src="/linkedin-1.svg"
                  />
                  <img
                    style={{
                      width: fontSize(70, 32, 1920, 400),
                    }}
                    className="aspect-square relative rounded-[183.37px] overflow-hidden shrink-0 z-[1] mq450:w-[40px]"
                    alt=""
                    src="/youtube-1.svg"
                  />
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[23px] flex items-center px-5 bg-orange-200 self-stretch rounded-8xs flex flex-row items-start justify-center box-border gap-[18px] max-w-full z-[1] mq900:py-[10px]">
                <div className="h-[86px] w-[659px] relative rounded-8xs bg-orange-200 hidden max-w-full" />
                <div className="flex flex-col items-start justify-start  px-0 pb-0">
                  <img
                    className="w-5 h-5 relative z-[2]"
                    alt=""
                    src="/group.svg"
                  />
                </div>
                <div className="relative text-11xl font-red-hat-text text-black text-left inline-block min-w-[119px] z-[2] mq450:text-lg mq900:text-5xl">
                  Visit Site
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rating section */}

      <RatingSection />

      <section className="w-full">
        <div className="grid grid-cols-12 gap-[40px] mx-[100px] mq900:grid-cols-2 mq900:mx-5">
          <div className="flex flex-col col-span-3 lgm:col-span-4 mq900:col-span-2">
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full mq900:hidden">
              <div className="self-stretch rounded-8xs bg-papayawhip box-border flex flex-col items-start justify-start pt-9 pb-[43px] pr-2.5 pl-[34px] gap-[26px] max-w-full border-[1px] border-solid border-orange-200 mq450:pt-[23px] mq450:pb-7 mq450:box-border">
                <div className="h-[368px] rounded-8xs bg-papayawhip box-border hidden max-w-full border-[1px] border-solid border-orange-200" />
                <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border text-[40px] font-libre-baskerville">
                  <h2 className="m-0 flex-1 text-inherit font-bold font-inherit z-[1] mq450:text-5xl mq900:text-[32px]">
                    Context
                  </h2>
                </div>
                <div className="self-stretch relative z-[1] mq450:text-lgi">
                  Overview
                </div>
                <div className="self-stretch relative z-[1] mq450:text-lgi">
                  Highlights
                </div>
                <div className="self-stretch relative z-[1] mq450:text-lgi">
                  Fee Structure
                </div>
                <div className="self-stretch relative z-[1] mq450:text-lgi">
                  Location
                </div>
              </div>
            </div>
            <RequestMethodology />
          </div>

          <div className="col-span-9 lgm:col-span-8 mq900:col-span-2">
            <div className="flex-1 flex flex-col items-start justify-start gap-[99px] max-w-full text-40xl font-libre-baskerville mq1275:min-w-full mq450:gap-[25px_99px] mq900:gap-[49px_99px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full mq900:gap-[18px_36px]">
                <h1 className="text-inherit font-bold font-inherit inline-block max-w-full mq450:text-16xl mq900:text-xl ">
                  Overview
                </h1>
                <div className="self-stretch min-h-[197px] text-[22.1px] font-red-hat-text text-darkslategray inline-block shrink-0 mq450:text-lg mq900:text-sm">
                  <p className="m-0">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. `}</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam
                  </p>
                </div>
              </div>
              <h1 className="m-0  relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-16xl mq900:text-xl">
                Salient Features
              </h1>
              <div className="border border-orange-200 w-full bg-papayawhip px-10 flex flex-col gap-10 py-5 rounded-8xs">
                {Array(4)
                  .fill("")
                  .map((e, i) => (
                    <div className="flex items-center gap-5">
                      <ArrowCircleRightIcon
                        style={{
                          color: "#F7A600",
                          backgroundColor: "#000000",
                          borderRadius: "50%",
                          // fontSize: fontSize(21, 19, 1920, 400),
                        }}
                      />
                      <div className="text-[22.1px] font-red-hat-text text-darkslategray mq450:text-lg mq900:text-sm">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </div>
                    </div>
                  ))}
              </div>
              <h1 className="m-0  relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-16xl mq900:text-xl">
                Walkthrough Video
              </h1>
              {/* <div className="flex-1 w-full flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border  max-w-full mq1275:min-w-full">
                <div className="self-stretch w-full flex flex-row items-start justify-center pt-[275px] px-5 pb-[274px] relative mq900:pt-[179px] mq900:pb-[178px] mq900:box-border">
                  <img
                    className="w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/rectangle-271@2x.png"
                  />
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[100px] flex flex-row items-start justify-start">
                    <div className="h-[100px] flex-1 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full z-[1]" />
                      <img
                        className="absolute top-[25px] left-[21px] w-[50px] h-[50px] object-contain z-[2]"
                        alt=""
                        src="/polygon-21.svg"
                      />
                    </div>
                  </button>
                </div>
              </div> */}
              <VideoPlayer />
              <div className="flex flex-row items-start justify-end py-0 box-border max-w-full text-17xl text-white w-full">
                <div className="flex-1 rounded-8xs bg-darkslateblue flex flex-row items-start justify-start relative max-w-full">
                  <div className="self-stretch w-[1210px] relative rounded-8xs bg-darkslateblue hidden max-w-full z-[0]" />
                  <div className="flex-1 flex flex-row items-center justify-center pt-[20px] pb-[20px] pr-[20px] pl-[20px] box-border relative gap-[36px] max-w-full mq1275:flex-wrap mq1275:pl-[140px] mq1275:pr-[35px] mq1275:box-border mq450:pl-5 mq450:box-border mq900:gap-[18px] mq900:pl-[70px] mq900:box-border">
                    <img
                      className="w-[210px] !m-[0] object-contain z-[3]"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[332px] max-w-full">
                      <h3 className="m-0 w-[403px] relative text-[25px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-3xl mq900:text-10xl">
                        Find More About Fee Structure
                      </h3>
                      <div className="self-stretch relative text-[14px] leading-[27px] font-red-hat-text z-[1] mq450:text-base mq450:leading-[22px]">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium...
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-0 pb-0 box-border mq1275:flex-1">
                      <button className="cursor-pointer [border:none] pt-[16px] pb-[16px] pr-9 pl-[16px] bg-orange-200 flex flex-row items-start justify-start gap-[18px] z-[1]">
                        <div className="h-[77px] w-[313px] relative bg-orange-200 hidden" />
                        <img
                          className="w-5 h-5 relative z-[2]"
                          alt=""
                          src="/group.svg"
                        />
                        <div className="relative text-[16px] font-red-hat-display text-black text-left z-[1] mq450:text-lgi">
                          View Fee Structure
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[38px] max-w-full text-40xl mq900:gap-[19px_38px] w-full">
                <h1 className="relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-16xl mq900:text-xl">
                  Location
                </h1>
                {/* <img
                  className="self-stretch h-[496px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/rectangle-157@2x.png"
                /> */}
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10">
        <FrameComponent1 />
      </div>
      {/*Location */}

      {/* <Footer /> */}
    </div>
  );
};

export default SingleListingV2Approved;
