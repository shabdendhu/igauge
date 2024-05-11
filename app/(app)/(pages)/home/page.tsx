"use client";
import { FunctionComponent } from "react";
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
// import { searchInstitutions } from "@/utils/getInstitution";

const HomeV2Approved: FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className="w-full  bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-full h-[39px]  hidden max-w-full" />
      <FrameComponent10 router={router} />
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
      <section className="w-full bg-blanchedalmond pl-10 pt-10 pb-20 flex flex-col gap-[60px] mq900:px-5  mq1440:px-5 relative md:pl-[130px] min-h-[800px] justify-center overflow-hidden">
        <BarChart />
        <div id="movile-component" className="md:hidden z-[5]">
          <Logarithmic />
        </div>
        <div
          id="desktop-component"
          className="flex flex-row gap-[10px] overflow-auto mdm:hidden z-[5] no-scrollbar"
        >
          {Array(5)
            .fill("")
            .map((e, i) => (
              <Logarithmic key={i} />
            ))}
        </div>
        <img
          src="/frame-29.svg"
          className="flex self-center md:absolute md:right-20 md:top-20"
        />
        <img
          className="w-[300px] h-[604px] absolute !m-[0] bottom-[-100px] left-[-100px] z-[1]"
          alt=""
          src="/frame-49.svg"
        />
        <img
          className="absolute h-full top-[-100px] bottom-[0px] left-[90%] max-h-full w-[300px] z-[1]"
          loading="lazy"
          alt=""
          src="/frame-56.svg"
        />
      </section>
      <FAQSection />
      <SkewTransform />
      <FrameComponent1 />
    </div>
  );
};

export default HomeV2Approved;
