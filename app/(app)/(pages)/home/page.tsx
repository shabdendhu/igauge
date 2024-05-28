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
import { Button } from "@mui/material";
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
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[100px] pr-5 pl-[22px] box-border max-w-full mq900:pb-[84px]  mq900:px-5 mq900:box-border mq1275:pb-[130px] mq1275:box-border mq1440:px-[100px] mq1920:px-[136px]">
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
      {/* <FrameComponent1 pageData={data} /> */}
      <div className="w-full min-h-[250px] aspect-[1920/450] bg-[#272761] flex justify-evenly mq450:flex-col mq450:mt-[150px] mq450:aspect-square">
        <div className="w-1/3 bodrder border-red-500 mq450:w-full">
          <img
            src="image-9@2x.png"
            className="relative top-[10%] h-full mq450:top-[-30%] left-[-50px] mq450:left-[0]"
          />
        </div>
        <div
          style={{
            fontFamily: "Libre Baskerville",
            fontSize: fontSize(45, 25, 1920, 400),
            fontWeight: 700,
            textAlign: "left",
          }}
          className="w-1/3 bordfer blue-red-500 text-white flex items-center mq450:w-full relative  mq450:top-[-20%] mq450:px-[20px]"
        >
          Unlock a world of educational opportunities
        </div>
        <div className="w-1/3 borfder yellow-red-500 justify-center flex flex-col items-start px-5 mq450:w-full relative  mq450:top-[-10%]">
          <p
            style={{
              fontFamily: "Red Hat Text",
              fontSize: fontSize(20, 14, 1920, 400),
              // fontWeight: 700,
              textAlign: "left",
              color: "white",
              lineHeight: `${fontSize(28, 17, 1920, 400)}px`,
              marginBottom: "15px",
            }}
          >
            Register now and compare between top institutions with QS I-GAUGE
            ratings.
          </p>
          <Button
            style={{
              fontSize: fontSize(27, 11, 1920, 400),
            }}
            className="bg-orange-500 text-black rounded-none px-10 py-5 hover:bg-orange-500 mq450:px-5 mq450:py-2"
          >
            Sign Up Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeV2Approved;
