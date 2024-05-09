import type { NextPage } from 'next';
import SelectStateUserCat from './select-state-user-cat';
import Image from 'next/image';

const DashboardLayout: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-left text-17xl text-black font-red-hat-text hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-end hover:[transform:rotate(0deg)] hover:py-0 hover:px-2.5 hover:box-border hover:max-w-full">
      <div className="flex-1 flex flex-col items-start justify-start gap-[67px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[67px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq900:gap-[33px_67px] mq450:gap-[17px_67px]">
        <h3 className="m-0 relative text-inherit font-normal font-inherit flex hover:font-red-hat-text hover:text-17xl hover:text-left hover:text-black hover:flex mq900:text-10xl mq450:text-3xl">
          More Information
        </h3>
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[48px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq900:gap-[24px_48px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[86px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[86px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq900:gap-[86px_43px] mq450:gap-[86px_21px] mq1625:flex-wrap">
            <div className="flex-1 rounded-8xs bg-white box-border flex flex-row items-start justify-between pt-[26px] pb-6 pr-[27px] pl-[46px] min-w-[502] max-w-full gap-[20px] h-auto border-[1px] border-solid border-whitesmoke hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:rounded-8xs hover:pt-[26px] hover:pb-6 hover:pr-[27px] hover:pl-[46px] hover:box-border hover:min-w-[502] hover:max-w-full hover:border-[1px] hover:border-solid hover:border-whitesmoke mq900:pl-[23px] mq900:box-border mq900:min-w-full mq1625:flex-1">
              <input
                className="w-[72px] [border:none] [outline:none] font-red-hat-text text-2xl bg-[transparent] h-7 relative text-darkslategray-100 text-left flex p-0 z-[1] hover:font-red-hat-text hover:text-2xl hover:text-left hover:text-darkslategray-100 hover:flex hover:w-[72px] hover:h-7 hover:p-0 mq450:text-mid"
                placeholder="Gender"
                type="text"
              />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-3 hover:px-0 hover:pb-0 hover:box-border">
                <img
                  className="w-[9px] h-[5px] relative flex box-border z-[1] border-[1px] border-solid border-black hover:flex hover:w-[9px] hover:h-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
            </div>
            <div className="flex-[0.9699] rounded-8xs bg-white box-border flex flex-row items-start justify-start pt-[26px] px-[47px] pb-6 min-w-[502] max-w-full h-auto gap-[0px] border-[1px] border-solid border-whitesmoke hover:flex hover:flex-[0.9699] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-start hover:rounded-8xs hover:pt-[26px] hover:px-[47px] hover:pb-6 hover:box-border hover:min-w-[502] hover:max-w-full hover:border-[1px] hover:border-solid hover:border-whitesmoke mq900:min-w-full mq1625:flex-1">
              <input
                className="w-[120px] [border:none] [outline:none] font-red-hat-text text-2xl bg-[transparent] h-7 relative text-darkslategray-100 text-left flex p-0 z-[1] hover:font-red-hat-text hover:text-2xl hover:text-left hover:text-darkslategray-100 hover:flex hover:w-[120px] hover:h-7 hover:p-0 mq450:text-mid"
                placeholder="Date of Birth"
                type="text"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[86px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[86px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq900:gap-[86px_43px] mq450:gap-[86px_21px] mq1625:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[48px] min-w-[502] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[48px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[502] hover:max-w-full mq900:min-w-full mq450:gap-[24px_48px] mq1625:flex-1">
              <SelectStateUserCat selectState="Select State" />
              <div className="self-stretch rounded-8xs bg-white box-border flex flex-row items-start justify-between pt-[26px] pb-6 pr-[27px] pl-[46px] max-w-full gap-[20px] w-auto h-auto border-[1px] border-solid border-whitesmoke hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[20px] hover:items-start hover:justify-between hover:rounded-8xs hover:pt-[26px] hover:pb-6 hover:pr-[27px] hover:pl-[46px] hover:box-border hover:max-w-full hover:border-[1px] hover:border-solid hover:border-whitesmoke mq900:pl-[23px] mq900:box-border">
                <input
                  className="w-[137px] [border:none] [outline:none] font-red-hat-text text-2xl bg-[transparent] h-7 relative text-darkslategray-100 text-left flex p-0 z-[1] hover:font-red-hat-text hover:text-2xl hover:text-left hover:text-darkslategray-100 hover:flex hover:w-[137px] hover:h-7 hover:p-0 mq450:text-mid"
                  placeholder="User Category"
                  type="text"
                />
                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border w-auto [align-self:unset] h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-auto hover:[align-self:unset] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-3 hover:px-0 hover:pb-0 hover:box-border">
                  <img
                    className="w-[9px] h-[5px] relative flex box-border z-[1] border-[1px] border-solid border-black hover:flex hover:w-[9px] hover:h-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-black"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
              </div>
            </div>
            <SelectStateUserCat
              selectState="Select City"
              propAlignSelf="unset"
              propFlex="0.9028"
              propMinWidth="502"
              propMinWidth1="104"
            />
          </div>
          <button className="cursor-pointer py-[26px] px-5 bg-chocolate-200 w-[441px] rounded-8xs box-border flex flex-row items-start justify-center whitespace-nowrap max-w-full h-auto gap-[0px] border-[1px] border-solid border-lightgray hover:bg-orange-200 hover:flex hover:w-[441px] hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:rounded-8xs hover:py-[26px] hover:px-5 hover:box-border hover:whitespace-nowrap hover:max-w-full hover:border-[1px] hover:border-solid hover:border-whitesmoke active:bg-chocolate-200 active:box-border active:border-[1px] active:border-solid active:border-lightgray">
            <div className="relative text-xl font-semibold font-red-hat-text text-black text-center flex z-[1] hover:font-semibold hover:font-red-hat-text hover:text-xl hover:text-center hover:text-black hover:flex">
              Save Changes
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardLayout;
