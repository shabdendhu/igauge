import React from "react";
import { blogs } from "@/app/(app)/Constants";

type TProps = {
  extractedData: {
    blog_title: any;
    first_text: any;
    blog_category_name: any;
    featured_image_url: any;
    createdAt: any;
    updatedAt: any;
  };
};

const BlogCardSmall = ({ extractedData }: TProps) => {
  console.log("extractedData-----------", extractedData);
  return (
    <div
      className=" border  flex flex-col h-fit "
      style={{
        aspectRatio: 550 / 530,
        overflow: "hidden",
      }}
    >
      <div className="h-3/5 relative">
        <img
          className="h-full  w-full relative object-cover aspect-square  "
          alt=""
          src={extractedData.featured_image_url}
        />
        <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
          {extractedData.blog_category_name}
        </button>
      </div>
      <div className="m-3 h-full flex flex-col gap-y-3 ">
        <div className="flex-1 flex flex-col gap-0 md:gap-[20px]">
          <div className=" flex gap-x-1">
            <img
              className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
              alt=""
              src="/calendar-1.svg"
            />
            <p className="text-xs"> {extractedData.updatedAt}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-lg font-libre-baskerville font-semibold">
              {extractedData.blog_title}
            </p>
            <p className="text-[11px]">{extractedData.first_text}</p>
          </div>
        </div>
        <div className="h-10 ">
          <button className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7">
            <div> Read More</div>
            <div className="h-full bg-orange-200 flex items-center">
              <img
                className=" h-[6px] w-[6px] relative "
                alt=""
                src="/double_arrow.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSmall;
