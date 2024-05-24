import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

export type ValueCombinerType = {
  filterSet?: string;
};

const ValueCombiner = ({ filterSet, data }: any) => {
  const router = useRouter();
  return (
    <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-17xl-7 text-black font-libre-baskerville mq900:flex-wrap">
      <img
        className="h-[252px] w-[252px] relative object-cover min-h-[252px] z-[1] mq900:flex-1 md:h-[270px]"
        loading="lazy"
        alt=""
        src={data.featured_image.url}
      />
      <div className="flex-1 bg-white box-border flex flex-col items-start justify-start pt-7 pb-[17px] pr-6 pl-[25px] gap-[47.79999999999973px] min-w-[337px] max-w-full border-[1px] border-solid border-whitesmoke-200 mq450:min-w-full mq900:gap-[24px_47.8px]">
        <div className="w-[519px] h-[252px] relative bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[18.300000000000185px] max-w-full">
          <b className="self-stretch relative z-[1] mq450:text-3xl mq900:text-10xl line-clamp-1">
            {data?.blog_title}
          </b>
          <div className="w-[433.6px] relative text-lg-4 font-inter text-darkslategray-200 inline-block max-w-full z-[1] line-clamp-3">
            {data.excerpt}
          </div>
        </div>
        <button
          onClick={() => {
            router.push("/blog?id=" + data.id);
          }}
          className="cursor-pointer [border:none] pt-[13.099999999999907px] pb-[10.800000000000182px] pr-[34.099999999998545px] pl-[34.5px] bg-orange-200 flex flex-row items-start justify-start gap-[5.900000000001455px] z-[1]"
        >
          <div className="h-[45.9px] w-[161.3px] relative bg-orange-200 hidden" />
          <div className="relative text-base-2 font-red-hat-display text-black text-left inline-block min-w-[78.5px] z-[1]">
            Read More
          </div>
          <div className="flex flex-col items-start justify-start pt-[7.700000000000273px] px-0 pb-0">
            <img
              className=" h-[6px] w-[6px] relative "
              alt=""
              src="/double_arrow.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ValueCombiner;
