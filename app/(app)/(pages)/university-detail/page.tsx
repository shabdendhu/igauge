"use client";
import MapComponent from "@/app/(app)/components/v1/GoogleMap";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import type { NextPage } from "next";
import FrameComponent1 from "../../components/FrameComponent1";
import ImageSwiper from "../../components/ImageSwiper.tsx";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
import RatingSection from "./sub-components/RatingSection";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchData } from "../../services/institution";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import {
  addBookmarkInstitutionByUserId,
  removeBookmarkInstitutionByUserId,
} from "@/app/(app)/services/bookmark";
import RatingBadge from "../../components/v1/RatingBadge";
const VideoPlayer = ({ university }: any) => {
  console.log(university.video);
  const [video, setVideo] = useState(false);
  return (
    <div className="w-full mx-auto aspect-[1230/650] overflow-hidden">
      {!video ? (
        <div className="relative flex items-center justify-center h-full">
          <img src="/rectangle-271@2x.png" />
          <button onClick={() => setVideo(true)} className="absolute z-[5]">
            <img src="/playicon.svg" />
          </button>
        </div>
      ) : (
        <video autoPlay controls className="h-full" poster="">
          <source src={university.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
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
const SingleListingV2Approved = () => {
  const fontSize = useCalculateFontSize();
  const param = useSearchParams();
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);
  const [university, setUniversity] = useState<any>({
    keypoints: [],
    salient_features: [],
    ratings: { "category-ratings": [{}] },
  });
  useEffect(() => {
    console.log(param.get("id"));
    const type = param.get("institution_type");
    const id = param.get("id");
    const url = `${type}/${id}`;
    fetchData(url, {
      page: 0,
      limit: 5,
      depth: 3,
    })
      .then((data) => setUniversity(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, [param.get("id")]);
  const bookmark = () => {
    addBookmarkInstitutionByUserId(1, 1, "university")
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setBookmarked(true);
  };
  const handleClickCompare = () => {
    router.push(
      `/compare?id=[${university?.id}]&&type=${param.get("institution_type")}`
    );
  };
  return (
    <div className="w-full text-black bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      {/* <Header /> */}

      <ImageSwiper images={university?.media?.gallery || []} />
      <section className="crm-university-section grid grid-cols-12 w-full px-[100px] mq1275:px-[30px] ">
        <div className="col-span-7 mt-[80px] flex flex-col gap-[14px] mq900:col-span-12">
          <h1 className=" text-[45px] font-bold font-libre-baskerville mq450:text-19xl mq900:text-[51px] xl:text-[64px]">
            {university?.institution_name}
          </h1>
          {/* <div className=" text-[16px] font-inter text-darkslategray inline-block w-[663px] mq900:w-full mq450:text-lg w-[70%] xl:text-[25px]">
            {university.short_description}
          </div> */}
          <div className="grid grid-cols-1 mq900:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 md:w-[80%]">
            {/* <div>
              <img
                className="w-full object-cover aspect-[169/120] mq900:w-[160px]"
                loading="lazy"
                alt=""
                src={university?.ratings?.overall_rating?.badges_image?.url}
              />
              <p className="mt-4 capitalize">
                {university?.ratings?.overall_rating?.badges_name}
              </p>
            </div> */}
            {university?.ratings?.overall_rating?.badges_name ? (
              <RatingBadge
                // key={i}
                badgeName={university?.ratings?.overall_rating?.badges_name}
                ratedBy={university?.ratings?.overall_rating?.rated_by}
                ratingName={""}
              />
            ) : (
              <div>Ratings Under Assessment</div>
            )}
            {university?.ratings?.subject_ratings?.length ? (
              <>
                {university?.ratings?.subject_ratings?.map((e: any, i: any) => (
                  <RatingBadge
                    key={i}
                    badgeName={e?.subject_rating?.badges_name}
                    ratedBy={e?.subject_rating?.rated_by}
                    ratingName={e.subject_name.subject_name}
                  />
                ))}
              </>
            ) : (
              <div>Ratings Under Assessment</div>
            )}
          </div>
        </div>

        {/** Card section */}

        <div
          style={{
            boxShadow: "0px 0px 30px 0px #0000001A",
          }}
          className="h-fit mt-[-50px] col-span-5 rounded-8xs bg-white box-border flex flex-col items-start justify-start pt-[47px] pb-[35px] pr-[45px] pl-12 gap-[40px] max-w-full z-[1] border-[1px] border-solid border-whitesmoke mq450:gap-5 mq900:py-[20px] mq900:col-span-12 mq900:m-auto mq900:mt-[40px] mq1275:px-5"
        >
          <div className="rounded-8xs bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke" />
          <div className="aspect-[550/93] overflow-hidden self-stretch flex flex-row items-start justify-start pt-0 pb-[21px] pr-[54px] pl-[50px] box-border max-w-full mq900:px-3 mq450:py-0">
            <img
              className="h-full flex-1 relative overflow-hidden object-cover z-[1] "
              alt=""
              src={university?.media?.logo?.url}
            />
          </div>
          <div className="w-[116px] h-[55.9px] relative hidden" />
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] ">
            <div className="w-full flex flex-col items-start justify-start pt-1 px-0 pb-0">
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
                      className="relative inline-block min-w-[50px] z-[1] mq450:text-sm font-red-hat-text"
                    >
                      {university?.city?.city_name}
                      {", "}
                      {university?.state?.state_name}
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
                    className="relative z-[1] mq450:text-sm capitalize font-red-hat-text"
                  >
                    {university?.type}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <div className="flex flex-col items-center justify-center px-0 pb-0 w-5">
                    <img
                      className="w-4 h-5 relative z-[1] mq450:w-[10px]"
                      alt=""
                      src="/empty-flag.svg"
                    />
                  </div>
                  <div
                    style={{
                      fontSize: fontSize(25, 11, 1920, 400),
                    }}
                    className="relative z-[1] mq450:text-sm capitalize font-red-hat-text"
                  >
                    Established on {university?.established_on}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <div className="flex flex-col items-center justify-center px-0 pb-0 w-5">
                    <img
                      className="w-4 h-5 relative z-[1] mq450:w-[10px]"
                      alt=""
                      src="/tuition.svg "
                    />
                  </div>
                  <div
                    style={{
                      fontSize: fontSize(25, 11, 1920, 400),
                    }}
                    className="relative z-[1] mq450:text-sm capitalize font-red-hat-text"
                  >
                    Central Board of Secondary Education (CBSE)
                  </div>
                </div>
              </div>
              {/* width: 698px;
height: 675.02px;
padding: 0px;
gap: 0px;
border-radius: 0px 0px 4.26px 4.26px;
opacity: 0px;
 */}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24.300000000000185px] max-w-full">
              <div className="w-[637.1px] flex flex-row items-start justify-start py-0 px-[10px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap xsm:justify-center mq450:gap-5 mq1275:gap-0">
                  <Link href={university?.facebook_url || ""}>
                    <img
                      style={{
                        width: fontSize(70, 32, 1920, 400),
                      }}
                      className="aspect-square relative z-[1] mq450:w-[40px]"
                      alt=""
                      src="/frame-2-1.svg"
                    />
                  </Link>
                  <Link href={university?.instagram_url || ""}>
                    <img
                      style={{
                        width: fontSize(70, 32, 1920, 400),
                      }}
                      className="aspect-square relative z-[1] mq450:w-[40px]"
                      alt=""
                      src="/frame-3-1.svg"
                    />
                  </Link>
                  <Link href={university?.twitter_url || ""}>
                    <img
                      style={{
                        width: fontSize(70, 32, 1920, 400),
                      }}
                      className="aspect-square relative shrink-0 z-[1] mq450:w-[40px]"
                      alt=""
                      src="/twitter-1-1.svg"
                    />
                  </Link>
                  <Link href={university?.linkedin_url || ""}>
                    <img
                      style={{
                        width: fontSize(55, 32, 1920, 400),
                      }}
                      className="aspect-square relative  shrink-0 z-[1] mq450:w-[40px]"
                      alt=""
                      src="/linkedin-new.svg"
                    />
                  </Link>
                  <Link href={university?.youtube_url || ""}>
                    <img
                      style={{
                        width: fontSize(55, 32, 1920, 400),
                        marginTop: 5,
                      }}
                      className="aspect-square relative shrink-0 z-[1] mq450:w-[40px]"
                      alt=""
                      src="/youtube.svg"
                    />
                  </Link>
                </div>
              </div>
              <Link className="w-full" href={university?.website || ""}>
                <button className="cursor-pointer [border:none] py-[23px] px-5 bg-orange-200 self-stretch rounded-8xs flex flex-row items-start justify-center box-border gap-[18px] w-full z-[1] mq900:py-[10px] aspect-[700/90]">
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
              </Link>
              <div className="flex flex-row items-center w-full justify-center gap-10 h-[70px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.7999999999992724px]">
                  <div
                    onClick={bookmark}
                    className=" cursor-pointer flex flex-row items-center justify-start gap-[10.500000000003638px]"
                  >
                    <div className="flex flex-col items-center justify-center px-0 pb-0 w-5">
                      <IconButton style={{ padding: 0 }}>
                        {bookmarked ? (
                          <FavoriteIcon
                            style={{
                              color: "#DC6A6A",
                              padding: 0,
                              fontSize: fontSize(30, 19, 1920, 400),
                            }}
                          />
                        ) : (
                          <FavoriteBorderIcon
                            style={{
                              color: "#DC6A6A",
                              padding: 0,
                              fontSize: fontSize(30, 19, 1920, 400),
                            }}
                          />
                        )}
                      </IconButton>
                    </div>
                    <div className="flex flex-col items-start justify-startpx-0 pb-0">
                      <div
                        style={{
                          fontSize: fontSize(17, 11, 1920, 400),
                        }}
                        className="relative inline-block min-w-[39px] shrink-0 [debug_commit:1de1738] z-[1] mq450:text-sm font-red-hat-text"
                      >
                        Save
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={handleClickCompare}
                  className="cursor-pointer flex flex-row items-center justify-start gap-[10px]"
                >
                  <div className="flex flex-col items-center justify-center px-0 pb-0 w-5">
                    <IconButton style={{ padding: 0 }}>
                      <SyncAltIcon
                        style={{
                          color: "blue",
                          padding: 0,
                          fontSize: fontSize(30, 19, 1920, 400),
                        }}
                      />
                    </IconButton>
                  </div>
                  <div
                    style={{
                      fontSize: fontSize(17, 11, 1920, 400),
                    }}
                    className="relative inline-block min-w-[73px] shrink-0 [debug_commit:1de1738] z-[1] mq450:text-sm font-red-hat-text"
                  >
                    Compare
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating section */}

      <RatingSection university={university} />

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
            <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full text-40xl font-libre-baskerville mq1275:min-w-full mq450:gap-[25px_99px] mq900:gap-[49px_99px]">
              {university?.overviewt_html?.length ? (
                <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full mq900:gap-[18px_36px]">
                  <h1 className="text-inherit font-bold font-inherit inline-block max-w-full mq450:text-16xl mq900:text-xl ">
                    Overview
                  </h1>
                  <div className="self-stretch min-h-[197px] text-[22.1px] font-red-hat-text text-darkslategray inline-block shrink-0 mq450:text-lg mq900:text-sm">
                    <p className="m-0">&nbsp;</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: university?.overviewt_html || <></>,
                      }}
                      className="m-0 font-red-hat-text text-[#343434]"
                    ></div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              {university?.salient_features?.length ? (
                <>
                  <h1 className="m-0  relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-16xl mq900:text-xl">
                    Salient Features
                  </h1>
                  <div className="border border-orange-200 w-full bg-papayawhip px-10 flex flex-col gap-10 py-5 rounded-8xs">
                    {university.salient_features.map((e: any, i: number) => (
                      <div key={i} className="flex items-center gap-5">
                        {/* <ArrowCircleRightIcon
                      style={{
                        color: "#F7A600",
                        backgroundColor: "#000000",
                        borderRadius: "50%",
                        // fontSize: fontSize(21, 19, 1920, 400),
                      }}
                    /> */}
                        <img
                          src={"/arrow.svg"}
                          className="bg-black rounded-[100%]"
                        />
                        <div className="text-[22.1px] font-red-hat-text text-[#343434] mq450:text-lg mq900:text-sm">
                          {e.salient_feature_title}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
              {university?.video ? (
                <>
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
                  <VideoPlayer university={university} />
                </>
              ) : (
                <></>
              )}
              <div className="flex flex-row items-start justify-end py-0 box-border max-w-full text-17xl text-white w-full">
                <div className="flex-1 rounded-8xs bg-darkslateblue flex flex-row items-start justify-start relative max-w-full aspect-[1210/300] overflow-hidden">
                  <div className="flex-1 flex flex-row items-center justify-center pt-[20px] pb-[20px] pr-[20px] pl-[20px] box-border relative gap-[36px] max-w-full mq1275:flex-wrap mq1275:pl-[140px] mq1275:pr-[35px] mq1275:box-border mq450:pl-5 mq450:box-border mq900:gap-[18px] mq900:pl-[70px] mq900:box-border aspect-[1210/300]">
                    <img
                      className="h-full !m-[0] object-contain z-[3]"
                      alt=""
                      src="/image-22@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[332px] max-w-full">
                      <h3
                        style={{
                          fontSize: fontSize(36, 31, 1920, 400),
                        }}
                        className="m-0 w-[403px] relative text-[25px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-3xl mq900:text-10xl"
                      >
                        Find More About Fee Structure
                      </h3>
                      <div
                        style={{
                          fontSize: fontSize(20, 18, 1920, 400),
                        }}
                        className="self-stretch relative text-[14px] leading-[27px] font-red-hat-text z-[1] mq450:text-base mq450:leading-[22px]"
                      >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium...
                      </div>
                    </div>
                    <div className=" w-1/4 items-center flex flex-col items-start justify-start px-0 pb-0 box-border mq1275:flex-1">
                      <a
                        href={university?.fee_structure_url}
                        className="cursor-pointer [border:none] pt-[16px] pb-[16px] pr-9 pl-[16px] bg-orange-200 flex flex-row items-start justify-start gap-[18px] z-[1] aspect-[313/76] "
                      >
                        <div className="h-[77px] w-[313px] relative bg-orange-200 hidden" />
                        <img
                          className="w-5 h-5 relative z-[2]"
                          alt=""
                          src="/group.svg"
                        />
                        <div className="relative text-[16px] font-red-hat-display text-black text-left z-[1] mq450:text-lgi">
                          Admission Form
                        </div>
                      </a>
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
              <div className="font-red-hat-text text-[22px] flex">
                <b>Source: </b>
                <p>{university?.source}</p>
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
const UniversityDetails = () => {
  return (
    <Suspense>
      <SingleListingV2Approved />
    </Suspense>
  );
};
export default UniversityDetails;
