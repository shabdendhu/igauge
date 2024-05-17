"use client";
import { FunctionComponent, useEffect } from "react";
import Header from "../../components/Header";
import FrameComponent10 from "../../components/HeroBanner";
import TopRatedCollection from "../../components/TopRatedCollection";
import FrameComponent7 from "../../components/FrameComponent7";
import FrameComponent6 from "../../components/FrameComponent6";
import FrameComponent5 from "../../components/FrameComponent5";
import TopRatedUniversitySection from "../../components/TopRatedUniversitySection";
import FrameComponent3 from "../../components/FrameComponent3";
import FrameComponent2 from "../../components/RatingSystemComponent";
import BarChart from "../../components/BarChart";
import Logarithmic from "../../components/Logarithmic";
import FAQSection from "../../components/FAQSection";
import SkewTransform from "../../components/SkewTransform";
import FrameComponent1 from "../../components/FrameComponent1";
import { useRouter } from "next/navigation";
import TopRated from "../../components/v1/Home/TopRated";
import Testimonials from "../../components/v1/Home/Testimonials";
import data from "@/x.json";
const HomeV2Approved: FunctionComponent = () => {
  const router = useRouter();
  const getPages = async () => {
    try {
      const page = await fetch(`/api/pages`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const s = axiosManager.get("/api/pages/1?depth=1&draft=false");

      console.log({ page });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPages();
  }, []);
  return (
    <div className="w-full  bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-full h-[39px]  hidden max-w-full" />
      <FrameComponent10 pageData={data} router={router} />

      <TopRated />
      <FrameComponent6 prop="/double_arrow.svg" />
      <FrameComponent5 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[199.70000000000005px] pr-5 pl-[22px] box-border max-w-full mq900:pb-[84px]  mq900:px-5 mq900:box-border mq1275:pb-[130px] mq1275:box-border mq1440:px-[100px] mq1920:px-[136px]">
        <div className="w-[1650px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <TopRatedUniversitySection />
          <FrameComponent3 />
        </div>
      </section>
      <FrameComponent2 />
      {/* <Icon /> */}
      <Testimonials />
      <FAQSection />
      <SkewTransform />
      <FrameComponent1 />
    </div>
  );
};

export default HomeV2Approved;
