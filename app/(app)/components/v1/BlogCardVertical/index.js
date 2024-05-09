import React from "react";

const BlogCardVertical = () => {
  return (
    <div className="h-1/2 flex gap-x-3 border">
      <div className="w-3/5 h-full">
        <img
          className="w-full h-full relative object-cover aspect-square  max-w-full"
          alt=""
          src="/rectangle-245@2x.png"
        />
      </div>
      <div className=" w-full flex flex-col justify-around pl-5 ">
        <div className=" flex gap-x-1">
          <img
            className="w-[11.9px] h-[11.9px] relative overflow-hidden "
            alt=""
            src="/calendar-1.svg"
          />
          <p className="text-xs"> 12 March, 2024</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-lg font-libre-baskerville font-semibold md:text-11xl">
            Lorem ipsum dolor
          </p>
          <p className="text-[11px] md:text-mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est
            odit repellendus minima voluptas sit adipisci quasi eveniet id
            suscipit, eum, voluptate eligendi illo voluptates!
          </p>
        </div>
        <div className="w-full ">
          <button className="bg-orange-200 h-[49px] flex justify-center items-center gap-x-1 px-7">
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

export default BlogCardVertical;
