import React from "react";

const BlogCard = () => {
  return (
    <div className="h-full w-full flex flex-col border ">
      <div className="h-3/5 relative">
        <img
          className="h-full w-full w-full relative object-cover aspect-square  max-w-full md:"
          alt=""
          src="/rectangle-245@2x.png"
        />
        <button className="bg-darkslateblue absolute inline-flex  top-0 m-4 rounded-[4.26px] text-white p-2">
          Category
        </button>
      </div>
      <div className="m-3 h-full flex flex-col gap-y-3 md:m-[30px] md:justify-around">
        <div className=" flex gap-x-1">
          <img
            className="w-[11.9px] h-[11.9px] relative overflow-hidden shrink-0 [debug_commit:1de1738] z-[1]"
            alt=""
            src="/calendar-1.svg"
          />
          <p className="text-xs"> 12 March, 2024</p>
        </div>
        <div className="flex flex-col gap-y-2 md:gap-[17px]">
          <p className="text-lg font-libre-baskerville font-semibold md:text-11xl">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-[11px] md:text-mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est
            suscipit, eum, voluptate eligendi illo voluptates! suscipit, eum,
          </p>
        </div>
        <div className="h-full max-h-[50px]">
          <button className="bg-orange-200 h-full flex justify-center items-center gap-x-1 px-7">
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

export default BlogCard;
