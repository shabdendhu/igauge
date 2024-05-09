import type { NextPage } from 'next';

const FeatureSplitter: NextPage = () => {
  return (
    <div className="w-[305px] shrink-0 flex flex-col items-start justify-start gap-[28.800000000000185px] h-auto [transform:rotate(0deg)] text-left text-9xl text-black font-libre-baskerville hover:flex hover:w-[305px] hover:h-auto hover:flex-col hover:gap-[28.800000000000185px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
      <img
        className="w-[102.2px] h-[102.2px] relative shrink-0 [debug_commit:1de1738] flex gap-[0px] z-[1] hover:flex hover:w-[102.2px] hover:h-[102.2px] hover:gap-[0px] hover:shrink-0 hover:[debug_commit:1de1738]"
        loading="lazy"
        alt=""
        src="/frame-202.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[18px] shrink-0 [debug_commit:1de1738] w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[18px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:shrink-0 hover:[debug_commit:1de1738]">
        <h2 className="m-0 relative text-inherit font-bold font-inherit flex z-[1] hover:font-bold hover:font-libre-baskerville hover:text-9xl hover:text-left hover:text-black hover:flex mq1275:text-3xl">
          Lorem Ipsum
        </h2>
        <div className="self-stretch relative text-xl font-red-hat-text text-darkslategray-300 flex w-auto z-[1] hover:font-red-hat-text hover:text-xl hover:text-left hover:text-darkslategray-300 hover:flex hover:self-stretch hover:w-auto mq1275:text-base">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam
        </div>
      </div>
    </div>
  );
};

export default FeatureSplitter;
