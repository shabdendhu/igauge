import type { NextPage } from "next";

const TabSection: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full w-auto h-auto [transform:rotate(0deg)] text-left text-17xl text-black font-libre-baskerville hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[45px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq900:gap-[22px_45px]">
      <h3 className="m-0 relative text-inherit font-bold font-inherit flex hover:font-bold hover:font-libre-baskerville hover:text-17xl hover:text-left hover:text-black hover:flex mq900:text-10xl mq450:text-3xl">{`Hey {Name}👋`}</h3>
      <div className="self-stretch h-[111px] rounded-8xs bg-white box-border overflow-x-auto shrink-0 flex flex-row items-start justify-between pt-[34px] pb-0 pr-0.5 pl-[55px] gap-[20px] max-w-full w-auto text-13xl text-darkslategray-200 font-red-hat-text border-[1px] border-solid border-whitesmoke hover:flex hover:self-stretch hover:w-auto hover:h-[111px] hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:rounded-8xs hover:pt-[34px] hover:pb-0 hover:pr-0.5 hover:pl-[55px] hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-whitesmoke mq900:h-auto mq1275:pl-[27px] mq1275:box-border">
        <div className="relative flex z-[1] hover:font-red-hat-text hover:text-13xl hover:text-left hover:text-darkslategray-200 hover:flex mq900:text-7xl mq450:text-lgi">
          Dashboard
        </div>
        <div className="w-[767px] shrink-0 flex flex-row items-start justify-start py-0 pr-28 pl-0 box-border gap-[173px] max-w-[calc(100%_-_442px)] h-auto [transform:rotate(0deg)] text-darkslateblue hover:flex hover:w-[767px] hover:h-auto hover:flex-row hover:gap-[173px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-28 hover:pl-0 hover:box-border hover:max-w-[calc(100%_-_442px)] mq900:flex-wrap mq900:gap-[173px_86px] mq900:pr-14 mq900:box-border mq450:gap-[173px_43px] mq450:pr-5 mq450:box-border">
          <div className="w-[227px] flex flex-col items-start justify-start gap-[35px] h-auto [transform:rotate(0deg)] hover:flex hover:w-[227px] hover:h-auto hover:flex-col hover:gap-[35px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-0 hover:pl-[3px] hover:box-border">
              <div className="relative flex z-[1] hover:font-red-hat-text hover:text-13xl hover:text-left hover:text-darkslateblue hover:flex mq900:text-7xl mq450:text-lgi">
                Account Details
              </div>
            </div>
            <div className="self-stretch h-0.5 relative box-border flex w-auto border-t-[2px] border-solid border-darkslateblue border-[2px] hover:flex hover:self-stretch hover:w-auto hover:h-0.5 hover:box-border hover:border-[2px] hover:border-solid hover:border-darkslateblue" />
          </div>
          <div className="relative text-darkslategray-200 flex z-[1] hover:font-red-hat-text hover:text-13xl hover:text-left hover:text-darkslategray-200 hover:flex mq900:text-7xl mq450:text-lgi">
            Change Password
          </div>
        </div>
        <button className="mt-[-35px] cursor-pointer [border:none] pt-[39px] pb-[38px] pr-[56.200000000000045px] pl-[59px] bg-indianred rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none flex flex-row items-start justify-start box-border gap-[11.799999999999956px] w-auto [align-self:unset] h-auto z-[2] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-row hover:gap-[11.799999999999956px] hover:items-start hover:justify-start hover:rounded-tl-none hover:rounded-tr-8xs hover:rounded-br-8xs hover:rounded-bl-none hover:pt-[39px] hover:pb-[38px] hover:pr-[56.200000000000045px] hover:pl-[59px] hover:box-border">
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[5px] hover:px-0 hover:pb-0 hover:box-border">
            <img className=" h-5 w-5 relative " alt="" src="/logout.png" />
          </div>
          <div className="relative text-7xl-7 font-red-hat-text text-white text-left flex min-w-[100] z-[1] hover:font-red-hat-text hover:text-7xl-7 hover:text-left hover:text-white hover:flex hover:min-w-[100] mq450:text-2xl">
            Log Out
          </div>
        </button>
      </div>
    </div>
  );
};

export default TabSection;
