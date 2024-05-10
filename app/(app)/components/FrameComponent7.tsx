import { FunctionComponent } from "react";
import FrameComponent8 from "./FrameComponent8";

const FrameComponent7: FunctionComponent = () => {
  const universities = [
    {
      image: "/rectangle-204.svg",
      coverImage: "/rectangle-166@2x.png",
      name: "CMR University",
    },
    {
      coverImage: "/rectangle-167@2x.png",
      image: "/rectangle-204-1.svg",
      name: "Vignan University",
    },
    {
      coverImage: "/rectangle-168@2x.png",
      image: "/rectangle-204-2.svg",
      name: "The NorthCap University",
    },
    {
      coverImage: "/rectangle-166@2x.png",
      image: "/rectangle-204-3.svg",
      name: "FLAME University",
    },
  ];
  return (
    <div className="w-full  flex flex-row items-start justify-start gap-[30px] max-w-full text-left text-11xl text-black font-red-hat-text smm:flex-col smm:gap-[10px] sm:overflow-x-auto">
      {universities.map((university) => {
        return (
          <div
            key={university.name}
            className="w-[390px] relative shrink-0 flex flex-col items-start justify-start pt-0 px-0  sm:pb-[91px] box-border gap-[17.300000000000182px] smm:pb-[10px] smm:w-full  mq900:box-border"
          >
            <div className="self-stretch h-[308.7px] rounded-3xs flex flex-row items-start justify-end pt-[27.300000000000185px] px-0 pb-[27px] box-border bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] smm:w-full max-w-full">
              <img
                className="h-[308.7px] w-[390.5px] absolute rounded-3xs object-cover  max-w-full smm:w-full"
                alt=""
                src="/rectangle-166@2x.png"
              />
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[47.1px] w-[167.4px] absolute overflow-hidden shrink-0 z-[1] top-[52px] ">
                <img
                  className="absolute top-[0px] left-[0px] rounded-[2.48px] w-[218.2px] h-[47.1px]"
                  alt=""
                  src="/rectangle-204.svg"
                />
                <div className="absolute top-[2.5px] left-[3.8px] w-[210.7px] h-[42.1px]">
                  <img
                    className="absolute top-[0px] left-[-21px] rounded-[2.48px] w-full h-full z-[1]"
                    alt=""
                    src="/rectangle-205.svg"
                  />
                  <div className="absolute top-[12.3px] left-[47.1px] text-mid uppercase font-inter text-black text-left inline-block w-[82px] h-[21px] min-w-[82px] z-[2]">
                    Diamond
                  </div>
                </div>
              </button>
            </div>
            <div className="w-full">
              <FrameComponent8
                cMRUniversity="CMR University"
                delhiIndia="Delhi, India"
                vector1="/vector-8.svg"
              />
            </div>
          </div>
        );
      })}
      {/* <div className="h-[399.8px] w-[390px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[90.80000000000018px] box-border gap-[17px] mq900:pb-[59px] mq900:box-border">
        <div className="self-stretch h-[309px] rounded-3xs flex flex-row items-start justify-end pt-[27.300000000000185px] px-[0.5px] pb-[27px] box-border bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-full">
          <img
            className="h-[309px] w-[390px] relative rounded-3xs object-cover hidden max-w-full"
            alt=""
            src="/rectangle-167@2x.png"
          />
          <div className="h-[47.1px] w-[167.4px] relative overflow-hidden shrink-0 z-[1]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[2.48px] w-[218.2px] h-[47.1px]"
              alt=""
              src="/rectangle-204-1.svg"
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.5px] left-[3.8px] w-[210.7px] h-[42.1px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[1]"
                alt=""
                src="/rectangle-205-1.svg"
              />
              <div className="absolute top-[12.3px] left-[47.1px] text-mid uppercase font-inter text-black text-center inline-block w-[81.8px] h-[21px] z-[2]">
                GOLD
              </div>
            </button>
          </div>
        </div>
        <FrameComponent8
          cMRUniversity="Vignan University"
          delhiIndia="Mumbai, India"
          vector1="/vector-10.svg"
          propWidth="373.4px"
          propMinWidth="125px"
          propDisplay="inline-block"
        />
      </div>
      <div className="h-[399.8px] w-[390px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[90.80000000000018px] box-border gap-[17px] mq900:pb-[59px] mq900:box-border">
        <div className="self-stretch h-[309px] rounded-3xs flex flex-row items-start justify-end pt-[27.300000000000185px] px-[0.1999999999970896px] pb-[27px] box-border bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-full">
          <img
            className="h-[309px] w-[390px] relative rounded-3xs object-cover hidden max-w-full"
            alt=""
            src="/rectangle-168@2x.png"
          />
          <div className="h-[47.1px] w-[167.4px] relative overflow-hidden shrink-0 z-[1]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[2.48px] w-[218.2px] h-[47.1px]"
              alt=""
              src="/rectangle-204-2.svg"
            />
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.5px] left-[3.7px] w-[210.7px] h-[42.1px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[1]"
                alt=""
                src="/rectangle-205-2.svg"
              />
              <div className="absolute top-[12.3px] left-[36px] text-mid uppercase font-inter text-white text-center inline-block w-[104.1px] h-[21px] z-[2]">
                Platinum
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[9px] shrink-0 [debug_commit:1de1738] max-w-full">
          <div className="flex flex-row items-start justify-start gap-[15.599999999998545px]">
            <div className="relative shrink-0 [debug_commit:1de1738] mq450:text-lg mq900:text-5xl">
              The NorthCap University
            </div>
            <div className="flex flex-col items-start justify-start pt-[11.199999999999818px] px-0 pb-0">
              <img
                className="w-[29.8px] h-[24.8px] relative shrink-0 [debug_commit:1de1738]"
                alt=""
                src="/vector-11.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[13px] text-xl">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-[15px] h-[19px] relative"
                alt=""
                src="/vector-7.svg"
              />
            </div>
            <div className="relative mq450:text-base">Lucknow, India</div>
          </div>
        </div>
      </div>
      <div className="h-[399.8px] w-[390px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[90.80000000000018px] box-border gap-[17px] text-center text-mid font-inter mq900:pb-[59px] mq900:box-border">
        <div className="self-stretch h-[309px] rounded-3xs flex flex-row items-start justify-end pt-[27.300000000000185px] px-0 pb-[27px] box-border bg-cover bg-no-repeat bg-[top] shrink-0 [debug_commit:1de1738] max-w-full">
          <img
            className="h-[309px] w-[390px] relative rounded-3xs object-cover hidden max-w-full"
            alt=""
            src="/rectangle-169@2x.png"
          />
          <div className="h-[47.1px] w-[167.4px] relative overflow-hidden shrink-0 z-[1]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[2.48px] w-[218.2px] h-[47.1px]"
              alt=""
              src="/rectangle-204-3.svg"
            />
            <div className="absolute top-[2.5px] left-[3.8px] w-[210.7px] h-[42.1px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-[2.48px] w-full h-full z-[1]"
                alt=""
                src="/rectangle-205-3.svg"
              />
              <div className="absolute top-[12.3px] left-[47.1px] uppercase inline-block w-[81.8px] h-[21px] z-[2]">
                Silver
              </div>
            </div>
          </div>
        </div>
        <FrameComponent8
          cMRUniversity="FLAME University"
          delhiIndia="Bangalore, India"
          vector1="/vector-14.svg"
          propWidth="372.7px"
          propMinWidth="unset"
          propDisplay="inline-block"
        />
      </div> */}
    </div>
  );
};

export default FrameComponent7;
