import { FunctionComponent } from "react";
import Header from "../../components/Header";
import FrameComponent10 from "../../components/HeroBanner";
import FrameComponent9 from "../../components/TopRatedCollection";
import FrameComponent7 from "../../components/FrameComponent7";
import FrameComponent6 from "../../components/FrameComponent6";
import FrameComponent5 from "../../components/FrameComponent5";
import TopRatedUniversitySection from "../../components/TopRatedUniversitySection";
import FrameComponent3 from "../../components/FrameComponent3";
import FrameComponent2 from "../../components/RatingSystemComponent";
import Icon from "../../components/Icon";
import BarChart from "../../components/BarChart";
import Logarithmic from "../../components/Logarithmic";
import FAQSection from "../../components/FAQSection";
import SkewTransform from "../../components/SkewTransform";
import FrameComponent1 from "../../components/FrameComponent1";
import Footer from "../../components/Footer";

const HomeV2Approved: FunctionComponent = () => {
  return (
    <div>
      <div className="w-full ">
        <FrameComponent10 />
        <div className="px-6 sm:px-[150px] mt-20 sm:mt-48">
          <FrameComponent9 />
          <FrameComponent7 />
          <FrameComponent6 prop="/double_arrow.svg" />
        </div>
        <FrameComponent5 />
        <div className="mt-[76px] px-6 sm:px-[150px] ">
          <TopRatedUniversitySection />
          <FrameComponent3 />
        </div>
        <FrameComponent2 />
        <Icon />
        {/* <div className="mb-28">
          <Icon />
        </div> */}
        {/* <section className="w-full bg-blanchedalmond pl-10 pt-10 pb-20 flex flex-col gap-[60px] mq900:px-5  mq1440:px-5 relative md:pl-[130px] min-h-[800px] justify-center">
          <BarChart />
          <div id="movile-component" className="md:hidden z-[5]">
            <Logarithmic />
          </div>
          <div
            id="desktop-component"
            className="flex flex-row gap-[10px] overflow-auto mdm:hidden z-[5]"
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
            className="w-[300px] h-[604px] absolute !m-[0] bottom-[0px] left-[0px] z-[1]"
            alt=""
            src="/frame-49.svg"
          />
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[90%] max-h-full w-[300px] z-[1]"
            loading="lazy"
            alt=""
            src="/frame-56.svg"
          />
        </section> */}
        <div className="w-full bg-blanchedalmond mt-[108px]  pt-10 pb-20 flex flex-col gap-[60px] px-6 sm:px-[150px] relative  min-h-[800px] justify-center overflow-hidden">
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
            className="w-[550px] h-[700px] sm:w-[300px] sm:h-[604px]  absolute m-[0] bottom-[-180px] left-[-40px] z-[1]"
            alt=""
            src="/frame-49.svg"
          />

          <img
            className="absolute hidden sm:block  h-full top-[-275px] bottom-[0px] left-[85%] max-h-full w-[300px] z-[1] "
            loading="lazy"
            alt=""
            src="/frame-56.svg"
          />
        </div>
        <div className="mt-[82px]">
          <FAQSection />
        </div>
        <div>
          <SkewTransform />
        </div>
        <div className="mt-[149px] px-6 md:px-0">
          <FrameComponent1 />
        </div>
        {/* <div className="w-full bg-blanchedalmond  pt-10 pb-20 flex flex-col gap-[60px] px-6 sm:px-[150px] relative  min-h-[800px] justify-center overflow-hidden">
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
            className="w-[550px] h-[700px] sm:w-[300px] sm:h-[604px]  absolute m-[0] bottom-[-180px] left-[-40px] z-[1]"
            alt=""
            src="/frame-49.svg"
          />

          <img
            className="absolute hidden sm:block  h-full top-[-275px] bottom-[0px] left-[85%] max-h-full w-[300px] z-[1] "
            loading="lazy"
            alt=""
            src="/frame-56.svg"
          />
        </div> */}
        {/* <FAQSection />
        <SkewTransform />
        <FrameComponent1 /> */}
      </div>
    </div>
  );
};

