"use client";
import { FunctionComponent } from "react";
import { useState } from "react";

const Select = ({ label = "select" }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
    // Do something with the selected value
    console.log("Selected value:", event.target.value);
  };

  return (
    <div className="h-full w-full flex relative">
      <select
        className="appearance-none  bg-white h-full w-full   top-0 border-[2px] border-[#F7A600] z-5 px-[10px]  font-red-hat-display text-xl text-darkslategray-100 mq1440:text-[14px] mq1600:text-[20px] mq900:text-[14px] text-gray-500"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">{label}</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      <img
        className="absolute right-5 top-[50%] transform -translate-y-1/2 w-[11px] h-1.5"
        alt=""
        src="/vector-5.svg"
      />
    </div>
  );
};

const TextBlock = () => {
  return (
    <div className="h-full  flex flex-1 flex-col justify-around ">
      <h1
        className="text-inherit font-bold font-inherit inline-block max-w-full z-[2]  
                mq450:text-19xl mq900:text-32xl  mq1600:text-[45px] 
                "
      >
        Looking for Best Institution?
      </h1>
      <div className="w-full relative text-xl font-red-hat-text text-[20px] z-[2] mq450:text-base ">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. `}</div>
    </div>
  );
};
const FrameComponent10: FunctionComponent = () => {
  return (
    <section className="min-h-[100px] self-stretch flex flex-row items-start justify-start pt-0 px-0  box-border max-w-full text-center text-45xl text-black font-libre-baskerville mq900:pb-[45px] mq900:box-border mq1275:pb-[69px] mq1275:box-border">
      <div className="h-[1000px] flex-1 relative [background:linear-gradient(180deg,_#fff0d1_71.5%,_#fff)] overflow-hidden max-w-full mq1275:h-auto mq1275:min-h-[983]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full hidden"
          alt=""
          src="/rectangle-162.svg"
        />
        <div className="absolute w-full h-full">
          <div className="grid grid-cols-10 w-full h-full">
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1 border-r-[1.6px] border-solid border-orange-300" />
            <div className="col-span-1" />
          </div>
        </div>
        <div className="w-screen min-h-screen px-10 pt-[80px]  mq900:pt-[10px] mq900:px-5">
          <div className="flex h-1/2 mdm:justify-between mdm:px-10 mq900:px-0">
            <div className="w-1/4 mdm:w-2/4">
              <img src="/image-16@2x.png" />
            </div>
            <div className=" w-2/4 mdm:absolute mdm:top-[300px] mdm:z-3 mdm:left-0 mdm:w-screen mdm:px-20 mq900:px-5 mq900:top-[200px]">
              <div className=" h-full mdm:hidden">
                <TextBlock />
              </div>
            </div>
            <div className=" w-1/4 mdm:w-2/4">
              <img src="/image-15@2x.png" />
            </div>
          </div>
          <div className="pt-10 px-10 md:hidden mdm:px-0">
            <TextBlock />
          </div>
          <div className="w-4/5 mx-auto flex flex-wrap justify-around  px-10 py-10  mdm:px-0 mdm:w-full ">
            <div className="flex px-[10px] w-1/4 h-[70px] mq900:w-1/2 mq900:h-[50px]">
              <Select label="Select Institution" />
            </div>
            <div className=" flex px-[10px] w-1/4 h-[70px] mq900:w-1/2 mq900:h-[50px]">
              <Select label="Select Ratings" />
            </div>
            <div className="flex grid grid-cols-12  w-2/4 h-[70px] mq900:w-full mq900:h-[50px] mq900:p-[10px]">
              <div className="h-[70px] col-span-8 flex-1 bg-white box-border flex flex-row items-center justify-start pt-[23px] px-[23px] pb-6 gap-[15px] w-full z-[3] border-[2px] border-solid border-orange-200 mq1440:p-[12px]  mq1920:p-[18px] mq900:h-[50px]">
                <div className="h-[79px] w-[460px] relative bg-white box-border hidden max-w-full border-[2px] border-solid border-orange-200" />
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-5 h-5 relative z-[1 mq1440:h-[14px]"
                    alt=""
                    src="/search.svg"
                  />
                </div>
                <input
                  className="w-52 [border:none] [outline:none] font-red-hat-display text-xl bg-[transparent] h-[26px] relative text-darkslategray-100 text-left inline-block p-0 z-[1] mq450:text-base mq1440:text-[14px] mq1600:text-[20px] "
                  placeholder="Search for Institutions..."
                  type="text"
                />
              </div>
              <button className="h-[70px] items-center col-span-4 cursor-pointer [border:none] pt-[23px] px-5 pb-6 bg-orange-200  w-full flex flex-row items-start justify-center box-border z-[3] mq1440:p-[16px] mq900:h-[50px]">
                <div className="h-[79px] w-full relative bg-orange-200 hidden" />
                <div className="relative text-5xl font-red-hat-display text-black text-center inline-block z-[1] mq450:text-lgi mq1440:text-[14px] mq1600:text-[20px]">
                  Search
                </div>
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center max-w-full text-13xl">
            <div className="flex flex-col items-center justify-center py-0 pr-0 pl-5 box-border gap-[45px] max-w-full">
              <div className="w-[1137px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mq900:px-0">
                <b className="w-[829px] relative inline-block shrink-0 max-w-full z-[3] mq450:text-lgi mq900:text-7xl md:pt-[50px]">
                  {`Trusted by the world's leading Institutions`}
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center justify-start gap-[98px] z-[3] text-left text-36xl font-red-hat-text mq1275:flex-wrap mq1275:justify-center">
                <div className=" w-2/3 grid grid-cols-4 mq900:grid-cols-2 gap-4 w-full">
                  <div className=" flex justify-center mq900:w-full">
                    <div className="w-[227px] flex flex-col items-start justify-start gap-[19px]">
                      <b className="relative mq450:text-14xl mq900:text-25xl">
                        100+
                      </b>
                      <div className="relative text-xl inline-block min-w-[78px] mq450:text-base">
                        School
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center mq900:w-full">
                    <div className="w-[227px] flex flex-col items-start justify-start gap-[19px]">
                      <b className="relative mq450:text-14xl mq900:text-25xl">
                        200+
                      </b>
                      <div className="relative text-xl inline-block min-w-[78px] mq450:text-base">
                        Collages
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mq900:w-full">
                    <div className="w-[227px] flex flex-col items-start justify-start gap-[19px]">
                      <b className="relative mq450:text-14xl mq900:text-25xl">
                        5k+
                      </b>
                      <div className="relative text-xl inline-block min-w-[78px] mq450:text-base">
                        Institutions Rated
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mq900:w-full">
                    <div className="w-[227px] flex flex-col items-start justify-start gap-[19px]">
                      <b className="relative mq450:text-14xl mq900:text-25xl">
                        20+
                      </b>
                      <div className="relative text-xl inline-block min-w-[78px] mq450:text-base">
                        Years QS Legacy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
