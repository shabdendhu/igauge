import Image from "next/image";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-y-8  mt-10 mx-7 sm:mx-16 mb-3 ">
      <div className="flex justify-between items-center w-full">
        <div className="flex  w-[120px] h-[52px] md:w-[225px]  ">
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
            src="/linkedin.svg"
          />
          <img
            className="h-5 sm:h-7 w-5 sm:w-7  cursor-pointer "
            alt=""
            src="/youtube.svg"
          />
        </div>
      </div>
      <div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.{" "}
        </p>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row items-start justify-start gap-y-4 sm:gap-x-12 w-full z-[1]  flex-wrap">
        <div className="text-sm cursor-pointer hover:underline">
          About I-Gauge
        </div>
        <div className="text-sm cursor-pointer hover:underline">
          University Rating
        </div>
        <div className="text-sm cursor-pointer hover:underline">
          College Rating
        </div>
        <div className="text-sm cursor-pointer hover:underline">
          Subject Rating
        </div>
        <div className="inline-block shrink-0 text-sm cursor-pointer hover:underline">
          School Education
        </div>
        <div className="inline-block min-w-[66px] text-sm cursor-pointer hover:underline">
          News
        </div>
        <div className="inline-block shrink-0 text-sm cursor-pointer hover:underline">
          Events
        </div>
        <div className="inline-block shrink-0 text-sm cursor-pointer hover:underline">
          Blogs
        </div>
      </div>
      <hr />
      <div className="flex flex-col  sm:flex-row-reverse justify-between gap-3">
        <div className="flex flex-row  justify-between items-center gap-5 ">
          <div className="text-nowrap">Cookies</div>
          <div className=" text-nowrap">Privacy Policy</div>
          <div className="text-nowrap">Terms & Condition</div>
        </div>
        <div className=" text-xs sm:text-sm text-center my-4 md:my-0">
          © 2024 QS Quacquarelli Symonds Limited. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
