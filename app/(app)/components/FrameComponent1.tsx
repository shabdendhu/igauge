import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    // <section className="w-full grid grid-cols-12 flex justify-center bg-darkslateblue overflow-hidden shrink-0 max-w-full z-[2] text-center text-36xl text-white font-libre-baskerville">
    //   <div className="top-[0px] left-[-3px] bg-darkslateblue w-full h-full hidden" />
    //   <div className="col-span-3 flex flex-col justify-center items-end bottom-0">
    //     <img
    //       className="w-full  object-cover z-[1]"
    //       alt=""
    //       src="/image-9@2x.png"
    //     />
    //   </div>
    //   <div className="col-span-6  flex flex-col items-end justify-center gap-[28px] max-w-full my-[72px]">
    //     <div className="self-stretch flex flex-col items-end justify-start gap-[18px] max-w-full">
    //       <h1 className="m-0 self-stretch relative text-inherit capitalize font-bold font-inherit z-[1] mq450:text-14xl mq900:text-[40px]">
    //         Register to i-gauge to compare Institutions
    //       </h1>
    //       <div className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl-4 text-lightgray font-red-hat-text">
    //         <div className="relative leading-[27px] inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[22px]">
    //           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //           accusantium doloremque laudantium...
    //         </div>
    //       </div>
    //     </div>
    //     <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
    //       <button className="cursor-pointer [border:none] pt-[22px] pb-[18.300000000000185px] pr-[50.29999999999927px] pl-[51px] bg-orange-200 flex flex-row items-start justify-start whitespace-nowrap z-[1]">
    //         <div className="h-[77.3px] relative bg-orange-200 hidden" />
    //         <div className="relative text-8xl-3 font-red-hat-display text-black text-left z-[1]">
    //           Register Now
    //         </div>
    //       </button>
    //     </div>
    //   </div>

    //   <div className="col-span-3 flex flex-col justify-center">
    //     <img
    //       className="w-full  z-[1] @screen mq1440:max-w-full"
    //       loading="lazy"
    //       alt=""
    //       src="/frame-81.svg"
    //     />
    //   </div>
    // </section>

    <div className="h-[200px] w-full flex  relative overflow-hidden bg-darkslateblue  justify-center items-center z-1">
      <img
        className="h-60  -bottom-10 right-0 md:-left-10 z-0  absolute object-cover hidden sm:block"
        alt=""
        src="/image-9@2x.png"
      />
      <div className="text-white  flex justify-center items-center flex-col gap-y-2 ">
        <h1 className="font-libre-baskerville text-3xl md:text-5xl  capitalize text-center w-full xs:max-w-[55%]">
          Register to QS i-gauge To Compare Institutions
        </h1>
        <div className="flex text-center justify-center">
          <p className="font-red-hat-text  text-center flex max-w-[55%] text-xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium...
          </p>
        </div>

        <div className="relative text-base bg-orange-200 p-2 font-red-hat-display text-black text-left ">
          <button className="cursor-pointer h-3">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
