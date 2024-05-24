"use client";
import { FunctionComponent, useEffect, useState } from "react";
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
import dummyData from "@/datatypes/home.json";
import axios from "axios";
import { useCalculateFontSize } from "../../hooks/use-calculate-font-size";
const HomeV2Approved: FunctionComponent = () => {
  const [data, setData] = useState<any>(dummyData);
  const fontSize = useCalculateFontSize();

  const getPages = async () => {
    try {
      const page = await axios(`/api/pages/1`, {
        method: "GET",
        // credentials: "include",
        withCredentials: true,
        xsrfCookieName: "payload-token",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const s = axiosManager.get("/api/pages/1?depth=1&draft=false");
      setData(page.data);
      console.log({ page }, "00000000000000000000000000000");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getPages();
    console.log(data);
  }, []);
  return (
    <div className="w-full  bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-full h-[39px]  hidden max-w-full" />
      <FrameComponent10 pageData={data} />

      <TopRated pageData={data} />
      <FrameComponent6 prop="/double_arrow.svg" />
      <FrameComponent5 pageData={data} />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[199.70000000000005px] pr-5 pl-[22px] box-border max-w-full mq900:pb-[84px]  mq900:px-5 mq900:box-border mq1275:pb-[130px] mq1275:box-border mq1440:px-[100px] mq1920:px-[136px]">
        <div className="w-[1650px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <TopRatedUniversitySection />
          <FrameComponent3 pageData={data} />
        </div>
      </section>
      <div className="bg-[#FFF1D2] px-[5vw] mb-[20vh] py-[5vh]">
        <p
          style={{
            fontSize: fontSize(64, 26, 1920, 400),
            fontFamily: "Libre Baskerville",
            fontWeight: 700,
            textAlign: "left",
          }}
          className="pb-[3vh]"
        >
          Evaluating Institutions, Guiding Students
        </p>
        <p
          style={{
            fontSize: fontSize(25, 15, 1920, 400),
            fontFamily: " Red Hat Text",
            fontWeight: 400,
            textAlign: "left",
          }}
        >
          Ratings are a method of assessing educational institutions based on
          pre-defined, measurable, and quantifiable indicators. They serve as a
          benchmark for institutions to evaluate, improve, and calibrate their
          performance. Ratings are crucial for institutions to track their
          reputation and competitiveness in the education market. They
          significantly impact student outcomes, enrolment decisions, and
          academic trajectories.
          <br />
          <br />
          Ratings incentivise institutions to improve their performance and
          quality of education. They guide students in making informed decisions
          about where to study, which is particularly important in India's
          diverse educational landscape.
        </p>
      </div>
      <FrameComponent2 pageData={data} />
      {/* <Icon /> */}
      {/* <Testimonials /> */}

      <FAQSection pageData={data} />
      <SkewTransform />
      <FrameComponent1 pageData={data} />
    </div>
  );
};

export default HomeV2Approved;
