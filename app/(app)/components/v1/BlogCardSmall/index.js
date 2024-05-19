import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import { useRouter } from "next/navigation";
import React from "react";

const BlogCardSmall = ({ blog }) => {
  const fontSize = useCalculateFontSize();
  const router = useRouter();
  return (
    <div
      className=" border  flex flex-col "
      style={{
        aspectRatio: 550 / 530,
        overflow: "hidden",
      }}
    >
      <div className="h-3/5 relative">
        <img
          className="h-full  w-full relative object-cover aspect-square  "
          alt=""
          src={blog?.featured_image?.url}
        />
        <button className="bg-darkslateblue font-libre-baskerville h-7 items-center absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2 text-[10px]">
          Category
        </button>
      </div>
      <div className="m-3 h-full flex flex-col gap-y-3 ">
        <div className="flex-1 flex flex-col gap-[20px]">
          <div className=" flex gap-x-1">
            <img
              className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
              alt=""
              src="/calendar-1.svg"
            />
            <p className="text-xs"> 12 March, 2024</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p
              style={{
                fontSize: fontSize(30, 8, 1920, 400),
              }}
              className="text-lg font-libre-baskerville font-semibold line-clamp-1"
            >
              {blog.blog_title}
            </p>
            <p
              style={{
                fontSize: fontSize(13, 9, 1920, 400),
              }}
              className="text-[11px] line-clamp-3"
            >
              {blog.excerpt}
            </p>
          </div>
        </div>
        <div className="h-10 ">
          <button
            onClick={() => router.push(`/blog?id=${blog.id}`)}
            className="bg-orange-200 h-full  flex justify-center items-center gap-x-1 px-7"
          >
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