export default HomeV2Approved;

{
  /* <div className="flex flex-col w-full h-[983px] relative bg-[url('/rectangle-162.svg')]">
        <div className="z-10 h-full w-full   border border-red-500 ">
          <div className="max-w-[1800px] flex justify-center">
            <div className="flex  justify-center w-full items-center">
              <img
                className="  w-[507px] h-[385px] object-contain"
                loading="lazy"
                alt=""
                src="/image-16@2x.png"
              />
              <div className="border border-green-500 pt-10">
                <p className="text-[34px] sm:text-[63px] font-semibold font-libre-baskerville text-center mt-2">
                  Looking For Best Institutions?
                </p>
              </div>
              <img
                className="  w-[507px] h-[385px] object-contain "
                loading="lazy"
                alt=""
                src="/image-15@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="h-full w-full flex justify-between z-[5px] absolute ">
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
          <div className="h-full border-r-[1px] border-orange-100/15 " />
        </div>
        <div className="px-16 font-libre-baskerville pb-3 z-0">
          <p className="text-center text-white">
            “Universities exist to transmit knowledge and understanding of ideas
            and values to students not to provide entertainment for spectators
            or employment for athletes.”
          </p>
        </div>
      </div> */
}

{
  /*  <div className="w-full h-[983px] relative ">
         <img
          className=" w-full h-full absolute"
          alt=""
          src="/rectangle-162.svg"
        /> 
        <img src="/image-15@2x.png" className="z-[5px]" />
        <img src="/image-16@2x.png" className="z-[5px]" />
        <div className="h-full w-full flex justify-between z-0 absolute ">
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
          <div className="h-full border-r-[0.6px] border-gray-100/5 " />
        </div>
      </div> */
}

// <div className="w-full  bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
//   <div className="w-full h-[39px]  hidden max-w-full" />
//   <FrameComponent10 />
//   <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[135.19999999999982px] pr-5 pl-[34px] box-border max-w-full smm:px-5 mq450:pb-[57px] mq450:box-border mq1275:pb-[88px] mq1275:box-border mq1440:pb-[94.5px]">
//     <div className="flex flex-col items-start justify-start gap-[45px] max-w-full mq900:gap-[22px_45px]">
// <FrameComponent9 />
// <FrameComponent7 />
//     </div>
//   </section>
//   <FrameComponent6 prop="/19.svg" />
//   <FrameComponent5 />
//   <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[199.70000000000005px] pr-5 pl-[22px] box-border max-w-full mq900:pb-[84px]  mq900:px-5 mq900:box-border mq1275:pb-[130px] mq1275:box-border mq1440:px-[100px] mq1920:px-[136px]">
//     <div className="w-[1650px] flex flex-col items-start justify-start gap-[30px] max-w-full">
//       <TopRatedUniversitySection />
// <FrameComponent3 />
//     </div>
//   </section>
//   <FrameComponent2 />
//   {/* <Icon /> */}
// <section className="w-full bg-blanchedalmond pl-10 pt-10 pb-20 flex flex-col gap-[60px] mq900:px-5  mq1440:px-5 relative md:pl-[130px] min-h-[800px] justify-center">
//   <BarChart />
{
  /* <div id="movile-component" className="md:hidden z-[5]">
  <Logarithmic />
</div>
<div
  id="desktop-component"
  className="flex flex-row gap-[10px] overflow-auto mdm:hidden z-[5]"
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
  className="w-[300px] h-[604px] absolute !m-[0] bottom-[0px] left-[0px] z-[1]"
  alt=""
  src="/frame-49.svg"
/>
<img
  className="absolute h-full top-[0px] bottom-[0px] left-[90%] max-h-full w-[300px] z-[1]"
  loading="lazy"
  alt=""
  src="/frame-56.svg"
/> */
}
// </section>
// <FAQSection />
// <SkewTransform />
// <FrameComponent1 />
// </div>
