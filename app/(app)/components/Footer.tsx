"use client";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { useCalculateFontSize } from "../hooks/use-calculate-font-size";
import { fetchData } from "../services/institution";

const Footer: FunctionComponent = () => {
  const fontSize = useCalculateFontSize();
  const [footer, setFooter] = useState<any>({});
  useEffect(() => {
    fetchData("/globals/footer", {}).then((e) => {
      setFooter(e);
    });
  }, []);

  return (
    <div className="flex flex-col gap-y-8  mt-10 mx-7 sm:mx-16 mb-3 ">
      <div className="flex justify-between items-center w-full">
        <div className="flex  h-[52px] md:h-[72px]">
          <img
            className="object-contain h-full w-full"
            alt=""
            src="/igaugeinvertedrgb.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[13px]">
          <img
            className="h-5 sm:h-7 w-5 sm:w-7  cursor-pointer"
            alt=""
            src="/frame-2.svg"
          />
          <img
            className="h-5 sm:h-7 w-5 sm:w-7  cursor-pointer"
            alt=""
            src="/frame-3.svg"
          />
          <img
            className="h-5 sm:h-7 w-5 sm:w-7 cursor-pointer "
            alt=""
            src="/twitter-1.svg"
          />
          <img
            className="h-5 sm:h-7 w-5 sm:w-7  cursor-pointer "
            alt=""
            src="/linkedin.png"
          />
          <img
            className="h-5 sm:h-7 w-5 sm:w-7  cursor-pointer "
            alt=""
            src="/youtube.png"
          />
        </div>
      </div>
      <div>
        <div
          style={{
            fontSize: fontSize(24, 12, 1920, 400),
            color: "#343434",
            fontFamily: "Red Hat Text",
          }}
          dangerouslySetInnerHTML={{ __html: footer.footer_description_html }}
        ></div>
      </div>
      <hr />
      <div
        style={{
          fontSize: fontSize(24, 14, 1920, 400),
        }}
        className="flex flex-col sm:flex-row items-start justify-start gap-y-4 sm:gap-x-12 w-full z-[1]  flex-wrap"
      >
        {footer?.primary_footer_menu?.map((e: any, i: number) => (
          <a
            href={e.link}
            className=" cursor-pointer hover:underline font-red-hat-display"
            key={e.id}
          >
            {e.name}
          </a>
        ))}
        {/* <div className=" cursor-pointer hover:underline">University Rating</div>
        <div className=" cursor-pointer hover:underline">College Rating</div>
        <div className=" cursor-pointer hover:underline">Subject Rating</div>
        <div className="inline-block shrink-0  cursor-pointer hover:underline">
          School Education
        </div>
        <div className="inline-block min-w-[66px]  cursor-pointer hover:underline">
          News
        </div>
        <div className="inline-block shrink-0  cursor-pointer hover:underline">
          Events
        </div>
        <div className="inline-block shrink-0  cursor-pointer hover:underline">
          Blogs
        </div> */}
      </div>
      <hr />
      <div
        style={{
          fontSize: fontSize(20, 12, 1920, 400),
        }}
        className="flex flex-col  sm:flex-row-reverse justify-between gap-3"
      >
        <div className="flex flex-row  justify-between items-center gap-5 ">
          {footer?.policy_footer_menu?.map((e: any, i: number) => (
            <a key={i} href={e.link} className="text-nowrap">
              {e.name}
            </a>
          ))}
          {/* <div className=" text-nowrap">Privacy Policy</div>
          <div className="text-nowrap">Terms & Condition</div> */}
        </div>
        <div className="  text-center my-4 md:my-0">{footer.copy_right}</div>
      </div>
    </div>
  );
};

export default Footer;
