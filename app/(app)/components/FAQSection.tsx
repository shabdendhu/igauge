"use client";
import { FunctionComponent } from "react";
import CanvasArea from "./CanvasArea";
import AlignTools from "./AlignTools";
import CornerRadius from "./CornerRadius";
import FAQ from "./FAQ";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

const Accordion = ({ open = false, data }: any) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[45%] mdm:w-[100%]">
      <div
        className={`w-full min-h-[100px] flex items-center px-10 justify-between cursor-pointer transition-all duration-300 mq900:min-h-[50px] mq900:text-sm ${
          isOpen ? "bg-orange-200" : "bg-[#FFF0D1]"
        }`}
        onClick={toggleAccordion}
      >
        {data.question}
        {/* Render close icon if open, otherwise render open icon */}
        <ArrowBackIosNewIcon
          style={{
            transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
        {/* {isOpen ? (
          <img
            className="mq900:w-[13px]"
            src="/polygon-9.svg"
            alt="Close Icon"
          />
        ) : (
          <img
            className="mq900:w-[13px]"
            src="/polygon-9-1.svg"
            alt="Open Icon"
          />
        )} */}
      </div>
      {/* Render answer if open */}
      {isOpen && (
        <div className="min-h-[100px] text-xl py-5 px-10 transition-all duration-300 mq900:min-h-[50px] mq900:text-sm">
          {data.answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = ({ pageData }: any) => {
  const arr = [1, 2, 4, 5, 6, 6, 6];
  return (
    <section className="self-stretch mt-32 flex flex-col items-start justify-center pt-0 pb-[238px] pr-5 pl-[57px] box-border max-w-full text-left text-5xl text-black font-inter mq900:pb-[101px] mq900:box-border mq900:mt-[50px] mq1275:pl-7 mq1275:pb-[155px] mq1275:box-border">
      <div className="flex flex-col items-start justify-start gap-[29px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] text-36xl font-libre-baskerville mq1600:flex-wrap">
          <div className="w-[974px] flex flex-col items-start justify-start pt-0 px-0 pb-[41px] box-border min-w-[974px] min-h-[187px] max-w-full mq900:z-[2] mq1275:min-w-full mq1600:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-14xl mq900:text-25xl mq1440:text-[45px]">
                {pageData.content[9].title}
              </h1>
              <div className="w-[667px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-xl text-darkslategray-200 font-red-hat-text">
                <div className="flex-1 relative leading-[29px] inline-block max-w-full mq450:text-base mq450:leading-[23px]">
                  {pageData.content[10].description}
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[408px] right-0 absolute max-h-full object-cover max-w-full mq1600:flex-1 mdm:hidden mdm:z-[-1]"
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
        </div>
      </div>
      <div className=" flex flex-row justify-between w-full flex-wrap gap-y-10 pt-[100px] mq900:pt-[50px]">
        {/* <FAQ /> */}
        {pageData.content[9].questions_answers.map((e: any, i: number) => (
          <Accordion data={e} open={i == 0 || i == 1} />
        ))}
        {/* <Accordion open={true} />
        <Accordion />
        <Accordion />
        <Accordion /> */}
        {/* <div className="bg-orange-200 min-w-[45%]">Question</div>
        <div className="bg-orange-200 min-w-[45%]">Question</div>
        <div className="bg-orange-200 min-w-[45%]">Question</div>
        <div className="bg-orange-200 min-w-[45%]">Question</div> */}
      </div>
    </section>
  );
};

export default FAQSection;
