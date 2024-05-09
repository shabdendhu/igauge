import type { NextPage } from "next";

const FrameComponent1: NextPage = () => {
  return (
    <div className="w-[1650px] flex flex-col items-start justify-start gap-[45px] max-w-full text-left text-17xl text-black font-libre-baskerville mq900:gap-[22px]">
      <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-3xl mq900:text-10xl">{`Hey {Name}👋`}</h1>
      <div className="self-stretch h-[111px] rounded-8xs bg-white box-border flex flex-row items-start justify-between pt-[34px] pb-0 pr-1.5 pl-14 gap-[20px] max-w-full text-13xl text-darkslateblue font-red-hat-text border-[1px] border-solid border-whitesmoke-200 mq900:h-auto mq1275:pl-7 mq1275:box-border">
        <div className="h-[111px] w-[1650px] relative rounded-8xs bg-white box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-200" />
        <div className="w-[156px] flex flex-col items-start justify-start gap-[35px]">
          <h2 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-lgi mq900:text-7xl">
            Dashboard
          </h2>
          <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-darkslateblue" />
        </div>
        <div className="w-[756px] flex flex-row items-start justify-start py-0 pr-[104px] pl-0 box-border gap-[173px] max-w-[calc(100%_-_442px)] text-darkslategray-100 mq450:gap-[43px] mq450:pr-5 mq450:box-border mq900:flex-wrap mq900:gap-[86px] mq900:pr-[52px] mq900:box-border">
          <h2 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-lgi mq900:text-7xl">
            Account Details
          </h2>
          <h2 className="m-0 relative text-inherit font-normal font-inherit z-[1] mq450:text-lgi mq900:text-7xl">
            Change Password
          </h2>
        </div>
        <button className="mt-[-35px] cursor-pointer [border:none] pt-[39px] pb-[38px] pr-[56.2px] pl-[59px] bg-indianred rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none flex flex-row items-start justify-start gap-[11.8px] z-[2]">
          <div className="relative text-7xl-7 font-red-hat-text text-indianred text-left hidden min-w-[100px] mq450:text-2xl">
            Log Out
          </div>
          <img className=" h-5 w-5 relative " alt="" src="/logout.png" />
          <div className="h-28 w-[246px] relative rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-indianred hidden" />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <img className=" h-5 w-5 relative " alt="" src="/logout.png" />
          </div>
          <div className="relative text-7xl-7 font-red-hat-text text-white text-left inline-block min-w-[100px] z-[1] mq450:text-2xl">
            Log Out
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
